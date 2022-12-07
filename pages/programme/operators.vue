<template>
    <div class="p-programme">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 内容 -->
        <div class="m-programme-content">
            <Header banner-key="operators" />
            <!-- 行业趋势 -->
            <TextPicture textKey="operators" />
            <!-- 方案优势 -->
            <AllText textKey="operators" />
            <!-- 多种方案 -->
            <div class="m-more">
                <Recommend textKey="operators" />
            </div>
        </div>
        <!-- 服务支持 -->
        <products-pmService></products-pmService>
        <!-- 公共底部 -->
        <common-footer></common-footer>
        
        
    </div>
</template>
<script>
// 运营商行业解决方案
import Header from "@/components/programme/header";
import TextPicture from "@/components/programme/text_picture";
import Recommend from "@/components/scenes/recommend";
import AllText from "@/components/programme/all_text";

export default {
    components: { Header, TextPicture, Recommend, AllText },
    head() {
        return {
            title: "运营商行业解决方案",
        };
    },
};
</script>
<style lang="less">
@import "~@/assets/css/programme/index.less";
</style>
