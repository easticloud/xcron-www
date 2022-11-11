<template>
    <div class="m-index-item m-index-solution">
        <div class="wp">
            <div class="m-title">
                <h2>全面、专业、智能的解决方案</h2>
                <a href="/programme" target="_blank" class="u-desc">查看全部解决方案 ></a>
            </div>
            <div class="m-tabs">
                <div
                    class="m-item"
                    v-for="(item, i) in list"
                    :key="i"
                    :class="{ active: index == i }"
                    @click="change(i)"
                >
                    <img class="u-img" :src="item.src" />
                    <span class="u-label">{{ item.label }}</span>
                </div>
            </div>
            <a
                :href="children.link"
                target="_blank"
                class="m-content"
                :style="`backgroundImage: url(${children.src})`"
                v-if="!children.other"
            >
                <div class="m-item">
                    <span class="u-title">{{ children.title }}</span>
                    <span class="u-desc" v-if="children.desc">{{ children.desc }}</span>
                    <div class="u-tags">
                        <template v-if="children.tag.length">
                            <span class="u-tag" v-for="(child, i) in children.tag" :key="i">{{ child }}</span>
                        </template>
                    </div>
                </div>
            </a>
            <div class="m-content" v-else>
                <div class="u-others">
                    <template v-if="children.other.length">
                        <a
                            :href="child.link"
                            target="_blank"
                            class="u-other"
                            v-for="(child, i) in children.other"
                            :key="i"
                            >{{ child.title }}</a
                        >
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { solution } from "@/assets/data/index.json";
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
            return solution;
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
@import "../../assets/css/index/solution.less";
</style>
