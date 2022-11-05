<template>
    <div class="m-scene-tabs">
        <div class="wp m-tabs-content">
            <div class="u-item" :class="active(i)" v-for="(item, i) in list" :key="i" @click="change(i)">
                {{ item }}
            </div>
        </div>
    </div>
</template>
<script>
import scenes_tabs from "@/assets/data/scenes_tabs.json";
export default {
    props: {
        textKey: {
            type: String,
            default: "",
        },
        index: {
            type: String || Number,
            default: "1",
        },
    },
    emits: ["change"],
    computed: {
        list() {
            return scenes_tabs[this.textKey] || [];
        },
    },
    methods: {
        change(i) {
            this.$emit("change", i);
        },
        active(i) {
            return this.index === i ? "active" : "";
        },
    },
};
</script>
<style scope lang="less">
@import "~@/assets/css/scene/tabs.less";
</style>
