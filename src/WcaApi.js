import _ from 'lodash';

const camelizeKeysDeep = object =>
  _.isArray(object)
    ? _.map(object, camelizeKeysDeep)
    : _.mapValues(
        _.mapKeys(object, (value, key) => _.camelCase(key)),
        value => _.isObject(value) ? camelizeKeysDeep(value) : value
      );

export default class WcaApi {
  static fetch(path, fetchOptions = {}) {
    const baseApiUrl = "https://www.worldcubeassociation.org/api/v0";

    return fetch(`${baseApiUrl}${path}`, fetchOptions)
      .then(response => response.json())
      .then(camelizeKeysDeep);
  }

  static searchPeople(query) {
    return this.fetch(`/search/users?persons_table=true&q=${query}`)
      .then(data => data.result);
  }

  static getPeopleByWcaIds(wcaIds) {
    const promises = _.map(_.chunk(wcaIds, 100), wcaIdsSubset =>
      this.fetch(`/persons?per_page=100&wca_ids=${wcaIdsSubset.join(',')}`)
    );
    return Promise.all(promises).then(_.flatten);
  }
}
