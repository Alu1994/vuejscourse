<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="item.status !== undefined">{{ item.id + " - " + item.status }}</p>
        <p v-else>Server Details Wasn't Loaded!!</p>
        <button @click="changeStatusBackToNormal()">Change Status to Normal</button>
    </div>

</template>

<script>
    import { eventBus } from './../../main.js';

    export default {
        data: function() 
        {
            return {
                item: Object
            };
        },
        methods: {
            changeStatusBackToNormal() {
                if(this.item.id === undefined)
                    return;

                this.item.status = "Normal";
                eventBus.changeStatusToNormal(this.item);
            }
        },
        created() {
            eventBus.$on('serverDetailsSelected', (item) => {
                this.item = item;
            });
        }
    }
</script>

<style>

</style>
