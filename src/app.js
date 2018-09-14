import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js';
import './assets/styles/app.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLock, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VeeValidate from 'vee-validate'    
import  VueScrollTo from 'vue-scrollto';
import AOS from 'aos';
import "aos/dist/aos.css";

Vue.use(VueScrollTo)
Vue.use(VeeValidate);
library.add(faLock,faArrowRight, faArrowLeft)
Vue.component('font-awesome-icon', FontAwesomeIcon)
new Vue({
  created(){
    AOS.init({
      easing: 'ease-in-out-sine',
      duration: 1200,
    });
  },
  el: '#app',
  render (h){
    return h(App);
},
})

