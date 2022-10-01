<template>
    <div class="m-p-pInfo">
        <div class="wp">
            <h2>{{pmPInfoTil}}</h2>
            <div class="infoImg"><img :src=pmPInfoImg alt=""></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        pmPInfoTil: String,
        pmPInfoImg: String
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
@import "../../assets/css/products/pmPInfo.less";
</style>
