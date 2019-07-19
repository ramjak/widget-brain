import * as tsx from 'vue-tsx-support';
import p from 'vue-strict-prop';
import {VNode} from 'vue';
// @ts-ignore
import styles from './HelloWorld.module.scss';

const HelloWorld = tsx.componentFactory.create({
  props: {
    msg: p(String).required,
  },
  render(): VNode {
    return <div class={styles.hello}>
      <h1>{this.msg}</h1>
      <p>
        For a guide and recipes on how to configure / customize this project,<br/>
        check out the&nbsp;
        <a href='https://cli.vuejs.org' target='_blank' rel='noopener'>vue-cli documentation</a>
      </p>
      <h3>Installed CLI Plugins</h3>
      <ul>
        <li><a href='https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel' target='_blank'
               rel='noopener'>babel</a></li>
        <li><a href='https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript' target='_blank'
               rel='noopener'>typescript</a></li>
        <li><a href='https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa' target='_blank'
               rel='noopener'>pwa</a></li>
        <li><a href='https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest' target='_blank'
               rel='noopener'>unit-jest</a></li>
        <li><a href='https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress' target='_blank'
               rel='noopener'>e2e-cypress</a></li>
      </ul>
      <h3>Essential Links</h3>
      <ul>
        <li><a href='https://vuejs.org' target='_blank' rel='noopener'>Core Docs</a></li>
        <li><a href='https://forum.vuejs.org' target='_blank' rel='noopener'>Forum</a></li>
        <li><a href='https://chat.vuejs.org' target='_blank' rel='noopener'>Community Chat</a></li>
        <li><a href='https://twitter.com/vuejs' target='_blank' rel='noopener'>Twitter</a></li>
        <li><a href='https://news.vuejs.org' target='_blank' rel='noopener'>News</a></li>
      </ul>
      <h3>Ecosystem</h3>
      <ul>
        <li><a href='https://router.vuejs.org' target='_blank' rel='noopener'>vue-router</a></li>
        <li><a href='https://vuex.vuejs.org' target='_blank' rel='noopener'>vuex</a></li>
        <li><a href='https://github.com/vuejs/vue-devtools#vue-devtools' target='_blank' rel='noopener'>vue-devtools</a>
        </li>
        <li><a href='https://vue-loader.vuejs.org' target='_blank' rel='noopener'>vue-loader</a></li>
        <li><a href='https://github.com/vuejs/awesome-vue' target='_blank' rel='noopener'>awesome-vue</a></li>
      </ul>
    </div>;
  },
});

export default HelloWorld;