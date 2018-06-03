<template>
  <div class="example">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello webpack!!!"
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