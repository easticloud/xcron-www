<template>
    <div class="p-page-index">
        <!-- 公共头部 -->
        <common-header></common-header>

        <!-- banner -->
        <banner bannerKey="products" />

        <div class="m-page-content"></div>
        <!-- 服务支持 -->
        <products-pmService></products-pmService>
        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
import banner from "@/components/page/banner.vue";
export default {
    name: "ProductsPage",
    components: { banner },
};
</script>
<style lang="less">
@import "~@/assets/css/page/index.less";
</style>
