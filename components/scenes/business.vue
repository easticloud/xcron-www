<template>
    <div class="m-scene-business" v-if="data">
        <div class="m-title">
            <h2>业务痛点</h2>
            <span class="u-desc" v-if="desc">{{ desc }}</span>
        </div>
        <div class="m-business-content">
            <div class="u-item" v-for="(item, i) in list" :key="i">
                <img class="u-img" :src="require(`/static/images/${item.icon}`)" />
                <div class="u-box">
                    <span class="u-title">{{ item.title }}</span>
                    <span class="u-desc">{{ item.desc }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import scenes_business from "@/assets/data/scenes_business.json";
export default {
    props: {
        textKey: {
            type: String,
            default: "",
        },
    },
    computed: {
        data() {
            return scenes_business[this.textKey] || "";
        },
        desc() {
            return this.data.desc || "";
        },
        list() {
            return this.data.list || [];
        },
    },
};
</script>
<style scope lang="less">
@import "~@/assets/css/scene/business.less";
</style>
