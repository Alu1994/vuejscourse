<template>
    <div>
        <div>
            <h3>Edit the User: {{ id }}</h3>
            <p>Locale: {{ $route.query.locale }}</p>
            <p>Analytics: {{ $route.query.q }}</p>   
        </div>
        <br>
    </div>
</template>

<script>
    export default {
        props: {
            id: String
        }
    }
</script>
