<template>
    <div class="p-scene">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 通用场景 -->
        <div class="m-common-scene">
            <Header banner-key="common" />
            <Tabs textKey="common" :index="tabsIndex" @change="changeTab" />
            <div class="wp m-common-content m-scene-content">
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
// 通用场景
import Header from "@/components/scenes/header";
import Tabs from "@/components/scenes/tabs";
import Programme from "@/components/scenes/programme";
import Recommend from "@/components/scenes/recommend";
export default {
    components: { Header, Tabs, Programme, Recommend },
    head() {
        return {
            title: "通用场景",
        };
    },
    data() {
        return {
            keys: ["market", "resources", "administration", "finance", "develop"],
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
