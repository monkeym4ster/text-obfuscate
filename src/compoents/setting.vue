<template>
  <el-form ref="form" label-width="80px">
    <el-form-item label="Glyphs">
      <ul>
        <li style="margin-bottom:5px;" v-for="(item, index) in glyphs">
          <el-col :span="1">
            <el-input placeholder="key" v-model="item.key"></el-input>
          </el-col>
          <el-col :span="23">
            <el-input placeholder="value" v-model="item.value" @change="doneEdit(item)">
              <el-button slot="append" icon="delete" v-on:click="removeItem(index)"></el-button>
            </el-input>
          </el-col>
        </li>
      </ul>
    </el-form-item>
    <el-form-item>
      <el-button type="default" v-on:click="addItem">Add</el-button>
    </el-form-item>
  </el-form>
</template>


<script>
export default {
  data() {
    return {
    };
  },
  props: {
    glyphs: Array,
  },
  methods: {
    addItem() {
      this.glyphs.push({ key: '', value: [] });
    },
    removeItem(index) {
      console.log('removeItem', index);
      this.glyphs.splice(index, 1);
    },
    doneEdit(item) {
      console.log(item)
      item.value = item.value.split(',');
    },
  }
}
</script>
