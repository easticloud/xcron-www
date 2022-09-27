<template>
    <div class="m-p-sceneUse">
        <div class="wp">
            <h2>场景使用</h2>
            <div class="m-Scontent">
                <div class="m-item">
                    <span class="u-img" :style="`backgroundImage: url(${sceneUse.src})`"></span>
                    <span class="u-title">{{ sceneUse.title }}</span>
                    <div class="u-tags">
                        <template v-if="sceneUse.tag.length">
                            <span class="u-tag" v-for="(child, i) in sceneUse.tag" :key="i">{{ child }}</span>
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
            sceneUse:{
                title: "任何基于UAI-Inference支持的深度学习框架编写的人工智能预测程序。如：",
                    src: "/images/index/solution/01.svg",
                    tag: ["● 视频图像识别", "● 自然语言处理", "● 语音处理"],
            },
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
                        title: "任何基于UAI-Inference支持的深度学习框架编写的人工智能预测程序。如：",
                        src: "/images/index/solution/01.svg",
                        tag: ["● 视频图像识别", "● 自然语言处理", "● 语音处理"],
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
@import "../../assets/css/products/pmSceneUse.less";
</style>
