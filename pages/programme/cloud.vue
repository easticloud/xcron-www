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
                type: "cloud",
                title: "迁移上云解决方案",
                desc: "我们提供ERP系统上云一站式服务，为您完成数字化时代的企业管理工具转型。",
            },
        };
    },
};
</script>
<style lang="less">
@import "~@/assets/css/programme/index.less";
</style>
