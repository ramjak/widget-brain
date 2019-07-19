import * as tsx from 'vue-tsx-support';
import {VNode} from 'vue';
import Torques from '@/modules/torques/views/Torques.vue';

const Home = tsx.componentFactory.create({
  render(): VNode {
    return <Torques />;
  },
});

export default Home;
