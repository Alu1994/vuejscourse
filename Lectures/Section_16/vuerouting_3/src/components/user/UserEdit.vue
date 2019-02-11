<template>
    <div>
        <div>
            <h3>Edit the User: {{ id }}</h3>
            <p>Locale: {{ $route.query.locale }}</p>
            <p>Analytics: {{ $route.query.q }}</p>   
        </div>
        <hr>
        <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
        <div style="height: 700px;"></div>
        <p id="data">Some extra Data</p>
        <br>
    </div>
</template>

<script>
    export default {
        props: {
            id: String
        },
        data() {
            return {
                confirmed: false
            };
        },
        beforeRouteLeave(to, from, next) {
            if (this.confirmed) {
                next();
                return;
            }
            
            if (confirm('Are you sure?')) {
                next();
                return;
            }
            next(false);
        }
    }
</script>
