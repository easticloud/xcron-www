<template>
    <div class="m-index-item m-index-production">
        <div class="wp">
            <div class="m-title">
                <h2>丰富、安全、稳定的产品及服务</h2>
                <a href="/products" target="_blank" class="u-desc">查看全部产品 ></a>
            </div>
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
        </div>
        <div class="m-content">
            <div class="wp">
                <div class="m-children">
                    <a :href="child.link" target="_blank" class="u-child" v-for="(child, i) in children" :key="i">
                        <span class="u-title">
                            <span class="u-child-title">{{ child.title }}</span>
                            <span class="u-sign" v-if="child.sign">{{ child.sign }}</span>
                        </span>
                        <span class="u-desc">{{ child.desc }}</span>
                        <div class="u-tags">
                            <span class="u-tag" v-for="(item, k) in child.tag" :key="k">{{ item }}</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { production } from "@/assets/data/index.json";
export default {
    data() {
        return {
            index: 0,
        };
    },
    computed: {
        children() {
            return this.list[this.index].children;
        },
        list() {
            return production;
        },
    },
    methods: {
        change(i) {
            this.index = i;
        },
    },
};
</script>

<style scope lang="less">
@import "../../assets/css/index/production.less";
</style>
