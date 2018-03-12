const apiUrl = 'https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyCgOHkmUMcWKJ0tRlwEs-rzBZ1WA7sTZTI';

export default class GoogleUrlShortenerApi {
  static shorten(longUrl) {
    return fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify({ longUrl }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => data.error ? Promise.reject(data.error) : data.id);
  }
}
