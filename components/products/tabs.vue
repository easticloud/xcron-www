<template>
    <div class="m-p-scene" :class="customClass">
        <div class="wp">
            <h2 v-if="data.title">{{ data.title }}</h2>
            <div class="m-tabs" v-if="data.children.length > 1">
                <div
                    class="m-item"
                    v-for="(item, i) in data.children"
                    :key="i"
                    :class="{ active: index == i }"
                    @click="change(i)"
                >
                    <span class="u-label">{{ item.label }}</span>
                </div>
            </div>
            <div class="m-Scontent">
                <div class="m-item" :class="children.imgPos">
                    <span class="u-img">
                        <img :src="children.src" />
                    </span>
                    <div class="u-con">
                        <p class="u-title">
                            {{ children.title }}
                            <span class="u-titletag" v-if="children.titletag">{{ children.titletag }}</span>
                        </p>
                        <div class="u-tags">
                            <template v-if="children.tag.length">
                                <p class="u-tag" v-for="(child, i) in children.tag" :key="i">
                                    <template v-if="typeof child === 'object'">
                                        <b>{{ child.title }}</b>
                                        <span v-html="nl2br(child.desc)"></span>
                                    </template>
                                    <template v-else>
                                        <span v-html="nl2br(child)"></span>
                                    </template>
                                </p>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import product_tabs from "@/assets/data/product_tabs.json";
export default {
    props: {
        tabKey: {
            type: String,
            default: 'ai'
        },
        customClass: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            index: 0,
        };
    },
    computed: {
        children() {
            return this.data.children[this.index].children;
        },
        data() {
            return product_tabs[this.tabKey];
        }
    },
    methods: {
        change(i) {
            this.index = i;
        },
        nl2br(str) {
            return str.replace(/\n/g, "<br />");
        }
    },
};
</script>

<style scope lang="less">
@import "../../assets/css/products/pmScene.less";
</style>
