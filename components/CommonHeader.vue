<template>
    <div>
        <div class="c-header">
            <div class="wp">
                <nuxt-link to="/"><img src="../assets/img/logo.svg" alt="Xcron" /></nuxt-link>
                <div class="m-box">
                    <nuxt-link class="u-link" v-for="(item, i) in list" :key="i" :to="item.href">
                        <span
                            class="u-txt"
                            :class="activeIndex == i ? 'active' : ''"
                            @click="activeHandle(i)"
                            @mouseover="change(item.key)"
                        >
                            {{ item.label }}
                        </span>
                    </nuxt-link>
                </div>
            </div>
            <div @mouseleave="clean">
                <index-menu :type="type" ref="menu"></index-menu>
            </div>
        </div>
        <div class="c-header-mobile" :class="{ show }">
            <div class="m-header">
                <nuxt-link to="/"><img src="../assets/img/logo.svg" alt="Xcron" class="u-logo" /></nuxt-link>
                <img src="../assets/img/menu.svg" class="u-icon" @click="show = !show" />
            </div>
            <div class="m-menu" v-show="show">
                <nuxt-link class="u-link" v-for="(item, i) in list" :key="i" :to="item.href">
                    <span class="u-txt" @click="show = false">
                        {{ item.label }}
                    </span>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            type: "",
            list: [
                { label: "首页", class: "active", key: "index", href: "/" },
                { label: "产品中心", class: "active", key: "products", href: "/products" },
                { label: "解决方案", class: "active", key: "programme", href: "/programme" },
                { label: "合作伙伴", class: "active", key: "partner", href: "/partner" },
                { label: "服务支持", class: "active", key: "service", href: "/services" },
                { label: "联系我们", class: "active", key: "contact", href: "/contact" },
                { label: "关于我们", class: "active", key: "about", href: "/about" },
            ],
            show: false,
        };
    },
    computed: {
        activeIndex() {
            return this.$store.state.activeIndex;
        },
    },
    watch: {
        $route: {
            deep: true,
            immediate: true,
            handler(val) {
                if (val.path.includes("products")) this.$store.commit("changeMenuIndex", 1);
                if (val.path.includes("programme")) this.$store.commit("changeMenuIndex", 2);
            },
        },
    },
    methods: {
        change(key) {
            this.type = key == "products" || key == "programme" ? key : "";
        },

        activeHandle(index) {
            this.$store.commit("changeMenuIndex", index);
        },
        clean() {
            this.type = "";

            this.$refs.menu && this.$refs.menu.reset();
        },
    },
};
</script>

<style scope lang="less">
@import "~@/assets/css/header.less";
</style>
