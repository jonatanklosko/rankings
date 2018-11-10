const googleUrlShortenerApiUrl = 'https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyCgOHkmUMcWKJ0tRlwEs-rzBZ1WA7sTZTI';

export const shortenUrl = longUrl =>
  fetch(googleUrlShortenerApiUrl, {
    method: 'POST',
    body: JSON.stringify({ longUrl }),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json())
  .then(data => data.error ? Promise.reject(data.error) : data.id);

export const rankingFromSearchParams = search => {
  const params = new URLSearchParams(search);
  return {
    wcaIds: params.get('wcaids') ? params.get('wcaids').split(',') : [],
    name: params.get('name') || ''
  };
};

export const rankingToSearchParams = ({ name, wcaIds }) =>
  new URLSearchParams({ name, wcaids: wcaIds.join(',') }).toString();
