import * as tsx from 'vue-tsx-support';
import {VNode} from 'vue';
import HelloWorld from '@/components/HelloWorld.tsx';
// @ts-ignore
import logo from '../assets/logo.png';

const Home = tsx.componentFactory.create({
  render(): VNode {
    return <div class='home'>
      <img alt='Vue logo' src={logo} />
      <HelloWorld msg='Welcome to Your Vue.js + TypeScript' />
    </div>;
  },
});

export default Home;
