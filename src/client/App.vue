<template>
  <div class="example">
    <p>{{ msg }}</p>
    <p>API HOST : {{ apiHost }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello webpack!!!',
      apiHost: process.env.API_HOST
    };
  }
};
</script>

<style lang="scss" scoped>
.example {
  color: red;
  p {
    color: blue;
  }
}
</style>