<template>
    <div class="m-page-partner">
        <h2>{{ title }}</h2>
        <div class="m-list wp">
            <div class="u-item" v-for="(item, i) in list" :key="i">
                <img class="u-img" :src="require(`/static/images/${item.logo}`)" :alt="item.name" />
                <span class="u-title">{{ item.name }}</span>
            </div>
        </div>
    </div>
</template>
<script>
import page_partner from "@/assets/data/page_partner.json";
export default {
    props: {
        textKey: {
            type: String,
            default: "",
        },
    },
    computed: {
        data() {
            return page_partner[this.textKey] || "";
        },
        title() {
            return this.data.title || "";
        },
        list() {
            return this.data.list || [];
        },
    },
};
</script>
<style scope lang="less">
@import "~@/assets/css/page/partner.less";
</style>
