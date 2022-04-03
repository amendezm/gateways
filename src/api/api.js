const BASE_URL = "http://localhost:4200";

const fetchMethod = (path, method, body) => {
  return fetch(`${BASE_URL}${path}`, { method, ...(body ? { body } : {}) });
};

const get = (path) => fetchMethod(path, "GET");

const post = (path, body) => fetchMethod(path, "POST", body);

const put = (path, body) => fetchMethod(path, "GET", body);

const remove = (path) => fetchMethod(path, "DELETE");

export { get, post, put, remove };
