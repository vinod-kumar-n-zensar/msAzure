<template>
    <footer>
        <div class="container-fluid common-footer-color">
            <div class="container">
                <div class="text-center">
                    <h1>{{info.NoSign.head}}</h1>
                    <p>{{info.NoSign.info}}</p>
                    <button type="button" data-toggle="modal" data-target="#SignInModal"  class="btn btnNosign btn-lg"><font-awesome-icon size="xs" icon="lock" /> {{info.NoSign.ButtonText}}</button>
                </div>
            </div> 
        </div>
    <ms-sign-in-modal
    :modalData="modalInfo"></ms-sign-in-modal>
    </footer>
</template>

<script>
    import MsSignInModal from './SignInModal.vue';
    let data = '';
    export default{
        components:{
            MsSignInModal
        },
        props:{
            info: Object,
            modalInfo: Object
        },
    }
</script>