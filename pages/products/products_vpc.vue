<template>
    <div class="p-products">
        <!-- 1、虚拟私有云banner -->
        <products-banner banner-key="vpc"></products-banner>

        <!-- 2、了解虚拟私有云  -->
        <products-frame-text text-key="vpc" custom-class="m-p-ECS"></products-frame-text>

        <!-- 3、产品优势  -->
        <products-graphic-matrix matrix-key="vpc" custom-class="ecs-dotcon" />

        <!-- 4、权威认可  -->
        <products-graphic-matrix matrix-key="vpc_x" custom-class="bcsAuth m-vpc-matrix" />

        <!-- 5、应用场景  -->
        <products-tabs tab-key="vpc" custom-class="m-Bms-products_vpc"></products-tabs>
    </div>
</template>

<script>
export default {
    name: "products-VPC",
    layout: "products"
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";

.m-vpc-matrix {
    background: #fff;
}
</style>
