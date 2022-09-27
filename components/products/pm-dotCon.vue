<template>
    <div class="pm-dotCon" :class="pmDotConClass">
        <div class="wp">
            <h2>{{pmDotConTil}}</h2>
            <div class="m-tabs">
                <div class="m-item" v-for="(item, i) in pmDotCon" :key="i">
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
        pmDotCon:Array,
        pmDotConTil:String,
        pmDotConClass:String,
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
@import "../../assets/css/products/pm-dotCon.less";
</style>
