<template>
    <div class="p-index">
        <!-- 公共头部 -->
        <common-header></common-header>

        <!-- 1、轮播图 -->
        <client-only>
            <index-kv></index-kv>
        </client-only>

        <!-- 2、产品及服务 -->
        <index-production></index-production>

        <!-- 3、应用场景 -->
        <index-scene></index-scene>

        <!-- 4、解决方案 -->
        <index-solution></index-solution>
        
        <!-- 5、客户 -->
        <index-partner></index-partner>

        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
export default {
    name: "IndexPage",
};
</script>

<style lang="less">
@import "~@/assets/css/index.less";
</style>
