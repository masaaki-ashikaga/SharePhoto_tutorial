import Vue from 'vue';
import router from './router';
import App from './App.vue';

require('./bootstrap');
window.Vue = require('vue');


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
new Vue({
    el: '#app',
    router,
    components: {
        App,
    },
    template: '<App />',
});
