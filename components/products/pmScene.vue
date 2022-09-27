<template>
    <div class="m-p-scene">
        <div class="wp">
            <h2>场景介绍</h2>
            <div class="m-tabs">
                <div class="m-item" v-for="(item, i) in list" :key="i" :class="{active:index == i}" @click="change(i)">
                    <span class="u-label">{{ item.label }}</span>
                </div>
            </div>
            <div class="m-Scontent">
                <div class="m-item">
                    <span class="u-img" :style="`backgroundImage: url(${children.src})`"></span>
                    <span class="u-title">{{ children.title }}</span>
                    <div class="u-tags">
                        <template v-if="children.tag.length">
                            <span class="u-tag" v-for="(child, i) in children.tag" :key="i">{{ child }}</span>
                        </template>
                    </div>
                </div>
                <!-- <img class="u-img" v-if="children.src" :src="children.src" /> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: 0,
            list: [
                {
                    label: "数据中心",
                    children: {
                        title: "数据中心",
                        src: "/images/index/solution/01.svg",
                        tag: ["● 提供区域入侵检测，保护机房内部重要设备，提供安全可靠的运行环境", "● 提供烟火检测，实时识别区域内烟气、明火情况，及时告警", "● 提供安全帽、工装检测,自动识别区域内人员作业着装检测，对不符合要求的及时告警","● 提供人体骨骼关键点检测，在前端设备未抓取到人体正脸时，通过骨骼关键点及着装情况，分析人员","● 提供脱岗、摔倒检测，自动识别区域内人员状态，对脱岗及摔倒状态，及时告警"],
                    },
                },
                {
                    label: "智慧工地",
                    children: {
                        title: "智慧工地",
                        src: "/images/index/solution/01.svg",
                        tag: ["● 提供人员出入检测，智能识别出入人员", "● 提供升降梯人数识别，严控入梯人数，降低安全隐患", "● 提供人员聚集检测，当检测到人员异常聚集时，及时告警","● 提供玩手机识别，对区域内人员进行玩手机行为检测，并实时告警，保障安全生产","● 提供反光衣、灭火器检测，对区域内人员是否穿戴反光衣及区域内是否放置灭火器检测，防范安全事故"],
                    },
                },
            ],
        };
    },
    computed: {
        children() {
            return this.list[this.index].children;
        },
    },
    methods: {
        change(i) {
            this.index = i;
        },
    },
};
</script>

<style scope lang="less">
@import "../../assets/css/products/pmScene.less";
</style>
