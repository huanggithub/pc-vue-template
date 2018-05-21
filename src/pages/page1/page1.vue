<template>
<div class="sass-wrap">
  {{$t("header.document")}}
  <div class="" @click="myClick">
    点击一下
  </div>
</div>
</template>

<script type="text/javascript">
import {getArticlesList} from 'api/state'
export default {
  name: 'page1',
  data() {
    return {

    };
  },
  methods: {
    myClick() {
      getArticlesList().then((data) => {
        console.log(data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
