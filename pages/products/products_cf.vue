<template>
    <div class="p-products">
        <!-- 1、banner -->
        <products-banner banner-key="cf"></products-banner>

        <!-- 2、了解云防火墙  -->
        <products-frame-text text-key="cf"></products-frame-text>

        <!-- 2、产品优势  -->
        <products-graphic-matrix matrix-key="cf" />

        <!-- 3、应用场景  -->
        <products-tabs tab-key="cf" custom-class="m-Bms-scene"></products-tabs>

        <!-- 4、功能特性  -->
        <products-graphic-matrix matrix-key="cf_x"></products-graphic-matrix>
    </div>
</template>

<script>
export default {
    name: "products-CF",
    layout: "products"
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";
</style>
