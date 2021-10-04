<template>
  <div class="input">
    <input :value="text" @input="updateText" class="inputSettings" placeholder="0"/>
  </div>
</template>

<script>

import {mapState} from 'vuex';

export default {
  name: "InputField",
  props: ['result'],
  computed: {
    ...mapState({
      text: state => state.result
    })
  },
  methods: {
    updateText(e) {
      this.$store.commit('updateText', e.target.value)
    }
  }
}
</script>

<style scoped>

.input {
  margin: 0;
  width: 345px;
}

.inputSettings {
  display: flex;
  height: 100%;
  width: 99%;
  outline: white;
  background: darkgray;
  border-radius: 2px;
  border-color: black;
  text-align: -webkit-right;
  font-size: 50px;
  color: white;
  placeholder-color: white;
  font-family: Gemunu Libre;
}

input::-webkit-input-placeholder {
  color: white;
}

</style>