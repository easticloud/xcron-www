<template>
    <client-only>
        <div>
            <div class="m-index-menu" v-if="type">
                <div class="wp">
                    <template v-if="type == 'products'">
                        <div class="m-list-production">
                            <a class="u-more" href="" target="_blank">查看全部产品 ></a>
                            <span
                                class="u-list"
                                v-for="(item, i) in production"
                                :key="i"
                                :class="{ active: index == i }"
                                @click="change(i)"
                            >
                                {{ item.title }}
                            </span>
                        </div>
                        <div class="m-search">
                            <div class="u-search">
                                <img class="u-img" src="../../assets/img/search.svg" />
                                <el-input class="u-input" placeholder="搜索云产品" v-model.trim="search" clearable />
                            </div>
                            <div class="m-content" v-show="children.length">
                                <a
                                    :href="item.link"
                                    class="m-item"
                                    :class="{ 'is-search': search, active: $route.fullPath === item.link }"
                                    v-for="(item, i) in children"
                                    :key="i"
                                >
                                    <span class="u-title">{{ item.title }}</span>
                                    <span class="u-desc" v-show="!search">{{ item.desc }}</span>
                                </a>
                            </div>
                            <div class="m-empty" v-show="!children.length"><span>没找到结果，请重新输入</span></div>
                        </div>
                    </template>
                    <template v-if="type == 'programme'">
                        <div class="m-list-solution">
                            <a
                                :href="item.link"
                                class="m-item"
                                v-for="(item, i) in solution"
                                :key="i"
                                :class="{ active: $route.fullPath === item.link }"
                            >
                                <img class="u-img" :src="item.icon" />
                                <a class="u-txt">
                                    <span class="u-label">{{ item.label }}</span>
                                    <span class="u-desc">{{ item.desc }}</span>
                                </a>
                            </a>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </client-only>
</template>
<script>
import { menu } from "@/assets/data/index.json";
export default {
    props: ["type"],
    data() {
        return {
            index: 0,
            search: "",
        };
    },
    computed: {
        children() {
            const list = this.production;
            const flattenChildren = list.reduce((acc, cur) => {
                return acc.concat(cur.children);
            }, []);
            return this.search
                ? flattenChildren.filter((item) => item.title.includes(this.search))
                : list[this.index].children;
        },
        solution() {
            return menu.solution;
        },
        production() {
            return menu.production;
        },
    },
    watch: {
        $route: {
            deep: true,
            immediate: true,
            handler() {
                this.setIndex();
            },
        },
    },
    methods: {
        change(i) {
            this.index = i;
        },
        reset() {
            this.setIndex();
        },
        setIndex() {
            const fullPath = this.$route.fullPath;
            if (fullPath.includes("/products")) {
                for (let i = 0; i < this.production.length; i++) {
                    const children = this.production[i].children;
                    for (let j = 0; j < children.length; j++) {
                        if (fullPath === children[j].link) {
                            this.index = i;
                            break;
                        }
                    }
                }
            }
        },
    },
};
</script>

<style scope lang="less">
@import "../../assets/css/index/menu.less";
</style>
