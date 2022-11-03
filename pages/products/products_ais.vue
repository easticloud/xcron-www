<template>
    <div class="p-products">
        <!-- 1、banner -->
        <products-banner banner-key="ais"></products-banner>

        <!-- 2、产品优势  -->
        <products-graphic-matrix matrix-key="ais" custom-class="m-p-oSer"></products-graphic-matrix>

        <!-- 3、产品功能  -->
        <products-vertical-matrix matrix-key="ais"></products-vertical-matrix>

        <!-- 4、场景使用  -->
        <products-tabs tab-key="ais" custom-class="m-tab-ais" />
    </div>
</template>

<script>
export default {
    name: "products-AIS",
    layout: "products"
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";

.m-tab-ais {
    background: #fff;

    .m-Scontent {
        margin-top: 0;
        box-shadow: 0px 0px 5px 1px #E6E6E6;

        .u-img {
            img {
                .size(448px, 224px);
            }
        }
    }
}
</style>
