<template>
    <div class="p-products">
        <!-- 1、终端安全防护banner -->
        <products-banner banner-key="tsp"></products-banner>

        <!-- 2、产品优势-->
        <products-graphic-matrix matrix-key="tsp"></products-graphic-matrix>

        <!-- 3、应用场景  -->
        <products-graphic-matrix matrix-key="tsp_x" custom-class="ecs-dotcon"></products-graphic-matrix>

        <!-- 4、产品功能  -->
        <products-vertical-matrix matrix-key="tsp"></products-vertical-matrix>
    </div>
</template>

<script>
export default {
    name: "products-TSP",
    layout: 'products',
    head() {
        return {
            title: "终端安全防护",
        }
    }
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";

.m-imgCon {
    background-color: #fff;


}

.ecs-dotcon {
    .m-tabs {
        .m-item {
            height: 242px;

            .u-pic {
                height: 242px;
            }
        }
    }
}
</style>
