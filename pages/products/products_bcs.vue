<template>
    <div class="p-products">
        <!-- 1、banner -->
        <products-banner banner-key="bcs"></products-banner>

        <!-- 2、了解区块链服务  -->
        <products-frame-text text-key="bcs"></products-frame-text>

        <!-- 3、产品与服务  -->
        <products-vertical-matrix matrix-key="bcs" custom-class="noimgCon" />

        <!-- 4、产品优势  -->
        <products-vertical-matrix matrix-key="bcs_x" custom-class="bcsBg" />

        <!-- 5、权威认可  -->
        <products-graphic-matrix matrix-key="bcs" custom-class="bcsAuth" />
    </div>
</template>

<script>
export default {
    name: "products-BCS",
    layout: "products",
    head() {
        return {
            title: "区块链服务",
        }
    }
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";
</style>
