<template>
    <div class="m-scene-business">
        <div class="m-title">
            <h2>业务痛点</h2>
            <span class="u-desc" v-if="desc">{{ desc }}</span>
        </div>
        <div class="m-business-content">
            <div class="u-item" v-for="(item, i) in list" :key="i">
                <img class="u-img" :src="item.icon" />
                <div class="u-box">
                    <span class="u-title">{{ item.title }}</span>
                    <span class="u-desc">{{ item.desc }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["data"],
    computed: {
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
