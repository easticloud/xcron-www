<template>
    <div class="p-products">
        <!-- 1、banner -->
        <products-banner banner-key="wsa"></products-banner>

        <!-- 2、产品优势  -->
        <products-graphic-matrix matrix-key="wsa"></products-graphic-matrix>

        <!-- 3、应用场景  -->
        <products-tabs tab-key="wsa"></products-tabs>
    </div>
</template>

<script>
export default {
    name: "products-WSA",
    layout: "products",
    head() {
        return {
            title: "全站加速",
        };
    },
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";

.m-p-SceneuseS .m-Scontent {
    height: 830px;
}
</style>
