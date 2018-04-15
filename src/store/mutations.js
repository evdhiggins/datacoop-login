import * as types from "./mutation-types";

export default {
  [types.SET_LOADING](state, { loading }) {
    state.loading = loading;
  },
  [types.SET_TOKEN](state, { token }) {
    state.token = token;
  },
  [types.SET_USERNAME](state, { username }) {
    state.username = username;
  }
};
