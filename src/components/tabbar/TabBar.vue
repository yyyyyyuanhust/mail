<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-bar{
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #f6f6f6;
  box-shadow: 0 -3px 1px rgba(100, 100, 100, .08);
}
</style>
