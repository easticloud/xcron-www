<template>
    <div class="p-programme">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 内容 -->
        <div class="m-programme-content">
            <PageHeader banner-key="media" />
            <!-- 行业趋势 -->
            <TextPicture textKey="media" />
            <!-- 方案优势 -->
            <AllText textKey="media" />
            <!-- 客户案例 -->
            <PictureText textKey="media" />
        </div>
        <!-- 服务支持 -->
        <products-pmService></products-pmService>
        <!-- 公共底部 -->
        <common-footer></common-footer>


    </div>
</template>
<script>
// 媒体应用解决方案
import PageHeader from "@/components/programme/header";
import TextPicture from "@/components/programme/text_picture";
import AllText from "@/components/programme/all_text";
import PictureText from "@/components/programme/picture_text";
export default {
    components: { PageHeader, TextPicture, AllText, PictureText },
    head() {
        return {
            title: "媒体应用解决方案",
        };
    },
};
</script>
<style lang="less">
@import "~@/assets/css/programme/index.less";
</style>
