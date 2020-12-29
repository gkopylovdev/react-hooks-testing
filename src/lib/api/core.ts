export const API_ORIGIN: string = 'https://jsonplaceholder.typicode.com';

export function request(method: string, url: string, data?: object): Promise<any> {
  return fetch(`${API_ORIGIN}${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .catch(err => {
      throw err.message;
    });
}
