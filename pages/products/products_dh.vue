<template>
    <div class="p-products">
        <!-- 1、banner -->
        <products-banner banner-key="dh" />

        <!-- 2、产品优势  -->
        <products-graphic-matrix matrix-key="dh" />

        <!-- 3、应用场景  -->
        <products-tabs tab-key="dh" custom-class="m-Bms-products_dh" />

        <!-- 4、功能描述  -->
        <products-graphic-matrix matrix-key="dh_x" />
    </div>
</template>

<script>
export default {
    name: "products-DH",
    layout: 'products'
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";
</style>
