<template>
    <div>
        <div>
            <h3>Some User Details</h3>
            <p>User Loaded has ID: {{ userEdit.params.id }}</p>
            <!-- this will work as well -->
            <!-- :to="{name: 'userEdit', params: {id: 0}}" -->
            <router-link 
                tag="button" 
                :to="userEdit"
                class="btn btn-primary">Edit User</router-link>
        </div>
        <br>
    </div>
</template>

<script>
    export default {
        props: {
            userEdit: 
            {
                default: () => { 
                    return { 
                        name: 'userEdit', 
                        params: {id: 0},
                        query: {
                            locale: 'en',
                            q: 100
                        }
                    } 
                }
            }
        },
        created() {
            this.userEdit.params.id = this.$route.params.id;
        }
    }
</script>
