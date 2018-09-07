<template>
<div class="modal" id="SignInModal" tabindex="-1" role="dialog" refs="SignInModal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title text-center">{{modalData.headerInfo}}</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form @submit.prevent="onSubmit">
      <div class="modal-body">
          <div class="form-group">
             <div class="field" :class="{error: errors.has('firstName')}">
                <input class="form-control" v-validate="'required|alpha'" name="firstName" type="text" placeholder="First Name" v-model="firstName">
              </div>
          </div>
          <div class="form-group">
             <div class="field" :class="{error: errors.has('lastName')}">
                <input class="form-control" v-validate="'required|alpha'" name="lastName" type="text" placeholder="Last Name" v-model="lastName">
              </div>
          </div>
          <div class="form-group">
             <div class="field" :class="{error: errors.has('email')}">
                <input class="form-control" type="email" name="email" placeholder="Work Email" v-validate="'required|email'" v-model="email">
              </div>
          </div>
           <div class="form-group">
             <div class="field" :class="{error: errors.has('phone')}">
                <input class="form-control" v-validate="'required|max:40'" name="phone" type="number" placeholder="Work Phone" v-model="phone">
              </div>
          </div>
          <div class="form-group">
             <div class="field" :class="{error: errors.has('country')}">
               <select class="custom-select" v-validate="'required'" name="country" v-model="country">
                  <option selected="selected" value="">Choose Country</option>
                  <option v-for="countryItem in modalData.coutryList" v-bind:value="countryItem.name">{{countryItem.name}}</option>
               </select>
              </div>
          </div>
           <div class="form-group">
             <div class="field" :class="{error: errors.has('company')}">
                <input class="form-control" v-validate="'required|alpha'" name="company" type="text" placeholder="Company" v-model="company">
              </div>
          </div>
          <div class="">
          <p>{{modalData.footerInfo}} <a v-bind:href="modalData.link.url" target="_blank"><span>{{modalData.link.text}}</span></a></p>
        </div> 
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" :disabled="errors.any()" ref="btnSubmit" class="btn btn-primary">Get Started</button>
      </div>
      </form>
    </div>
  </div>
</div>
</template>
<script>
  import Vue from 'vue';
  import jq from 'jquery';
    export default{
        props:{
            modalData: Object,
            signed: String,
        },
        data() {
          return {
            email: '',
            firstName:'',
            lastName:'',
            phone:'',
            company:'',
            country:''
          }
        },
        methods:{
          onSubmit() {
            this.$validator.validateAll().then(
              result =>{
                 if (!this.errors.any()) {
                    document.cookie = "signedIn = true";
                    jq('#SignInModal').modal('hide');
                    this.$emit('update:signed','true')
                  } else{
                    document.cookie = "signedIn = false";
                    this.$emit('update:signed','false')
                  }
              }
            )
          }
        }
    }
</script>