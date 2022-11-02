<template>
    <div class="m-p-aboutBCS" :class="customClass">
        <div class="wp">
            <h2>{{ data.title }}</h2>
            <div class="m-bcs">
                <p v-for="(item, index) in data.children" :key="index">
                    <span>{{ item.title }}</span>
                    <span class="tags">{{ item.desc }}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import frame_text from "@/assets/data/product_frame_text.json";
export default {
    props: {
        textKey: {
            type: String,
            default: "bcs",
        },
        customClass: String,
    },
    computed: {
        data() {
            return frame_text[this.textKey];
        },
    },
};
</script>

<style scope lang="less">
@import "../../assets/css/products/pAboutBCS.less";
</style>
