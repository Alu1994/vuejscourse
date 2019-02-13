<template>
    <div>
        <!-- if we need to pass arguments to our "Actions" we can pass a single parameter OR -->
        <!-- we can pass an "Object" with as many as we need -->
        <button class="btn btn-primary" @click="asyncIncrement({ by: 200, duration: 500 })">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({ by: 200, duration: 5000 })">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    //import { mapMutations } from 'vuex';

    export default {
        methods: {
            // -- async
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement'
            ])
            
            // -- sync
            // ...mapMutations([
            //     'increment',
            //     'decrement'
            // ])

            //, increment() {
            //     this.$store.commit('increment');
            //     //this.$store.state.counter++;
            //     //this.$emit('updated', 1);
            // },
            // decrement() {
            //     this.$store.commit('decrement');
            //     //this.$store.state.counter--;
            //     // this.$emit('updated', -1);
            // }
        }
    }
</script>