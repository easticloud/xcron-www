<template>
    <div class="c-header">
        <div class="wp">
            <img src="../assets/img/logo.svg" alt="Xcron" />
            <div class="m-box">
                <nuxt-link class="u-link" v-for="(item, i) in list" :key="i" :to="item.href">
                    <span class="u-txt" @mouseover="change(item.key)"> {{ item.label }}</span>
                </nuxt-link>
            </div>
        </div>
        <index-menu :type="type"></index-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            type: "",
            list: [
                { label: "首页", key: "index", href: "" },
                { label: "产品中心", key: "production", href: "" },
                { label: "解决方案", key: "solution", href: "" },
                { label: "合作伙伴", key: "partner", href: "" },
                { label: "服务支持", key: "service", href: "" },
                { label: "联系我们", key: "contact", href: "" },
                { label: "关于我们", key: "about", href: "" },
            ],
        };
    },
    methods: {
        change(key) {
            this.type = key == "production" || key == "solution" ? key : "";
        },
    },
};
</script>

<style scope lang="less">
@import "~@/assets/css/header.less";
</style>
