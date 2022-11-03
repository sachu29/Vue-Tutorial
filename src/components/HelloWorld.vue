<template>
    <div>
        <h1>I'm entering Messages here!</h1>
        <input-box></input-box>
    </div>
</template>

<script>
    import Input from './Input-box.vue'

export default {
    components: {
        'input-box': Input
    }
}
</script>