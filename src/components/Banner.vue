
<template>
<div class="banner" :style=calHeight>
    <div class="header-row" id="header-row" :style=style>
   <div class="container d-flex h-100 ">
   <div class="d-sm-block d-md-block d-lg-none d-xl-none align-self-center">
        <div class="row  justify-content-center">     
                <div class="col-12">
                    <h1 class="common-banner-head">{{banner.data.heading}}</h1>
                    <h3>{{banner.data.body}}</h3>
                </div>
        </div>
   </div>
   <div class="d-none d-lg-block d-xl-block align-self-center">
      <div class="row  justify-content-end">     
            <div class="col-6">
                <h1 class="common-banner-head">{{banner.data.heading}}</h1>
                <h3>{{banner.data.body}}</h3>
            </div>
         </div>
      </div>
   </div>
</div>
</div>
</template>

<script>
export default {
    name: 'Banner',
    props:{
        banner:{
            type: Object,
            required: true
        }
    },
    computed: {
      style () {
        return 'backgroundImage: url( "' + this.banner.url + '")';
      },
      calHeight(){
          return 'height:'+ (window.innerHeight -68) +'px';
      }
    }
}
</script>

