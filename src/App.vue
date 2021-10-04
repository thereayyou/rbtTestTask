<template>
  <div class="app">
    <div class="calcField">
      <div class="calcWrap">
        <InputField v-bind:result="resultFunc" v-bind:finalResult="finalResultFunc"/>
        <div class="calcElements">
          <calculatorElements v-bind:x="x"
                              v-for="x in calcElementsFunc"
                              :key="x"
                              v-on:calculatedFunc="calculatedFunc"/>
        </div>
      </div>
    </div>
    <div class="main-history">История операций:
    <div
        class="history"
        v-for="hs in getHistory()"
        :key="hs"
    >
      {{hs.date}}
      {{hs.value}}
    </div>
  </div>
  </div>
</template>

<script>

import InputField from './components/InputField.vue';
import calculatorElements from './components/calculatorElements.vue';
import {mapGetters, mapMutations} from 'vuex';
import {getFromLocalStorageByKey} from './store/store';

export default {
  name: 'App',
  components: {
    InputField,
    calculatorElements,
  },
  computed: mapGetters([
    "calcElementsFunc",
    "resultFunc",
    "finalResultFunc"]),
  methods: {
    ...mapMutations(['calculatedFunc']),
    getHistory: () => getFromLocalStorageByKey("operations"),
  },
}

</script>

<style>

.app {
  display: flex;
  padding: 200px;
}

.calcField {
  display: flex;
  border: 2px solid;
  height: 500px;
  background-color: lightgray;
}

.calcWrap {
  border-color: white;
}

.calcElements {
  display: flex;
  width: 350px;
  height: 350px;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
}

.history {
  padding-left: 200px;
}

.main-history {
  padding-left: 200px;
}

</style>
