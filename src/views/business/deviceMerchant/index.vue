<template>
  <div class="app-container">
  </div>
</template>

<script setup>

const name  = "王凯玉"
const name1  =  ref([])

const data = reactive({
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    appId: undefined, 
    merchantName: undefined
  },
  info: {
    name: false,
    title: "代码预览",
    activeName: "domain.java"
  }
});

const { queryParams,preview } = toRefs(data);

    console.log(data.queryParams,'data.queryParams');
    console.log(queryParams.value,'queryParams');
    console.log(name,'name');
    console.log(name1,'name1');


</script>

<style lang="scss" scoped>

</style>
