<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my Name</button>
        <p>Name is {{ name }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <!-- to pass it to the child we have to use (:) caracter to bind the parent property to the child -->
                <!-- the name here ( ex: name ) also has to matches with the prop name from inside the child component -->
                <app-user-detail 
                :name="name" 
                @nameWasReset="name = $event"
                :resetFn="resetName"
                :userAge="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                :userAge="age"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function(){
            return {
                name: 'Matthews',
                age: 24
            };
        },
        methods: {
            changeName() {
                this.name = 'Viviam';
            },
            resetName() {
                this.name = 'Matthews';
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
