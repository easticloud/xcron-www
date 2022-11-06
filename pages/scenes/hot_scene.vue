<template>
    <div class="p-scene">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 热门场景 -->
        <div class="m-hot-scene">
            <Header banner-key="hot" />
            <div class="wp m-hot-content">
                <div class="m-info">
                    <div class="u-item" v-for="(item, i) in info" :key="i">
                        <span class="u-label">{{ item.label }}</span>
                        <span class="u-desc">{{ item.desc }}</span>
                    </div>
                </div>
                <div class="m-shop">
                    <h2>云商店</h2>
                    <span class="u-desc">{{ desc }}</span>
                    <div class="m-tag">
                        <div class="u-tag" v-for="(item, i) in tag" :key="i">
                            <img src="../../static/images/scene/hot/check.svg" class="u-img" />
                            <span> {{ item }}</span>
                        </div>
                    </div>
                </div>
                <div class="m-service">
                    <Service v-for="(item, i) in service" :key="i" :data="item" />
                </div>
            </div>
        </div>
        <!-- 服务支持 -->
        <products-pmService></products-pmService>
        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>
<script>
// 热门场景
import scenes_hot from "@/assets/data/scenes_hot.json";
import Header from "@/components/scenes/header";
import Service from "@/components/scenes/service";
export default {
    components: { Header, Service },
    head() {
        return {
            title: "热门场景",
        }
    },
    data() {
        return {};
    },
    computed: {
        info() {
            return scenes_hot.info;
        },
        tag() {
            return scenes_hot.tag;
        },
        desc() {
            return scenes_hot.desc;
        },
        service() {
            return scenes_hot.service;
        },
    },
};
</script>
<style lang="less" scoped>
@import "~@/assets/css/scene/hot.less";
</style>
