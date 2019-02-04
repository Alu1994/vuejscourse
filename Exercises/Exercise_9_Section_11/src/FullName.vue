<template>
    <div>
        <div class="form-group">
            <label for="firstName">First Name</label>
            <input 
                type="text"
                id="firstName"
                class="form-control"
                v-model="value.firstName" />
        </div>

        <div class="form-group">
            <label for="lastName">Last Name</label>
            <input 
                type="text"
                id="lastName"
                class="form-control"
                v-model="value.lastName" />
        </div>
    </div>
</template>

<script>
    export default {
        props: ['value']
    }
</script>
