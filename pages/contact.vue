<template>
    <div class="p-page-index">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- banner -->
        <banner bannerKey="contact" />

        <div class="m-page-content">
            <!-- 售后服务 -->
            <IconText class="m-services" textKey="sales" />
        </div>
        <!-- 服务支持 -->
        <products-pmService></products-pmService>
        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
import banner from "@/components/page/banner.vue";
import IconText from "@/components/programme/icon_text";
export default {
    name: "ContactPage",
    components: { banner, IconText },
};
</script>
<style lang="less">
@import "~@/assets/css/page/index.less";
</style>
