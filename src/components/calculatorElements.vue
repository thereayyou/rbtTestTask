<template>
  <div class="buttons">
    <button v-bind:style="x.style" class="btnElements" v-on:click="$emit('calculatedFunc', x.value)">{{ x.value }}</button>
  </div>
</template>

<script>
export default {
  name: "calculatorElements",
  props: ['x'],
}
</script>

<style scoped>

.btnElements {
  background-color: lightgray;
  border: 1px solid black;
  font-size: 35px;
  font-weight: normal;
  width: 87.5px;
  height: 87.3px;
  border-radius: 2px;
}

.btnElements:hover {
  background: lightcyan;
  cursor: pointer;
}

</style>