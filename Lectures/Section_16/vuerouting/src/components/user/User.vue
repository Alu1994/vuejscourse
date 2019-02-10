<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <p>Loaded ID: {{ id }}</p>
        <button class="btn btn-primary" @click="navigateToHome">Go to Home</button>
    </div>
</template>

<script>
    export default {
        // -- If you enable the route to pass the params --
        // -- to the props object, you can retrive automatically --
        props: {
            id: {
                type: String
            }
        },

        // -- Retriving using this.$route.params".id" --
        // -- To make the params dynamically change the page --
        // -- We have to "watch" the route or create a computed property --
        // ex:
        //      data() {
        //          return {
        //              id: this.$route.params.id
        //          }
        //      },
        //      watch: {
        //          '$route'(to, from) {
        //              this.id = to.params.id;
        //          }
        //      },

        methods: {
            navigateToHome() {
                this.$router.push('/');
            }
        }
    }
</script>
