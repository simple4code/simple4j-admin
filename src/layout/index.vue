<template>
  <div class="app-wrapper">
    app-wrapper
    <div class="drawer-bg" />
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div>
        <app-main />
        <right-panel v-if="showSettings"> </right-panel>
      </div>
    </div>
  </div>
</template>

<script>
import RightPanel from '@/components/RightPanel'
import { AppMain, Sidebar } from './components'
import { mapState } from 'vuex'

export default {
  name: 'Layout',
  components: {
    RightPanel,
    AppMain,
    Sidebar
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      showSettings: state => state.settings.showSettings
    }),
    classObj() {
      return {

        mobile: 'mobile'

      }
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
