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
            <!-- 品牌理念 -->
            <div class="m-concept">
                <h2>品牌理念</h2>
            </div>
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
<style lang="less" scoped>
.m-concept {
    .pt(55px);
    .h(500px);
    box-sizing: border-box;
    background-position: center center;
    background-size: 1920px 500px;
    background-repeat: no-repeat;
    background-image: url(../static/images/page/about/concept.png);
    background-color: #f2f3f7;
}
</style>
