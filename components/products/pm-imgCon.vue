<template>
    <div class="m-imgCon" :class="pmImgConClass">
        <div class="wp">
            <h2>{{pmImgConTil}}</h2>
            <div class="m-tabs">
                <div class="m-item" v-for="(item, i) in pmImgCon" :key="i">
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
export default {
    props:{
        pmImgConTil:String,
        pmImgCon:Array,
        pmImgConClass:String,
    },
    data() {
        return {
            
        };
    },
    methods: {

    },
};
</script>

<style scope lang="less">
@import "../../assets/css/products/pm-imgCon.less";
</style>
