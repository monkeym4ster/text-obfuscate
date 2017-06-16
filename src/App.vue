<template>
  <div id="app">
    <h1>Obfuscate text</h1>
    <el-tabs>
      <el-tab-pane label="Dashboard">
        <dashboard :glyphs="glyphs" :deep="deep" :input="input" v-on:updateValue="updateValue"></dashboard>
      </el-tab-pane>
      <el-tab-pane label="Setting">
        <setting :glyphs="glyphs"></setting>
      </el-tab-pane>
      <el-tab-pane label="Introduce">
        <introduce></introduce>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Dashboard from './compoents/dashboard.vue';
import Introduce from './compoents/introduce.vue';
import Setting from './compoents/setting.vue';
import { glyphs } from './common';

export default {
  data() {
    return {
      glyphs,
      deep: 80,
      input: 'Hello World.',
      output: '',
    }
  },
  components: {
    dashboard: Dashboard,
    introduce: Introduce,
    setting: Setting,
  },
  methods: {
    updateValue({ input, deep, output, glyphs }) {
      if (typeof input != 'undefined') this.input = input;
      if (typeof deep != 'undefined') this.deep = deep;
      if (typeof output != 'undefined') this.output = output;
      if (typeof glyphs != 'undefined') this.glyphs = glyphs;
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}

#app {
  width: 80%;
  margin: 0 auto;
}

#app>h1 {
  color: #20a0ff;
  text-align: center;
  margin: 50px 0;
}
</style>
