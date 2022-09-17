<template>
    <div class="c-header">
        <div class="wp">
            <img src="../assets/img/logo.svg" alt="Xcron" />
            <div class="m-box">
                <nuxt-link class="u-link" v-for="(item, i) in list" :key="i" :to="item.href">
                    {{ item.label }}
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                { label: "首页", href: "" },
                { label: "产品中心", href: "" },
                { label: "解决方案", href: "" },
                { label: "合作伙伴", href: "" },
                { label: "服务支持", href: "" },
                { label: "联系我们", href: "" },
                { label: "关于我们", href: "" },
            ],
        };
    },
    async asyncData({ params }) {
        return {};
    },
};
</script>

<style lang="less">
@import "~@/assets/css/header.less";
</style>
