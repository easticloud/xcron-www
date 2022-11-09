<template>
    <div class="p-page-index">
        <!-- 公共头部 -->
        <common-header></common-header>

        <!-- banner -->
        <banner bannerKey="products" />

        <div class="m-page-content">
            <!-- 热门产品推荐 -->
            <IconText textKey="hot" />
            <!-- 了解所有产品 -->
            <div class="m-page-all">
                <h2>了解所有产品</h2>
                <div class="wp">
                    <div class="m-tabs">
                        <div
                            class="m-item"
                            v-for="(item, i) in list"
                            :key="i"
                            :class="{ active: i == index }"
                            @click="change(i)"
                        >
                            <img class="u-img" :src="item.src" />
                            <span class="u-label">{{ item.label }}</span>
                        </div>
                    </div>
                    <div class="m-children">
                        <span class="m-children-label">{{ label }}</span>
                        <div class="u-child" v-for="(child, i) in children" :key="i">
                            <span class="u-title">
                                <a :href="child.link" target="_blank" class="u-child-title">{{ child.title }}</a>
                                <span class="u-sign" v-if="child.sign">{{ child.sign }}</span>
                            </span>
                            <span class="u-desc">{{ child.desc }}</span>
                            <div class="u-tags">
                                <span class="u-tag" v-for="(item, k) in child.tag" :key="k">{{ item }}</span>
                            </div>
                        </div>
                    </div>
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
import IconText from "@/components/programme/icon_text";
import banner from "@/components/page/banner.vue";
import { production } from "@/assets/data/index.json";
export default {
    name: "ProductsPage",
    components: { banner, IconText },
    data() {
        return {
            index: 0,
        };
    },
    computed: {
        list() {
            return production;
        },
        children() {
            return this.list[this.index].children;
        },
        label() {
            return this.list[this.index].label;
        },
    },
    methods: {
        change(i) {
            this.index = i;
        },
    },
};
</script>
<style lang="less">
@import "~@/assets/css/page/index.less";
</style>
<style lang="less" scope>
@import "~@/assets/css/page/products.less";
</style>
