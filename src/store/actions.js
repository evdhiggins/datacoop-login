import * as types from "./mutation-types";

export const updateUsername = ({ commit }, username) => {
  commit(types.SET_USERNAME, { username });
};

export const updateToken = ({ commit }, token) => {
  commit(types.SET_TOKEN, { token });
};
