<template>
    <div class="p-products">
        <!-- 1、云数据仓库banner -->
        <products-banner banner-key="cdw"></products-banner>

        <!-- 2、了解云数据仓库  -->
        <products-frame-text text-key="cdw" custom-class="m-p-ECS"></products-frame-text>

        <!-- 3、产品优势  -->
        <products-graphic-matrix matrix-key="cdw_x" custom-class="ecs-dotcon" />

        <!-- 4、精品案例  -->
        <products-vertical-matrix matrix-key="cdw" custom-class="p-cdw"></products-vertical-matrix>

        <!-- 5、应用场景  -->
        <products-tabs tab-key="cdw" custom-class="m-Bms-scene"></products-tabs>
    </div>
</template>

<script>
export default {
    name: "products-CDW",
    layout: "products"
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";
</style>
