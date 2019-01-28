<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p><!-- 2 -->User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name Parent</button>
    </div>
</template>

<script>
    export default {
        //The be able to access the data from outside, the props label which in this case is "name"( ex: 1 ) has to matches the property in this file ( ex: 2 )
        props: {
            // You can set the type, required, default and much more!
            name: { // 1
                type: String,
                default: 'Mat'
            },
            resetFn: Function,
            userAge: Number
        }, 
        methods: {
            switchName() {
                return this.name.split("").reverse().join("");
            },
            resetName() {
                this.name = 'Matthews';
                this.$emit('nameWasReset', this.name);
            }
        },
        watch: {
            name: function(value) {
                alert('hello... it\'s me ' + this.name);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
