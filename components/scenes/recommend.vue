<template>
    <div class="m-scene-recommend" v-if="data">
        <div class="wp m-recommend-content" :class="title ? 'u-shadow' : ''">
            <div class="m-title">
                <h2>{{ title ? title : "场景推荐" }}</h2>
                <span class="u-desc" v-if="desc">{{ desc }}</span>
            </div>
            <div class="m-box">
                <div class="u-item" v-for="(item, i) in list" :key="i">
                    <div class="u-txt">
                        <span class="u-title">{{ item.title }}</span>
                        <span class="u-desc" v-html="item.desc"></span>
                        <div class="m-tag" v-if="item.tag">
                            <span class="u-tag" v-for="(tag, key) in item.tag" :key="key">
                                <img src="../../static/images/scene/enterprise/check.svg" class="u-img" />
                                <span>{{ tag }}</span>
                            </span>
                        </div>
                    </div>
                    <a href="" target="_blank" class="u-button">立即咨询</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import scenes_recommend from "@/assets/data/scenes_recommend.json";
export default {
    props: {
        textKey: {
            type: String,
            default: "",
        },
    },
    computed: {
        data() {
            return scenes_recommend[this.textKey] || "";
        },
        desc() {
            return this.data.desc || "";
        },
        list() {
            return this.data.list || "";
        },
        title() {
            return this.data.title || "";
        },
    },
};
</script>
<style scope lang="less">
@import "~@/assets/css/scene/recommend.less";
</style>
