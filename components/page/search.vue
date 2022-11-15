<template>
    <div class="m-page-search">
        <div class="wp">
            <div class="m-box">
                <div class="m-input">
                    <img src="../../assets/img/search.svg" class="u-img" />
                    <input class="u-input" v-model="search" placeholder="搜索" />
                </div>
                <div class="m-list" v-if="search">
                    <template v-if="searchList.length">
                        <a :href="item.link" class="u-item" v-for="(item, i) in list" :key="i">
                            <span v-html="item.title" class="u-title"></span>
                            <span v-html="item.desc" class="u-desc"></span>
                        </a>
                    </template>
                    <template v-else>
                        <span class="u-none">未找到对应结果，请重新输入</span>
                        <h3><img src="../../assets/img/hot.svg" class="u-icon" /> <span>热门推荐</span></h3>
                        <a :href="item.link" class="u-item" v-for="(item, i) in list" :key="i">
                            <span v-html="item.title" class="u-title"></span>
                            <span v-html="item.desc" class="u-desc"></span>
                        </a>
                    </template>
                </div>
            </div>

            <span class="u-search-button" @click="onSearch">搜索</span>
        </div>
        <div class="m-mark"></div>
    </div>
</template>

<script>
import { production, solution } from "@/assets/data/index.json";
import { flatten, cloneDeep, slice } from "lodash";
export default {
    props: {
        textKey: {
            type: String,
            default: "",
        },
    },
    data: function () {
        return {
            search: "",
            searchList: [],
        };
    },
    computed: {
        data() {
            return this.textKey == "programme"
                ? solution.map((item) => item.children)
                : flatten(production.map((item) => item.children));
        },
        list() {
            const hotList = slice(this.data, 0, 3);
            return this.searchList.length ? this.searchList : hotList;
        },
    },
    watch: {
        search(val) {
            if (val) this.onSearch();
        },
    },
    methods: {
        onSearch() {
            const key = this.search;
            const list = cloneDeep(this.data);
            this.searchList = list
                .filter((item) => {
                    item.hasKey = false;
                    if (item.title.includes(key)) {
                        item.title = item.title.split(key).join(`<b>${key}</b>`);
                        item.hasKey = true;
                    }
                    if (item.desc.includes(key)) {
                        item.desc = item.desc.split(key).join(`<b>${key}</b>`);
                        item.hasKey = true;
                    }
                    return item;
                })
                .filter((item) => item.hasKey);
        },
    },
};
</script>
<style scope lang="less">
@import "~@/assets/css/page/search.less";
</style>
