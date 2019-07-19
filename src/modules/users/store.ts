import {Module} from 'vuex';
import {IRootState} from '@/store';
import ServiceFactory from '@/services/ServiceFactory';
import ActionTypes from '@/modules/users/actionTypes';
import IUser from '@/modules/users/IUser';

export interface IUsersState {
  list: IAPIResponse<IUser[]>;
}

const req = ServiceFactory.getRequestService();

const module: Module<IUsersState, IRootState> = {
  state: {
    list: {
      data: [],
      error: undefined,
      isFetching: false,
    },
  },
  actions: {
    fetchUsers: async ({ commit }) => {
      commit(ActionTypes.FETCH_USERS);
      try {
        const posts = await req.get('/users');
        commit(ActionTypes.INIT_USERS, posts);
      } catch (e) {
        commit(ActionTypes.FETCH_USERS_ERROR, e);
      }
    },
  },
  mutations: {
    [ActionTypes.FETCH_USERS]: (state) => {
      state.list.isFetching = true;
      state.list.error = undefined;
    },
    [ActionTypes.INIT_USERS]: (state, payload: IUsersState['list']['data']) => {
      state.list.data = payload;
      state.list.isFetching = false;
    },
    [ActionTypes.FETCH_USERS_ERROR]: (state, payload: Error) => {
      state.list.error = payload;
      state.list.isFetching = false;
    },
  },
};

export default module;
