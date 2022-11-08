<template>
    <div class="p-page-index">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- banner -->
        <banner bannerKey="about" />

        <div class="m-page-content"></div>

        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
import banner from "@/components/page/banner.vue";
export default {
    name: "AboutPage",
    components: { banner },
};
</script>
<style lang="less">
@import "~@/assets/css/page/index.less";
</style>
