<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server-items 
                v-for="server in servers" 
                    :item="server" :serverChangeFn="serverwaschanged">
            </app-server-items>
        </ul>
    </div>
</template>

<script>
    import { eventBus } from '../../main.js';
    import ServerItems from './ServerItems.vue';

    export default {
        data: function() {
            return {
                servers: [
                    { id: 1, status: "Normal" },
                    { id: 2, status: "Critical" },
                    { id: 3, status: "Unknown" },
                    { id: 4, status: "Normal" },
                    { id: 5, status: "Regular" }
                ]
            };
        },
        methods: {
            serverwaschanged(item) {
                eventBus.changeServerDetails(item);
            }
        },
        components: {
            "app-server-items": ServerItems
        },
        created() {
            // We don't need to use it because it is an object so it is a reference type, 
            // when we change the object on the ServerDetails.vue we already change the value on the main object!
            eventBus.$on('serverChangeStatusToNormal', (item) => {
                for(var server in this.servers) {
                    if(server.id === item.id) {
                        server.status = item.status;
                    }
                }
            });
        }
    }
</script>

<style>

</style>
