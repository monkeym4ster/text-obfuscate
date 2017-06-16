<template>
  <el-form ref="form" label-width="90px">
    <!-- Input -->
    <el-form-item label="Input">
      <el-input type="textarea" :rows="5" placeholder="Input" v-model="input"></el-input>
    </el-form-item>

    <!-- Deep -->
    <el-form-item label="Deep">
      <el-slider :min="1" :max="100" v-model="deep"></el-slider>
    </el-form-item>
  
    <!-- Output -->
    <el-form-item label="Output">
      <el-input type="textarea" :rows="5" placeholder="Output" readonly="readonly" v-model="output"></el-input>
    </el-form-item>
  
    <!-- Do it -->
    <el-form-item>
      <el-button type="primary" @click.native="startHacking">Let's do it</el-button>
    </el-form-item>
  
  </el-form>
</template>

<script>
import { obfuscate } from '../common';

export default {
  data() {
    return {
      debug: true,
      output: '',
    };
  },
  props: {
    input: String,
    deep: Number,
    glyphs: Array,
  },
  methods: {
    startHacking() {
      const { input, glyphs, deep } = this;
      const deepFloat = (deep * 0.01).toFixed(2);
      const output = obfuscate(input, deepFloat, glyphs);
      this.output = output;
      this.$emit('updateValue', { input, glyphs, deep, output });
    },
  },
}
</script>
