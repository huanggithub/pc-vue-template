<template>
  <div id="app" ref="app" class="theme-red">
    <HeaderWrap></HeaderWrap>
    <router-view/>
  </div>
</template>

<script>
import HeaderWrap from 'components/header.vue'
// import { mapGetters } from 'vuex'
export default {
  name: 'app',
  //导入getters取得state放入计算属性中
  computed: {
  },
  mounted(){
  },
  watch:{
  },
  methods:{
  },
  components:{
    HeaderWrap
  }
}
</script>

<style>

</style>
