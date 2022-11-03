<template>
  <div>
    <h1>{{ message }}</h1>
    <input-box :msg="message" @messageChanged="message = $event"></input-box>
  </div>
</template>

<script>
import Input from "./Input-box.vue";

export default {
  data() {
    return {
      message: "I'm entering Messages here!",
    };
  },
  components: {
    "input-box": Input,
  },
};
</script>
