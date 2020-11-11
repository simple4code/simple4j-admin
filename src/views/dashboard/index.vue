<template>
  <div class="dashboard-container">
    aaaaaaaaa
    <!-- <component :is="currentRole" /> -->
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  components: {},

  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
</style>
