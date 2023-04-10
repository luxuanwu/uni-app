<template>
	<view >
    <!-- //使用了display隐藏了login按钮 -->
		<my-login ></my-login>
    <my-userinfo ></my-userinfo>
	</view>
</template>

<script>
  // 导入自己封装的 mixin 模块
  import badgeMix from '@/mixins/tabbar-badge.js'
  // 1. 从 vuex 中按需导入 mapState 辅助函数
  import { mapState } from 'vuex'
	export default {
    // 将 badgeMix 混入到当前的页面中进行使用
    mixins: [badgeMix],
    computed: {
        // 2. 从 m_user 模块中导入需要的 token 字符串
        ...mapState('m_user', ['token']),
      },
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
page,
.my-container {
  height: 100%;
}
</style>
