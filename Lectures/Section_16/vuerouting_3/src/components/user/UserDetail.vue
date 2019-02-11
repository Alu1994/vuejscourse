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
        data() {
            return {
                userEdit: 
                {
                    name: 'userEdit', 
                    params: {
                        id: this.$route.params.id
                    },
                    query: {
                        locale: 'en',
                        q: 100
                    },
                    hash: '#data'
                }
            };
        },
        // Control Access on route
        beforeRouteEnter(to, from, next) {
            // if we comment "next()" the following code
            // will not work because the object was not initialize
            // "this.link;"

            // // if we need to access
            // next((vm) => {
            //     // here we have access because it's created
            //     vm.link;
            // });

            if (true) {
                alert('sim');
                next();
                return;
            }
            // will not be loaded
            alert('nao');
            next(false);
        }
    }
</script>
