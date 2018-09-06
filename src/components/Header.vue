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
      <li class="nav-item" v-for="(item,index) in data" :class="{ 'active': index === 0 }" @click="changeActive($event)">
        <a class="nav-link"  v-bind:href="'#'+item.link" v-if="signed == 'true'" >
          {{item.title}}
        </a>
        <a class="nav-link"  @click="changeActive" v-bind:href="'#'+item.link" v-else>
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
export default {
    props:{
        data: Object,
        logo: Object,
        signed: String
    },
    methods:{
      changeActive: (that)=>{
        jq(".nav-item").removeClass("active");
        var ele = that.currentTarget                                            
        jq(ele).addClass('active')
      }
      
    }
}

</script>