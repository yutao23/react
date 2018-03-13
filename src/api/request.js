

export default function request (method, url, body) {
	
	let ip = "http://api.pinpianyi.com.cn";
	let url_a = ip+url;
  method = method.toUpperCase();
  if (method === 'GET') {
    // fetch的GET不允许有body，参数只能放在url中
    body = undefined;
  } else {
    body = body && JSON.stringify(body);
  }

  return fetch(url_a, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body
  })
    .then((res) => {
      if (res.status === 401) {
        hashHistory.push('/login');
        return Promise.reject('Unauthorized.');
      } else {
        const token = res.headers.get('access-token');
        if (token) {
          sessionStorage.setItem('access_token', token);
        }
        return res.json();
      }
    });
}

export const get = url => request('GET', url);
export const post = (url, body) => request('POST', url, body);
export const put = (url, body) => request('PUT', url, body);
export const del = (url, body) => request('DELETE', url, body);