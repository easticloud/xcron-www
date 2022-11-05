<template>
    <div class="p-programme">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 内容 -->
        <div class="m-programme-content">
            <Header banner-key="new-retail" />
            <!-- 行业挑战 -->
            <PictureText :data="industry" textKey="new-retail-industry" />
            <!-- 方案优势 -->
            <AllText textKey="new-retail" />
            <!-- 场景化方案 -->
            <PictureText :data="scene" textKey="new-retail-scene" />
        </div>
        <!-- 服务支持 -->
        <products-pmService></products-pmService>
        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>
<script>
// 新零售行业解决方案
import Header from "@/components/programme/header";
import PictureText from "@/components/programme/picture_text";
import AllText from "@/components/programme/all_text";
export default {
    components: { Header, PictureText, AllText },
};
</script>
<style lang="less">
@import "~@/assets/css/programme/index.less";
</style>
