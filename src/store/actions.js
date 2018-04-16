import * as types from "./mutation-types";
import api from "@/api";

export const setLoading = ({ commit }, loading) => {
  commit(types.SET_LOADING, { loading });
};

export const updateUsername = ({ commit }, username) => {
  commit(types.SET_USERNAME, { username });
};

export const updateToken = ({ commit }, token) => {
  commit(types.SET_TOKEN, { token });
};

export const apiCall = ({ dispatch, getters }, { callName, data = {} }) => {
  dispatch("setLoading", true);
  return new Promise(res => {
    api[callName]({ username: getters.username, ...data }).then(data => {
      dispatch("setLoading", false);
      if (!data.success) {
        // do stuff
      } else {
        res(data.response);
      }
    });
  });
};
