<template>
    <div class="p-products">
        <!-- 1、云专线banner -->
        <products-banner banner-key="dc"></products-banner>

        <!-- 2、了解云专线  -->
        <products-frame-text text-key="dc" custom-class="m-p-ECS"></products-frame-text>

        <!-- 3、应用场景  -->
        <products-tabs tab-key="dc" custom-class="m-Bms-products_dc"></products-tabs>

        <!-- 4、权威认可  -->
        <products-graphic-matrix matrix-key="dc" custom-class="bcsAuth-1" />

        <!-- 5、联系我们Contact  -->
        <products-contact-us></products-contact-us>
    </div>
</template>

<script>
export default {
    name: "products-DC",
    layout: "products",
    head() {
        return {
            title: "云专线",
        };
    },
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";

.m-p-aboutBCS {
    height: 403px;
}
@media screen and (max-width: @phone) {
    .m-p-aboutBCS {
        .h(auto);
    }
}
</style>
