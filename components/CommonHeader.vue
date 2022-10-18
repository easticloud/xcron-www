<template>
    <div class="c-header">
        <div class="wp">
            <nuxt-link to="/"><img src="../assets/img/logo.svg" alt="Xcron" /></nuxt-link>
            <div class="m-box">
                <nuxt-link class="u-link" target="_blank" v-for="(item, i) in list" :key="i" :to="item.href">
                    <span class="u-txt" :class="activeIndex == i ? 'active' : ''" @click="activeHandle(i)"
                        @mouseover="change(item.key)">
                        {{ item.label }}</span>
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
            activeIndex: 0,
            list: [
                { label: "首页", class: "active", key: "index", href: "/" },
                { label: "产品中心", class: "active", key: "production", href: "" },
                { label: "解决方案", class: "active", key: "solution", href: "" },
                { label: "合作伙伴", class: "active", key: "partner", href: "" },
                { label: "服务支持", class: "active", key: "service", href: "" },
                { label: "联系我们", class: "active", key: "contact", href: "" },
                { label: "关于我们", class: "active", key: "about", href: "" },
            ],
        };
    },
    methods: {
        change(key) {
            this.type = key == "production" || key == "solution" ? key : "";
            this.isshow = "display:block";
        },

        activeHandle(index) {
            //把我们自定义的下标赋值
            this.activeIndex = index;
        },
    },
};
</script>

<style scope lang="less">
@import "~@/assets/css/header.less";
</style>
