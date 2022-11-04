<template>
    <div class="p-products">
        <!-- 1、数据接入服务banner -->
        <products-banner banner-key="dis"></products-banner>

        <!-- 2、产品优势  -->
        <products-graphic-matrix matrix-key="dis"></products-graphic-matrix>

        <!-- 3、应用场景  -->
        <products-tabs tab-key="dis" custom-class="m-Bms-products_dis"></products-tabs>

        <!-- 4、功能描述  -->
        <products-graphic-matrix matrix-key="dis_x"></products-graphic-matrix>
    </div>
</template>

<script>
export default {
    name: "products-DIS",
    layout: 'products',
    head() {
        return {
            title: "数据接入服务",
        }
    }
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";
</style>
