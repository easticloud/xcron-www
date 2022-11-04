<template>
    <div class="p-products">
        <!-- 1、banner -->
        <products-banner banner-key="ga"></products-banner>

        <!-- 2、产品优势  -->
        <products-graphic-matrix matrix-key="ga"></products-graphic-matrix>

        <!-- 3、应用场景  -->
        <products-tabs tab-key="ga" custom-class="m-Bms-scene"></products-tabs>
    </div>
</template>

<script>
export default {
    name: "products-GA",
    layout: 'products',
    head() {
        return {
            title: "全球加速",
        }
    }
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";
</style>
