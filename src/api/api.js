const BASE_URL = "http://localhost:4200";

const fetchMethod = (path, method, body) => {
  console.log("BODY", JSON.stringify(body));
  return fetch(`${BASE_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

const get = (path) => fetchMethod(path, "GET");

const post = (path, body) => fetchMethod(path, "POST", body);

const put = (path, body) => fetchMethod(path, "GET", body);

const patch = (path, body) => fetchMethod(path, "PATCH", body);

const remove = (path) => fetchMethod(path, "DELETE");

export { get, post, put, patch, remove };
