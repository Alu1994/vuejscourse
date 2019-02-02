<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="changeComponent('Blue')">Load Blue Template</button>
                <button class="btn btn-success" @click="changeComponent('Green')">Load Green Template</button>
                <button class="btn btn-danger" @click="changeComponent('Red')">Load Red Template</button>
                <hr>
                <keep-alive>
                    <component :is="selectedComponent">
                        <p>This is the default slot!!</p>
                        <p :slot="slotName">{{ someText }}</p>
                    </component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function() {
            return {
                someText: "Blue",
                slotName: "Blue",
                selectedComponent: "appBlue"
            };
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        methods: {
            changeComponent(componentColor) {
                this.selectedComponent = 'app' + componentColor;
                this.someText = componentColor;
                this.slotName = componentColor;
            }
        }
    }
</script>

<style>
</style>
