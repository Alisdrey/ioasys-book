import api from "./api";

export const postLogin = (data) => {
  return Promise.resolve(api.post("/auth/sign-in", data));
}
export const refreshToken = (data) => {
  return Promise.resolve(api.post("/auth/refresh-token", data));
}
export const getBooks = (data) => {
  return Promise.resolve(api.get("/books", {params: data}));
}
export const getBooksId = (id) => {
  return Promise.resolve(api.get("books/" + id));
}