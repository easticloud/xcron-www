<template>
    <div class="p-page-index">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- banner -->
        <banner bannerKey="services" />

        <div class="m-page-content">
            <!-- 上云实施 -->
            <IconText textKey="cloud_services" />
            <!-- 云上管理 -->
            <PagePictureText textKey="services" />
            <!-- 专家服务 -->
            <IconText class="m-services" textKey="services" />
        </div>
        <!-- 服务支持 -->
        <products-pmService></products-pmService>
        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
import banner from "@/components/page/banner";
import IconText from "@/components/programme/icon_text";
import PagePictureText from "@/components/page/picture_text";
export default {
    name: "ServicesProductsPage",
    components: { banner, IconText, PagePictureText },
};
</script>
<style lang="less">
@import "~@/assets/css/page/index.less";
</style>

<style lang="less">
.p-page-index .m-services .m-list {
    flex-wrap: wrap;
    .u-item {
        min-width: 320px;
    }
}
</style>
