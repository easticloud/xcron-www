<template>
    <div class="p-products">
        <!-- 1、banner -->
        <products-banner banner-key="tcs"></products-banner>

        <!-- 2、产品优势  -->
        <products-graphic-matrix matrix-key="tcs"></products-graphic-matrix>

        <!-- 3、产品与服务  -->
        <products-vertical-matrix matrix-key="tcs" custom-class="noimgCon"></products-vertical-matrix>

        <!-- 4、产品功能  -->
        <products-graphic-matrix matrix-key="tcs_x" />

        <!-- 5、应用场景  -->
        <products-tabs tab-key="tcs"></products-tabs>
    </div>
</template>

<script>
export default {
    name: "products-TCS",
    layout: "products"
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";
</style>
