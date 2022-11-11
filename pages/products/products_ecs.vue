<template>
    <div class="p-products">
        <!-- 1、banner -->
        <products-banner banner-key="ecs"></products-banner>

        <!-- 2、了解弹性云服务器  -->
        <products-frame-text text-key="ecs" custom-class="m-p-ECS"></products-frame-text>

        <!-- 3、产品优势  -->
        <products-graphic-matrix matrix-key="ecs" custom-class="ecs-dotcon" />

        <!-- 4、擎天架构加持，助力弹性云服务器更快、更稳 -->
        <!-- <products-pmPInfo :title="title" :bgImg="bgImg"></products-pmPInfo> -->

        <!-- 5、权威认可  -->
        <products-graphic-matrix matrix-key="ecs_x" custom-class="bcsAuth" />
    </div>
</template>

<script>
export default {
    name: "products-ECS",
    layout: "products",
    data() {
        return {
            // 技术支撑
            title: "擎天架构加持，助力弹性云服务器更快、更稳",//标题
            bgImg: "/images/products/products_ecs/bg.png"
        }
    },
    head() {
        return {
            title: "弹性云服务器",
        }
    }
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
@media screen and (max-width: @phone) {
    .m-p-aboutBCS {
        .h(auto);
        .m-bcs {
            gap: 20px;
        }
    }
}
</style>
