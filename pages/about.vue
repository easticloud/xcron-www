<template>
    <div class="p-page-index">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- banner -->
        <banner bannerKey="about" />

        <div class="m-page-content">
            <!-- 公司简介 -->
            <TextPicture textKey="info" />
            <!-- 荣誉资质 -->
            <partner textKey="honors" class="u-bg" />
        </div>
        <!-- 服务支持 -->
        <products-pmService></products-pmService>
        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
import banner from "@/components/page/banner.vue";
import partner from "@/components/page/partner.vue";
import TextPicture from "@/components/programme/text_picture";
export default {
    name: "AboutPage",
    components: { banner, partner, TextPicture },
};
</script>
<style lang="less">
@import "~@/assets/css/page/index.less";
</style>
