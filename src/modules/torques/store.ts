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
        const posts: {
          position: number;
          averageTorque: number;
          lastTorque: number;
          assetId: string;
          profile: number;
          id: string;
        } = await req.get('/TorqueValues');
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
    [ActionTypes.INIT_TORQUES]: (state: ITorquesState, payload: Array<{
      direction: 'open' | 'close';
      position: number;
      averageTorque: number;
      lastTorque: number;
      assetId: string;
      profile: number;
      id: string;
    }>) => {
      payload.forEach((item) => {
        if (item.direction === 'close') {
          const foundItem = state.data.close
            .find((closeItem) => closeItem.position);
          if (foundItem) {
            foundItem.history.push({
              id: payload.id,
              averageTorque: payload.averageTorque,
              assetId: payload.assetId,
              profile: payload.profile,
              lastTorque: payload.lastTorque,
            });
          } else {
            state.data.close.push({
              position: item.position,
              history: [
                {
                  id: payload.id,
                  averageTorque: payload.averageTorque,
                  assetId: payload.assetId,
                  profile: payload.profile,
                  lastTorque: payload.lastTorque,
                },
              ],
            });
          }
        } else {
          const foundItem = state.data.open
            .find((openItem) => openItem.position);
          if (foundItem) {
            foundItem.history.push({
              id: payload.id,
              averageTorque: payload.averageTorque,
              assetId: payload.assetId,
              profile: payload.profile,
              lastTorque: payload.lastTorque,
            });
          } else {
            state.data.open.push({
              position: item.position,
              history: [
                {
                  id: payload.id,
                  averageTorque: payload.averageTorque,
                  assetId: payload.assetId,
                  profile: payload.profile,
                  lastTorque: payload.lastTorque,
                },
              ],
            });
          }
        }
      });
      state.isFetching = false;
    },
    [ActionTypes.FETCH_TORQUES_ERROR]: (state, payload: Error) => {
      state.error = payload;
      state.isFetching = false;
    },
  },
};

export default module;
