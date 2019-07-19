<script lang="ts">
import Vue from 'vue';
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';

const Torques = {
  components: {
    Header,
    Sidebar,
  },
  data() {
    return {
      nav: [
        {
          name: 'Dashboard',
          url: '/dashboard',
          icon: 'fa fa-dashboard',
          badge: {
            variant: 'success',
            text: 'NEW',
          },
        },
      ],
    };
  },
};

export default Torques;
</script>

<template>
  <div class="admin-container">
    <Sidebar :navItems="nav"/>
    <div id="right-panel" class="right-panel">
      <Header />
      <div class="content pb-0">
        <transition enter-active-class="animated fadeIn">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import url('../assets/css/font-awesome.min.css');
  @import url('../assets/css/themify-icons.css');
  @import url('../assets/css/pe-icon-7-filled.css');
  @import url('../assets/css/flag-icon.min.css');
  @import url('../assets/css/cs-skin-elastic.css');

  @import "../assets/scss/style";

  button {
    cursor: pointer;
  }
</style>
