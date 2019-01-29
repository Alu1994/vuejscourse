<template>
    <li class="list-group-item" @click="serverChangeFn(item)">
        Server #{{ item.id + " - " + item.status }}
    </li>
</template>

<script>
    export default {
        props: 
        {
            item: Object,
            serverChangeFn: Function,
        }
    }
</script>