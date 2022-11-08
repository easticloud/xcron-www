<template>
    <div class="p-page-index">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- banner -->
        <banner bannerKey="partner" />

        <div class="m-page-content">
            <!-- 同舟共济 -->
            <partner textKey="partner" />
            <!-- 伙伴能力中心 -->
            <partner textKey="ability" class="u-bg" />
            <!-- 云市场严选伙伴 -->
            <partner textKey="cloud" />
            <!-- 解决方案伙伴 -->
            <partner textKey="solution" class="u-bg" />
        </div>

        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
import banner from "@/components/page/banner.vue";
import partner from "@/components/page/partner.vue";
export default {
    name: "PartnerPage",
    components: { banner, partner },
};
</script>
<style lang="less">
@import "~@/assets/css/page/index.less";
</style>
