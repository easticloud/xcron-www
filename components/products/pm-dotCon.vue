<template>
    <div class="pm-dotCon" :class="pmDotConClass">
        <div class="wp">
            <h2>{{pmDotConTil}}</h2>
            <div class="m-tabs">
                <div class="m-item" v-for="(item, i) in newData" :key="i"
                    :class="item.index % 2 == 0 ? 'pic-r' : 'pic-l'">
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
    computed: {
        newData() {
            return this.pmDotCon.map((item, i) => {
                item.index = i + 1;
                return item;
            })
        }
    }
};
</script>

<style scope lang="less">
@import "../../assets/css/products/pm-dotCon.less";
</style>
