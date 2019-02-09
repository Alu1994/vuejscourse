<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                
                <br><h3>Transition and Animations with CSS</h3><br>
                <select v-model="alertAnimation" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <br>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br><br>
                
                <transition :name="alertAnimation" appear>
                    <div class="alert alert-info" v-show="show">1 This is some Info</div>
                </transition>
                
                <transition name="slide" type="animation" appear>
                    <div class="alert alert-info" v-show="show">2 This is some Info</div>
                </transition>
                
                <transition
                    appear
                    enter-active-class="animated rubberBand"
                    leave-active-class="animated fadeOutDown"
                >
                    <div class="alert alert-danger" v-show="show">3 This is some Danger</div>
                </transition>
                
                <!-- in this case to change between elements v-show won't work -->
                <transition :name="alertAnimation" appear mode="out-in">
                    <div class="alert alert-info" v-if="show" key="info">4 This is some Info</div>
                    <div class="alert alert-warning" v-else key="warning">4 This is some Warning</div>
                </transition>

                <hr><br><h3>Transition events and animation javascript</h3><br>
                <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
                <br><br>
                <!-- :css="false" to skip css verifications -->
                <transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @after-cancelled-enter="enterCancelled"

                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @after-cancelled-leave="leaveCancelled"
                    :css="false">
                    <div 
                        style="width: 300px; height:100px; background-color:lightgreen;" 
                        v-if="load"
                    ></div>
                </transition>
                
                <hr><br><h3>Transition With Dynamic Components</h3><br>
                <button class="btn btn-primary"
                    @click="selectComponent">
                    Toogle component
                </button>
                <br><br>
                <transition name="fade" mode="out-in">
                    <component :is="selectedComponent"></component>
                </transition>
                
                <hr><br><h3>Transition Groups</h3><br>
                <button class="btn btn-primary" @click="addItem">Add Item</button>
                <br><br>
                <ul class="list-group">
                    <transition-group name="slide">
                        <li
                            class="list-group-item"
                            v-for="(number, index) in numbers"
                            @click="removeItem(index)"
                            style="cursor:pointer;"
                            :key="number">
                            {{ number }}
                        </li>
                    </transition-group>
                </ul>
                <br>
                <br>
            </div>
        </div>
    </div>
</template>

<script>
    import DangerAlert from './DangerAlert.vue';
    import SuccessAlert from './SuccessAlert.vue';

    export default {
        data() {
            return {
                show: false,
                load: true,
                alertAnimation: "fade",
                elementWidth: 100,
                selectedComponent: 'app-success-alert',
                numbers: [1, 2, 3, 4, 5]
            }
        },
        methods: {
            selectComponent() {
                if (this.selectedComponent == 'app-success-alert') {
                    this.selectedComponent = 'app-danger-alert';
                    return;
                }
                this.selectedComponent = 'app-success-alert';
            },
            addItem() {
                const pos = Math.floor(Math.random() * this.numbers.length);
                this.numbers.splice(pos, 0, this.numbers.length + 1);
            },
            removeItem(index) {
                this.numbers.splice(index, 1);
            },

            beforeEnter(el) {
                console.log('beforeEnter');
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
            },
            enter(el, done) {
                console.log('enter');
                let round = 1;
                const interval = setInterval(() => { 
                    el.style.width = (this.elementWidth + round * 10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },
            afterEnter(el) {
                console.log('afterEnter');
            },
            enterCancelled(el) {
                console.log('enterCancelled');
            },

            beforeLeave(el) {
                console.log('beforeLeave');
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';
            },
            leave(el, done) {
                console.log('leave');
                let round = 1;
                const interval = setInterval(() => { 
                    el.style.width = (this.elementWidth - round * 10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },
            afterLeave(el) {
                console.log('afterLeave');
            },
            leaveCancelled(el) {
                console.log('leaveCancelled');
            }
        },
        components: {
            appDangerAlert: DangerAlert,
            appSuccessAlert: SuccessAlert
        }
    }
</script>

<style>
    .fade-enter {
        opacity: 0;
    }
    
    .fade-enter-active {
        transition: opacity 1s;
    }

    .fade-leave {
        /*opacity: 1;*/
    }

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter {
        opacity: 0;
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity 1s;
    }

    .slide-leave {
        
    }

    .slide-move {
        transition: transform 1s;
    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
        position: absolute;
    }

    @keyframes slide-in {
        from {
            transform: translateX(100px);
        }
        to {
            transform: translateX(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(100px);
        }
    }
</style>
