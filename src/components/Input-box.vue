<template>
    <div>
        <input type="text" v-model="message">
        <p>My Message: {{ message }}</p>
    </div>
</template>

<script>

export default {
    data () {
        return {
            message: ''
        }
    }
}
</script>