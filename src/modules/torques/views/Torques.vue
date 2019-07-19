<script lang="ts">
import Vue from 'vue';
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';
import {mapState} from 'vuex';

const Torques = {
  components: {
    Header,
    Sidebar,
  },
  computed: mapState({
    torques: (state) => state.torques.data,
  }),
  mounted() {
    this.$store.dispatch('fetchTorques');
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
        <div class="col-lg-12">
          <div class="card">
            <div class="card-top">
              <h4 class="card-title m-0 float-left">Closed</h4><!-- /.content-title -->
              <div class="float-right text-r">
                <button class="content-settings" data-toggle="tooltip" data-placement="top" title="Settings"><i class="fa fa-cog"></i></button>
                <button class="content-collapse" data-toggle="tooltip" data-placement="top" title="Collapse"><i class="fa fa-angle-down"></i></button>
                <button class="content-close" data-toggle="tooltip" data-placement="top" title="Close"><i class="fa fa-close"></i></button>
              </div>

            </div><!-- /.card-top -->
            <div class="card-body p-0">
              chart
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="card">
            <div class="card-top">
              <h4 class="card-title m-0 float-left">Open</h4><!-- /.content-title -->
              <div class="float-right text-r">
                <button class="content-settings" data-toggle="tooltip" data-placement="top" title="Settings"><i class="fa fa-cog"></i></button>
                <button class="content-collapse" data-toggle="tooltip" data-placement="top" title="Collapse"><i class="fa fa-angle-down"></i></button>
                <button class="content-close" data-toggle="tooltip" data-placement="top" title="Close"><i class="fa fa-close"></i></button>
              </div>

            </div><!-- /.card-top -->
            <div class="card-body p-0">
              chart
            </div>
          </div>
        </div>
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
