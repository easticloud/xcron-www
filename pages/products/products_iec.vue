<template>
    <div class="p-products">
        <!-- 1、banner -->
        <products-banner banner-key="iec"></products-banner>

        <!-- 2、产品优势  -->
        <products-graphic-matrix matrix-key="iec"></products-graphic-matrix>

        <!-- 3、应用场景  -->
        <products-tabs tab-key="iec" custom-class="m-Bms-scene"></products-tabs>

        <!-- 4、功能描述  -->
        <products-graphic-matrix matrix-key="iec_x"></products-graphic-matrix>
    </div>
</template>

<script>
export default {
    name: "products-IEC",
    layout: 'products'
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";

.m-iec-matrix {
    background: #fff;
}
</style>
