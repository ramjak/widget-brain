import * as tsx from 'vue-tsx-support';
import {VNode} from 'vue';
import HelloWorld from '@/components/HelloWorld.tsx';
// @ts-ignore
import logo from '../assets/logo.png';
import {InputHTMLAttributes, SyntheticEvent} from 'vue-tsx-support/types/dom';
import Users from '@/modules/users/views/Users.vue';

const Home = tsx.componentFactory.create({
  data() {
    return {
      a: 0,
    };
  },
  methods: {
    increaseCounter() {
      this.a = this.a + 1;
    },
    changeCounter(e: SyntheticEvent<InputHTMLAttributes, Event>) {
      const value = e.target.value;
      const newA = typeof value === 'string' ? value : '0';
      this.a = parseInt(newA, 10);
    },
  },
  render(): VNode {
    return <div class='home'>
      <img alt='Vue logo' src={logo} /> <br />
      <input type='number' value={this.a} onChange={this.changeCounter} />
      <br />
      <button onClick={this.increaseCounter}>Click Me!</button>
      <Users />
      <HelloWorld msg='Welcome to Your Vue.js + TypeScript' />
    </div>;
  },
});

export default Home;
