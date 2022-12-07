<template>
    <div class="p-programme">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 内容 -->
        <div class="m-programme-content">
            <Header banner-key="government" />
            <!-- 产品技术 -->
            <IconText textKey="government" />
            <!-- 方案优势 -->
            <AllText textKey="government" />
            <!-- 方案全景图 -->
            <PictureText textKey="government" />
        </div>
        <!-- 服务支持 -->
        <products-pmService></products-pmService>
        <!-- 公共底部 -->
        <common-footer></common-footer>
        
        
    </div>
</template>
<script>
// 数字政府解决方案
import Header from "@/components/programme/header";
import IconText from "@/components/programme/icon_text";
import PictureText from "@/components/programme/picture_text";
import AllText from "@/components/programme/all_text";
export default {
    components: { Header, IconText, PictureText, AllText },
    head() {
        return {
            title: "数字政府解决方案",
        };
    },
};
</script>
<style lang="less">
@import "~@/assets/css/programme/index.less";
</style>
