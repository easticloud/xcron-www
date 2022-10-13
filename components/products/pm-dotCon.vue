<template>
    <div class="pm-dotCon" :class="pmDotConClass">
        <div class="wp">
            <h2>{{pmDotConTil}}</h2>
            <div class="m-tabs">
                <div class="m-item" v-for="(item, i) in pmDotCon" :key="i"
                    :class="item.imgCss=='pic-l'?'pic-l':'pic-r'">
                    <!-- item.index % 2 == 0 ? 'pic-r' : 'pic-l' -->
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
export default {
    props: {
        pmDotCon: Array,
        pmDotConTil: String,
        pmDotConClass: String,
    },
    data() {
        return {

        };
    },
    methods: {
        // function1() {
        //     let t = this;
        //     t.pmDotCon.forEach((el, i) => {
        //         el.index = i;
        //         // console.log(el.index)
        //     })
        // },
    },
    mounted() {
        // let t = this;
        // t.function1();
    }
};
</script>

<style scope lang="less">
@import "../../assets/css/products/pm-dotCon.less";
</style>
