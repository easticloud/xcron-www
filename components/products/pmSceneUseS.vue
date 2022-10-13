<template>
    <div class="m-p-SceneuseS">
        <div class="wp">
            <h2>{{pmSceneUseSTil}}</h2>
            <div class="m-Scontent">
                <div class="m-item" :class="pmSceneUseS.imgR">
                    <span class="u-img" :style="`backgroundImage: url(${pmSceneUseS.imgSrc})`"></span>
                    <span class="u-title"><b>{{ pmSceneUseS.title }}</b>{{pmSceneUseS.titletag}}</span>
                    <div class="u-content" v-for="(item,uindex) in pmSceneUseS.list" :key="uindex">
                        <span class="u-til">{{item.til}}</span>
                        <span class="u-desc">{{item.desc}}</span>
                    </div>
                </div>
            </div>
            <div class="m-Scontent" v-if="pmSceneUseSTrue">
                <div class="m-item">
                    <span class="u-img" :style="`backgroundImage: url(${pmSceneUseS01.imgSrc})`"></span>
                    <span class="u-title"><b>{{ pmSceneUseS01.title }}</b>{{pmSceneUseS01.titletag}}</span>
                    <div class="u-content" v-for="(item,uindex) in pmSceneUseS01.list" :key="uindex">
                        <span class="u-til">{{item.til}}</span>
                        <span class="u-desc">{{item.desc}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        pmSceneUseS: Object,
        pmSceneUseSTil: String,
        pmSceneUseSTrue: Boolean,
        pmSceneUseS01: Object
    },
    data() {
        return {

        };
    },
    computed: {

    },
    methods: {

    },
};
</script>

<style scope lang="less">
@import "../../assets/css/products/pmSceneUseS.less";
</style>
