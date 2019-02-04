<template>
    <div class="container">
        <!-- Exercise 1 -->
        <!-- Create a Signup Form where you retrieve the following Information -->
        <!-- Full Name (First Name + Last Name) -->
        <!-- Mail -->
        <!-- Password -->
        <!-- Store Data? Yes/No -->
        <form>
            <div v-show="!isSubmitted" class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    
                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                    <div>
                        <app-fullName v-model="userData"></app-fullName>
                    </div>

                    <div class="form-group">
                        <label for="email">Email</label>
                        <input 
                            type="text"
                            id="email"
                            class="form-control"
                            v-model="userData.email" />
                    </div>
                    
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            class="form-control"
                            v-model="userData.password" />
                    </div>
                    <div class="form-group">
                        <label for="Store Data">Store Data?</label>
                        <input
                            type="radio"
                            id="yes"
                            value="true"
                            v-model="storeData" />
                        <label for="yes">Yes</label>
                        <input
                            type="radio"
                            id="no"
                            value="false"
                            v-model="storeData" />
                        <label for="no">No</label>
                    </div>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    <div class="form-group">
                        <button class="btn btn-primary" @click.prevent="isSubmitted = !isSubmitted">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </form>
        <hr>
        <div v-show="isSubmitted" class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>
                            <span>Store in Database?:</span>
                            <span v-if="storeData == true">Yes</span>
                            <span v-else>No</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './FullName.vue'

    export default {
        data() {
            return {
                userData: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                },
                storeData: true,
                isSubmitted: false
            };
        },
        computed: {
            fullName() {
                return this.userData.firstName + ' ' + this.userData.lastName;
            }
        },
        components: {
            'app-fullName': FullName
        }
    }
</script>

<style>
</style>
