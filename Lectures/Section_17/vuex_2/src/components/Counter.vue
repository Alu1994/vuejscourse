<template>
    <div>
        <div>
            <button class="btn btn-primary" @click="increment(100)">Increment</button>
            <button class="btn btn-primary" @click="decrement(100)">Decrement</button>
        </div>
        <br>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        methods: {
            ...mapMutations([
                'increment',
                'decrement'
            ]),
            increment(by) {
                this.$store.dispatch('increment', by);
            }
        }
    }
</script>