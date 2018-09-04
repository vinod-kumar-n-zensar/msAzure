<template>
  <div>
    <ms-header
    :data="data.navigation"
    :logo="data.general"
    :signed="signedIn"
    ></ms-header>

    <ms-banner
    :banner="data.banner"
    ></ms-banner>


    <ms-reimagine
    :info="data.reimagine">
    </ms-reimagine>

   <ms-leap
    :info="data.leap"
    :signed="signedIn">
    </ms-leap>

    <ms-meet
    :meetInfo="data.meet">
    </ms-meet>

    <ms-control
    :controlInfo="data.control">
    </ms-control>

    <ms-deliver
    :deliverInfo="data.deliver">
    </ms-deliver>

    <ms-cosmos
    :cosmosInfo="data.cosmos">
    </ms-cosmos>

    <ms-footer
    :info="data.footer"
    :modalInfo="data.signinmodal"
    ></ms-footer>
  </div>
</template>

<script>
    import MsHeader from './components/Header.vue';
    import CommonApi from './services/api/apiservice';
    import MsBanner from './components/Banner.vue';
    import MsReimagine from './pages/Reimagine.vue';
    import MsLeap from './pages/Leap.vue';
    import MsMeet from './pages/Meet.vue';
    import MsControl from './pages/Control.vue';
    import MsDeliver from './pages/Deliver.vue';
    import MsCosmos from './pages/AzureCosmosDb.vue';
    import MsFooter from './components/Footer.vue'
    export default {
  components: {
    MsHeader,
    MsBanner,
    MsReimagine,
    MsLeap,
    MsFooter,
    MsMeet,
    MsControl,
    MsDeliver,
    MsCosmos
  },
  props:{
    data:{
        type: Object,
        required: true
    }
  },
  data:{
    signedIn: false
  },
    created(){
         CommonApi.getCommonApi()
         .then(data =>{
           console.log("Hi the data is here",data);
             this.data = data
         })
    },
    beforeMount(){
      this.signedIn = this.getCookie('signedIn');
    },
    methods:{
      getCookie: function(name) {
        var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return v ? v[2] : null;
      }
    }
}
</script>