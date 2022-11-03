<template>
    <div class="m-imgCon" :class="customClass">
        <div class="wp">
            <h2>{{ data.title }}</h2>
            <div class="m-tabs">
                <div class="m-item" v-for="(item, i) in data.children" :key="i">
                    <span class="u-pic" :style="`backgroundImage: url(${item.img})`"></span>
                    <span class="u-title">
                        <span>{{ item.title }}</span>
                    </span>
                    <span class="u-desc">{{ item.desc }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import matrix from "@/assets/data/product_vertical_matrix.json";
export default {
    props: {
        matrixKey: {
            type: String,
            default: "",
        },
        customClass: {
            type: String,
            default: "",
        },
    },
    computed: {
        data() {
            return matrix[this.matrixKey] || {};
        }
    }
};
</script>

<style scope lang="less">
@import "../../assets/css/products/pm-imgCon.less";
</style>
