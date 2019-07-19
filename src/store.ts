import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';
import torques from './modules/torques/store';
import users from './modules/users/store';

Vue.use(Vuex);

export interface IRootState {
  version: string;
}

const store: StoreOptions<IRootState> = {
  state: {
    version: '1.0.0',
  },
  modules: {
    torques,
    users,
  },
};

export default new Vuex.Store<IRootState>(store);
