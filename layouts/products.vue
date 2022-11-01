<template>
    <div class="p-products">
        <!-- 公共头部 -->
        <common-header></common-header>

        <nuxt></nuxt>

        <!-- 服务支持 -->
        <products-pmService></products-pmService>

        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
export default {
    name: "ProductLayout",
}
</script>
