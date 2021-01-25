import moment from "moment";
import types from "../types";
import api from "@oj/api";
import { CONTEST_STATUS, USER_TYPE, CONTEST_TYPE } from "@/utils/constants";

const state = {
  board: []
};

const getters = {};

const mutations = {
  [types.POST_COMMENT](state, payload) {
    state.board = payload;
  }
};

const actions = {
  async getBoard({ commit }, payload) {
    // console.log(payload)
    const response = await api.getBoardDetail(payload);
    const result = Object.entries(response).find(el => el[0] === 'data');
    // console.log(result[1]['data']);
    // console.log(result['data']);
    commit(types.POST_COMMENT, result[1]['data']);
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
