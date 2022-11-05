<template>
    <div class="p-scene">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 行业场景 -->
        <div class="m-industry-scene">
            <Header banner-key="industry" />
            <Tabs textKey="industry" :index="tabsIndex" @change="changeTab" />
            <div class="wp m-industry-content m-scene-content">
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
// 行业场景
import Header from "@/components/scenes/header";
import Tabs from "@/components/scenes/tabs";
import Business from "@/components/scenes/business";
import Programme from "@/components/scenes/programme";
import Recommend from "@/components/scenes/recommend";
export default {
    components: { Header, Tabs, Business, Programme, Recommend },
    data() {
        return { 
            keys: ["media", "online", "health"],
            tabsIndex: 0,
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
