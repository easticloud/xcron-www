<template>
    <div class="m-scene-programme" v-if="data">
        <div class="wp m-programme-content">
            <div class="u-img-box">
                <img :src="require(`/static/images/${img}`)" class="u-img" />
            </div>
            <div class="m-programme-box">
                <div class="m-box">
                    <span class="u-title u-scene">方案场景</span>
                    <span class="u-desc">{{ scene }}</span>
                </div>
                <div class="m-box">
                    <span class="u-title">方案优势</span>
                    <div class="m-list">
                        <div class="u-item" v-for="(item, i) in advantage" :key="i">
                            <img src="../../static/images/scene/enterprise/check.svg" class="u-img" />
                            <div class="u-txt">
                                <span class="u-label">{{ item.title }}</span>
                                <span class="u-desc">{{ item.desc }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="m-box">
                    <span class="u-title">推荐产品</span>
                    <div class="m-product">
                        <div class="u-product" v-for="(item, i) in recommend" :key="i">
                            <img :src="require(`/static/images/${item.icon}`)" class="u-img" />
                            <span class="u-desc">{{ item.name }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import scenes_programme from "@/assets/data/scenes_programme.json";
export default {
    props: {
        textKey: {
            type: String,
            default: "",
        },
    },
    computed: {
        data() {
            return scenes_programme[this.textKey] || "";
        },
        img() {
            return this.data.img || "";
        },
        scene() {
            return this.data.scene || "";
        },
        advantage() {
            return this.data.advantage || [];
        },
        recommend() {
            return this.data.recommend || [];
        },
    },
};
</script>
<style scope lang="less">
@import "~@/assets/css/scene/programme.less";
</style>
