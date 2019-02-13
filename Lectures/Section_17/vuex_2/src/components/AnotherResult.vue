<template>
    <div>
        <!-- <p>Counter is: {{ counter }}</p>
        <p>Number of Clicks: {{ clicks }}</p> -->

        <!-- <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of Clicks: {{ stringCounter }}</p> -->
        
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of Clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import * as types from '../store/types.js';

    export default {
        //props: ['counter']
        
        // computed: {
        //     counter() {
        //         //return this.$store.state.counter * 2;
        //         return this.$store.getters.doubleCounter;
        //     },
        //     clicks() {
        //         //return this.$store.state.counter * 2;
        //         return this.$store.getters.stringCounter;
        //     }
        // }

        // computed: mapGetters([
        //     'doubleCounter',
        //     'stringCounter'
        // ])

        computed: {
            // Please pull all the methods and objects inside "mapGetters"
            // and create separate key value pairs here
            ...mapGetters({
                doubleCounter: types.DOUBLE_COUNTER,
                stringCounter: types.CLICK_COUNTER
            })
        }
    }
</script>