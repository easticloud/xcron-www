<template>
    <div class="p-products">
        <!-- 1、banner -->
        <products-banner banner-key="ai"></products-banner>

        <!-- 2、产品展示  -->
        <products-show></products-show>

        <!-- 3、产品优势  -->
        <products-graphic-matrix matrix-key="ai"></products-graphic-matrix>

        <!-- 4、场景介绍  -->
        <products-tabs tab-key="ai"></products-tabs>
    </div>
</template>

<script>
export default {
    name: "Products-AI",
    layout: "products",
    head() {
        return {
            title: "智能AI边缘盒子",
        }
    }
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";
</style>
