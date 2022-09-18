<template>
    <div class="m-index-item m-index-scene">
        <div class="wp">
            <div class="m-title">
                <h2>易用、精选、一站式应用场景组合推荐</h2>
                <a href="" target="_blank" class="u-desc">精选多款域名关联场景组合购</a>
            </div>
            <div class="m-tabs">
                <div class="m-item" v-for="(item, i) in list" :key="i" :style="`backgroundImage: url(${item.src})`">
                    <span class="u-title">
                        <img class="u-icon" :src="item.icon" />
                        <span>{{ item.title }}</span>
                    </span>
                    <span class="u-desc">{{ item.desc }}</span>
                </div>
            </div>
        </div>
        <div class="m-content">
            <div class="wp">
                <div class="m-box m-left">
                    <div class="m-list">
                        <span class="u-item">7*24h专业服务</span>
                        <span class="u-item">业务故障 双倍赔偿</span>
                        <span class="u-item">0元试用7天</span>
                        <span class="u-item">1V1大客户专享服务</span>
                    </div>
                    <div class="m-btn">
                        <span class="u-btn">安全中心</span>
                        <span class="u-btn red">数据保障</span>
                    </div>
                </div>
                <div class="m-box m-right">
                    <span class="u-title">[稳定·可靠·安全]真正实现<b>降本提效</b></span>
                    <div class="m-item">
                        <div class="u-item">
                            <span class="u-num"><b>99.9999</b>%</span>
                            <span class="u-desc">数据可靠性</span>
                        </div>
                        <div class="u-item">
                            <span class="u-num"><b>99.9995</b>%</span>
                            <span class="u-desc">业务可靠性</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [
                {
                    title: "热门场景",
                    desc: "精选热门业务场景，为您推荐爆款产品组合购。",
                    src: "/images/index/scene/01.svg",
                    icon: "/images/index/scene/icon-1.svg",
                },
                {
                    title: "企业场景",
                    desc: "为企业提供多场景、一站式上云服务，满足企业各发展阶段的需求，为您推荐场景组合购",
                    src: "/images/index/scene/02.svg",
                    icon: "/images/index/scene/icon-2.svg",
                },
                {
                    title: "通用场景",
                    desc: "为各个行业企业提供通用的场景方案，助力开展云上业务，降本提效。",
                    src: "/images/index/scene/03.svg",
                    icon: "/images/index/scene/icon-3.svg",
                },
                {
                    title: "行业场景",
                    desc: "从行业维度出发，基于行业内的业务痛点，业务场景，为用户提供相应的场景组合购买推荐",
                    src: "/images/index/scene/04.svg",
                    icon: "/images/index/scene/icon-4.svg",
                },
            ],
        };
    },
    computed: {},
    methods: {},
};
</script>

<style scope lang="less">
@import "../../assets/css/index/scene.less";
</style>
