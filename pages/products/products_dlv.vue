<template>
    <div class="p-products">
        <!-- 1、banner -->
        <products-banner banner-key="dlv"></products-banner>

        <!-- 2、产品优势  -->
        <products-graphic-matrix matrix-key="dlv"></products-graphic-matrix>

        <!-- 3、应用场景  -->
        <products-tabs tab-key="dlv" custom-class="m-Bms-products_dlv" />

        <!-- 4、功能描述  -->
        <products-graphic-matrix matrix-key="dlv_x"></products-graphic-matrix>
    </div>
</template>

<script>
export default {
    name: "products-DLV",
    layout: 'products'
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";
</style>
