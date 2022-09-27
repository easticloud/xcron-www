<template>
    <div class="m-p-aboutBCS" :class="pAboutBCSClass">
        <div class="wp">
            <h2>{{pAboutBCSTil}}</h2>
            <div class="m-bcs">
                <p v-for="item in pAboutBCS" :key="item">
                    <span>{{item.til}}</span>
                    <span class="tags">{{item.desc}}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        pAboutBCS:Array,
        pAboutBCSTil:String,
        pAboutBCSClass:String
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
@import "../../assets/css/products/pAboutBCS.less";
</style>
