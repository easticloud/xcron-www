<template>
    <div class="p-programme">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 内容 -->
        <div class="m-programme-content">
            <Header :data="header" />
        </div>
        <!-- 服务支持 -->
        <products-pmService></products-pmService>
        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>
<script>
import Header from "@/components/programme/header";
export default {
    components: { Header },
    data() {
        return {
            header: {
                type: "media",
                title: "媒体应用解决方案",
                desc: "依托软硬协同、端云结合、音视频编解码技术等差异化能力，提供涵盖视频生产、分发和应用在内的超高清、低时延、强互动、极致体验的媒体能力，助力文娱行业持续创新。",
            },
        };
    },
};
</script>
<style lang="less">
@import "~@/assets/css/programme/index.less";
</style>