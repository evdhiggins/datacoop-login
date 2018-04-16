export default class {
  constructor(axios, url) {
    this._axios = axios;
    this._url = url;
  }

  _apiCall({ method, username, data = {} }) {
    return new Promise(res => {
      data.username = username;
      this._axios({
        url: `${this._url}/${username}`,
        method,
        data
      })
        .then(r => {
          res({ ...r.data, error: false });
        })
        .catch(e => {
          res({ error: true, errmsg: e });
        });
    });
  }

  login({ username, password }) {
    return this._apiCall({ method: "post", username, data: { password } });
  }
  requestToken({ username }) {
    return this._apiCall({ method: "patch", username });
  }
  updatePassword({ username, password, token }) {
    const data = { password, token };
    return this._apiCall({ method: "patch", username, data });
  }
  verifyUsername({ username }) {
    return this._apiCall({ method: "get", username });
  }
  verifyToken({ username, token }) {
    return this._apiCall({ method: "post", username, data: { token } });
  }
}
