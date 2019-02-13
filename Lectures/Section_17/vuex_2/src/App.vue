<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <!-- <app-result :counter="counter"></app-result> -->
                <app-result></app-result>
                <app-another-result></app-another-result>
                <hr>
                <!-- <app-counter @updated="counter += $event"></app-counter> -->
                <app-counter></app-counter>
                <app-another-counter></app-another-counter>
                <hr>

                <!-- Either this... -->
                <input type="text" :value="value" @input="updateValue($event)" />
                <br><br>
                <!-- Or this -->
                <input type="text" v-model="value" />
                
                <br><br>
                <p>Value: {{ value }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import AnotherCounter from './components/AnotherCounter.vue';
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue';

    export default {
        // data() {
        //     return {
        //         counter: 0
        //     }
        // },
        computed: {
            value: {
                get() {
                    return this.$store.getters.value;
                },
                set(value) {
                    this.$store.dispatch('updateValue', value);
                }
            }
        },
        methods: {
            // Either
            updateValue(event) {
                this.$store.dispatch('updateValue', event.target.value);
            }
            // OR ....
            // ...mapActions([
            //     'updateValue'
            // ])
        },
        components: {
            appCounter: Counter,
            appAnotherCounter: AnotherCounter,
            appResult: Result,
            appAnotherResult: AnotherResult
        }
    }
</script>

