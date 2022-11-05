<template>
    <div class="p-programme">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 内容 -->
        <div class="m-programme-content">
            <Header banner-key="finance" />
            <!-- 行业趋势 -->
            <TextPicture textKey="finance" />
            <!-- 方案优势 -->
            <AllText textKey="finance" />
            <!-- 部署方式 -->
            <IconText textKey="finance" />
        </div>
        <!-- 服务支持 -->
        <products-pmService></products-pmService>
        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>
<script>
// 金融行业解决方案
import Header from "@/components/programme/header";
import IconText from "@/components/programme/icon_text";
import TextPicture from "@/components/programme/text_picture";
import AllText from "@/components/programme/all_text";
export default {
    components: { Header, IconText, TextPicture, AllText },
};
</script>
<style lang="less">
@import "~@/assets/css/programme/index.less";
</style>
