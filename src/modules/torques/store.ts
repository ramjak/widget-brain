import {Module} from 'vuex';
import {IRootState} from '@/store';
import ServiceFactory from '@/services/ServiceFactory';
import ActionTypes from '@/modules/torques/actionTypes';
import ITorques from '@/modules/torques/ITorques';

interface ITorquesStateData {
  open: ITorques[];
  close: ITorques[];
}

export interface ITorquesState extends IAPIResponse<ITorquesStateData> {}

const req = ServiceFactory.getRequestService();

const module: Module<ITorquesState, IRootState> = {
  state: {
    data: {
      open: [],
      close: [],
    },
    error: undefined,
    isFetching: false,
  },
  actions: {
    fetchTorques: async ({ commit }) => {
      commit(ActionTypes.FETCH_TORQUES);
      try {
        const posts = await req.get('/TorqueValues');
        commit(ActionTypes.INIT_TORQUES, posts);
      } catch (e) {
        commit(ActionTypes.FETCH_TORQUES_ERROR, e);
      }
    },
  },
  mutations: {
    [ActionTypes.FETCH_TORQUES]: (state) => {
      state.isFetching = true;
      state.error = undefined;
    },
    [ActionTypes.INIT_TORQUES]: (state, payload: ITorquesState['data']) => {
      state.data = payload;
      state.isFetching = false;
    },
    [ActionTypes.FETCH_TORQUES_ERROR]: (state, payload: Error) => {
      state.error = payload;
      state.isFetching = false;
    },
  },
};

export default module;
