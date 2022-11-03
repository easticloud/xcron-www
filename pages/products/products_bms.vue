<template>
    <div class="p-products">
        <!-- 1、banner -->
        <products-banner banner-key="bms"></products-banner>

        <!-- 2、了解裸金属服务器  -->
        <products-frame-text text-key="bms" custom-class="m-p-ECS"></products-frame-text>

        <!-- 3、产品优势  -->
        <products-graphic-matrix matrix-key="bms_x" custom-class="ecs-dotcon" />

        <!-- 4、擎天架构，为裸金属提供业界领先技术支撑 -->
        <products-pmPInfo :title="title" :bgImg="bgImg"></products-pmPInfo>

        <!-- 5、应用场景  -->
        <products-tabs tab-key="bms" custom-class="m-Bms-scene"></products-tabs>
    </div>
</template>

<script>
export default {
    name: "products-BMS",
    layout: "products",
    data() {
        return {
            // 技术支撑
            title: "擎天架构，为裸金属提供业界领先技术支撑", //标题
            bgImg: "/images/products/products_bms/bg.png"
        };
    },
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";

.m-p-aboutBCS {
    height: 427px;
}

.m-p-aboutBCS .m-bcs {
    gap: 90px;
}
</style>
