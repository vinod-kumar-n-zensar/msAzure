<template>
  <div>
    <ms-header
    :data="data.navigation"
    :logo="data.general"
    /></ms-header>

    <ms-banner
    :banner="data.banner"
    ></ms-banner>


    <ms-reimagine
    :info="data.reimagine">
    </ms-reimagine>

   <ms-leap
    :info="data.leap">
    </ms-leap>

    <ms-footer
    :info="data.footer"
    :modalInfo="data.signinmodal"
    ></ms-footer>

    <input name="between_field" type="text" placeholder="Enter a number between 1 and 11" class="input" aria-required="false" aria-invalid="false">
  </div>
</template>

<script>
    import MsHeader from './components/Header.vue';
    import CommonApi from './services/api/apiservice';
    import MsBanner from './pages/Banner.vue';
    import MsReimagine from './pages/Reimagine.vue';
    import MsLeap from './pages/Leap.vue';
    import MsFooter from './components/Footer.vue'
    export default {
  components: {
    MsHeader,
    MsBanner,
    MsReimagine,
    MsLeap,
    MsFooter,
  },
  props:{
    data:{
        type: Object,
        required: true
    }
  },
    created(){
      debugger;
         CommonApi.getCommonApi()
         .then(data =>{
           console.log("Hi the data is here",data);
             this.data = data
         })
    }
}
</script>