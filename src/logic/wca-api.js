import _ from 'lodash';

export const searchPeople = query =>
  apiFetch(`/search/users?persons_table=true&q=${query}`)
    .then(data => data.result);

const personDataByWcaIdCache = new Map();

export const getPeopleByWcaIds = wcaIds => {
  const [cachedWcaIds, wcaIdsToFetch] = _.partition(wcaIds, wcaId => personDataByWcaIdCache.has(wcaId));
  const cachedPeopleData = _.map(cachedWcaIds, wcaId => personDataByWcaIdCache.get(wcaId));
  const promises = _.map(_.chunk(wcaIdsToFetch, 100), wcaIdsSubset =>
    apiFetch(`/persons?per_page=100&wca_ids=${wcaIdsSubset.join(',')}`)
  );
  return Promise.all(promises)
    .then(_.flatten)
    .then(peopleData =>
      peopleData.map(({ personalRecords, ...rest }) => (
        /* Revert camelization of event ids. */
        { ...rest, personalRecords: _.mapKeys(personalRecords, (value, key) => _.toLower(key)) }
      ))
    )
    .then(peopleData => {
      _.each(peopleData, personData => personDataByWcaIdCache.set(personData.person.wcaId, personData));
      return peopleData.concat(cachedPeopleData);
    });
}

const apiFetch = (path, fetchOptions = {}) => {
  const baseApiUrl = "https://www.worldcubeassociation.org/api/v0";

  return fetch(`${baseApiUrl}${path}`, fetchOptions)
    .then(response => response.json())
    .then(camelizeKeysDeep);
};

const camelizeKeysDeep = object =>
  _.isArray(object)
    ? _.map(object, camelizeKeysDeep)
    : _.mapValues(
        _.mapKeys(object, (value, key) => _.camelCase(key)),
        value => _.isObject(value) ? camelizeKeysDeep(value) : value
      );
