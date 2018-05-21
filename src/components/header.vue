<template>
<div class="header-wrap">
  <ul>
    <!-- tag="li" 可以设定 router-link生成什么样的页面元素 -->
    <router-link class="item" tag="li" :to="{name:'home'}">
      <i class="iconfont icon-user"></i>{{$t("header.home")}}
    </router-link>
    <router-link class="item" tag="li" :to="{name:'page1'}">
      {{$t("header.document")}}
    </router-link>
    <router-link class="item" tag="li" :to="{name:'page2'}">
      {{$t("header.elementUi")}}
    </router-link>
    <router-link class="item" tag="li" :to="{name:'page3'}">
      {{$t("header.echarts")}}
    </router-link>

    <li>
      <el-dropdown trigger="click" @command="handleClick">
        <span class="el-dropdown-link">
          {{lang}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="cn">中文</el-dropdown-item>
          <el-dropdown-item command="en">English</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </li>


  </ul>
</div>
</template>

<script type="text/javascript">
export default {
  name: 'headerC',
  data() {
    return {
      lang: localStorage.lang === 'cn'? '中文' : 'English',
    }
  },
  methods: {
    handleClick(command) {
      if (command === 'cn') {
        this.lang = '中文';
      } else if (command === 'en') {
        this.lang = 'English';
      }
      this.$i18n.locale = command;
      localStorage.lang = command;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/lib-variable";
@import "~assets/css/lib-mixin";
.header-wrap {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #333;
    ul {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        li {
            color: $cl-txt;
            padding: 0 20px;
            cursor: pointer;
            &.active {
                color: #f00;
            }
            .el-dropdown {
              color: #fff;
            }
        }
    }

}

//换肤相关
.theme-red {
    .header-wrap {
        li {
            &.active {
                color: red;
            }
        }
    }
}

.theme-blue {
    .header-wrap {
        li {
            &.active {
                color: blue;
            }
        }
    }
}

.theme-yellow {
    .header-wrap {
        li {
            &.active {
                color: yellow;
            }
        }
    }
}
</style>
