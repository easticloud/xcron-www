<template>
    <div class="p-scene">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 企业场景 -->
        <div class="m-enterprise-scene">
            <Header banner-key="enterprise" />
            <Tabs textKey="enterprise" :index="tabsIndex" @change="changeTab" />
            <div class="wp m-enterprise-content m-scene-content">
                <Business :textKey="current" />
                <Programme :textKey="current" />
                <Recommend :textKey="current" />
            </div>
        </div>
        <!-- 服务支持 -->
        <products-pmService></products-pmService>
        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>
<script>
// 企业场景
import Header from "@/components/scenes/header";
import Tabs from "@/components/scenes/tabs";
import Business from "@/components/scenes/business";
import Programme from "@/components/scenes/programme";
import Recommend from "@/components/scenes/recommend";
export default {
    components: { Header, Tabs, Business, Programme, Recommend },
    data() {
        return {
            tabsIndex: 0,
            keys: ["cloud", "start", "marketing", "safe"],
        };
    },
    computed: {
        current() {
            return this.keys[this.tabsIndex];
        },
    },
    methods: {
        changeTab(i) {
            this.tabsIndex = i;
        },
    },
};
</script>
<style lang="less">
@import "~@/assets/css/scene/index.less";
</style>
