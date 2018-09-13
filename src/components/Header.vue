<template>
<header>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-white">
      <div class="container">
  <a class="navbar-brand" href="#"><img  v-bind:src="logo.logo" alt="MS Azure Cosmos DB"/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item" v-for="(item,index) in data" @click="changeActive($event)">
        <a class="nav-link"  v-bind:href="'#'+item.link" v-if="signed == 'true'" v-scroll-to="{el: '#'+item.link, offset: -66,duration: 500}">
          {{item.title}}
        </a>
        <a class="nav-link"  @click="changeActive" v-bind:href="'#'+item.link" v-scroll-to="{el: '#'+item.link, offset: -66,duration: 500}" v-else>
          <span v-if="item.title != 'Reimagine' && item.title != 'Leap'" class="grey" data-toggle="modal" data-target="#SignInModal">
           <font-awesome-icon size="xs" icon="lock" /> {{item.title}}<span class="sr-only">(current)</span>
          </span>
           <span v-else>
             {{item.title}}<span class="sr-only">(current)</span>
          </span>
        </a>
      </li>
    </ul>
  </div>
</div>
</nav>

</header>
</template>

<script>
import jq from 'jquery';
import AOS from 'aos';
export default {
    props:{
        data: Object,
        logo: Object,
        signed: String
    },
    methods:{
      changeActive: (that)=>{
        jq(".navbar .nav-item").removeClass("active");
        let ele = that.currentTarget
        jq(ele).find('.navbar .nav-link,.navbar .nav-item').removeClass('active')                                            
        jq(ele).addClass('active')
      },
      handleScroll: ()=>{
        let scrollDistance = jq(window).scrollTop() + 100;
		    // Assign active class to nav links while scolling
		    jq('.page-section').each(function(i) {
				if (jq(this).position().top <= scrollDistance) {
						jq('.navbar .nav-item a.active,.navbar .nav-item').removeClass('active');
						jq('.navbar .nav-item a').eq(i).addClass('active');
        }
        })
         AOS.refresh();
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    }
}

</script>