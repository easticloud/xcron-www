<template>
    <div class="m-page-search">
        <div>
            <el-input placeholder="搜索" v-model="input1">
                <template slot="prepend">Http://</template>
            </el-input>
            <span class="u-button"></span>
        </div>
    </div>
</template>

<script>
import page_picture_text from "@/assets/data/page_picture_text.json";
export default {
    props: {
        textKey: {
            type: String,
            default: "",
        },
    },
    data: function () {
        return {
            search: "",
        };
    },
    computed: {
        data() {
            return page_picture_text[this.textKey] || "";
        },
    },
    methods: {},
};
</script>
<style scope lang="less">
@import "~@/assets/css/page/search.less";
</style>
