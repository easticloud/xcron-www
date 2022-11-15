<template>
    <div class="m-scene-service" v-if="service">
        <div class="m-box">
            <span class="u-title">{{ service.title }}</span>
            <span class="u-desc">{{ service.desc }}</span>
            <span class="m-price">
                <span>¥</span>
                <span class="u-number">{{ service.price }}</span>
                <span class="u-desc">{{ service.label }}</span>
            </span>
            <span class="u-tag">
                <span class="u-txt">{{ service.tag }}</span>
            </span>
        </div>
        <a href="/contact#contact" target="_blank" class="u-button">立即咨询</a>
    </div>
</template>
<script>
export default {
    props: ["data"],
    computed: {
        service() {
            return this.data || null;
        },
    },
};
</script>
<style scope lang="less">
@import "~@/assets/css/scene/service.less";
</style>
