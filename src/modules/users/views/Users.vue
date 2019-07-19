<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import {Action, State} from 'vuex-class';
import {IUsersState} from '@/modules/users/store';

@Component
export default class Users extends Vue {
  @State('users') users!: IUsersState;
  @Action('fetchUsers') fetchPosts!: () => undefined;

  get listUser() {
    return this.users.list.data;
  }

  mounted() {
    this.fetchPosts();
  }
}
</script>

<template>
  <div>
    <ul v-for="user of listUser">
      <li>{{JSON.stringify(user)}}</li>
    </ul>
  </div>
</template>
