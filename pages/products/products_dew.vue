<template>
    <div class="p-products">
        <!-- 1、banner -->
        <products-banner banner-key="dew"></products-banner>

        <!-- 2、了解数据加密服务  -->
        <products-frame-text text-key="dew"></products-frame-text>

        <!-- 3、功能描述  -->
        <products-graphic-matrix matrix-key="dew"></products-graphic-matrix>

        <!-- 4、应用场景  -->
        <products-tabs tab-key="dew" custom-class="m-Bms-scene"></products-tabs>
    </div>
</template>

<script>
export default {
    name: "products-DEW",
    layout: 'products'
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";
</style>
