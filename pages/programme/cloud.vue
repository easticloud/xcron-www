<template>
    <div class="p-programme">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 内容 -->
        <div class="m-programme-content">
            <Header banner-key="cloud" />
            <!-- ERP -->
            <IconText textKey="cloud" />
            <!-- 方案优势 -->
            <PictureText textKey="cloud_advantages" />
            <!-- 客户案例 -->
            <PictureText textKey="cloud_customers" />
        </div>
        <!-- 服务支持 -->
        <products-pmService></products-pmService>
        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>
<script>
// 迁移上云解决方案
import Header from "@/components/programme/header";
import IconText from "@/components/programme/icon_text";
import PictureText from "@/components/programme/picture_text";
export default {
    components: { Header, IconText, PictureText },
    head() {
        return {
            title: "迁移上云解决方案",
        };
    },
};
</script>
<style lang="less">
@import "~@/assets/css/programme/index.less";
</style>
