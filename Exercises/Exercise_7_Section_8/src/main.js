import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    changeServerDetails(item) {
      this.$emit('serverDetailsSelected', item);
    },
    changeStatusToNormal(item) {
      this.$emit('serverChangeStatusToNormal', item);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
