<template>
    <div class="m-index-item m-index-scene">
        <div class="wp">
            <div class="m-title">
                <h2>易用、精选、一站式应用场景组合推荐</h2>
                <span class="u-desc">精选多款域名关联场景组合购</span>
            </div>
            <div class="m-tabs">
                <div class="m-item" v-for="(item, i) in list" :key="i" :style="`backgroundImage: url(${item.src})`">
                    <a :href="item.href" target="_blank" class="u-item">
                        <span class="u-line"></span>
                        <span class="u-title">
                            <img class="u-icon" :src="item.icon" />
                            <span>{{ item.title }}</span>
                        </span>
                        <span class="u-desc">{{ item.desc }}</span>
                    </a>
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
import { scene } from "@/assets/data/index.json";
export default {
    data() {
        return {};
    },
    computed: {
        list() {
            return scene;
        },
    },
};
</script>

<style scope lang="less">
@import "../../assets/css/index/scene.less";
</style>
