<template>
    <div class="pm-dotCon" :class="customClass">
        <div class="wp">
            <h2>{{ data.title }}</h2>
            <div class="m-tabs">
                <div
                    class="m-item"
                    v-for="(item, i) in data.children"
                    :key="i"
                    :class="(i + 1) % 2 == 0 ? 'pic-r' : 'pic-l'"
                >
                    <span class="u-pic" :style="`backgroundImage: url(${item.img})`"></span>
                    <div class="u-con">
                        <span class="u-title">
                            <span>{{ item.title }}</span>
                        </span>
                        <span class="u-desc">{{ item.desc }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { matrix } from "@/assets/data/product.json";
export default {
    name: "graphicMatrix",
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
        },
    },
};
</script>

<style scope lang="less">
@import "../../assets/css/products/pm-dotCon.less";
</style>
