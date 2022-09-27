<template>
    <div class="m-p-Sceneuse1">
        <div class="wp">
            <h2>场景使用</h2>
            <div class="m-Scontent">
                <div class="m-item">
                    <span class="u-img" :style="`backgroundImage: url(${Sceneuse.imgSrc})`"></span>
                    <span class="u-title">{{ Sceneuse.title }}</span>
                    <div class="u-content" v-for="item in Sceneuse.list" :key="item">
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
    data() {
        return {
            Sceneuse: {
                title: "跨地域电子票据",
                imgSrc: "/images/index/solution/01.svg",
                list: [
                    {
                        til: "解决数据孤岛",
                        desc: "随着区块链生态的发展，不同地市税局提出不同区块链解决方案，产生基于不同架构，安全算法等一系列区块链联盟。如何保证在跨链传递过程中数据的真实性，事务的一致性，不让单链成为限制发票全生命周期流转的限制，是需要解决的问题。",
                    },
                    {
                        til: "提升客户价值",
                        desc: "通过跨链服务，能够安全可信地进行区块链之间的数据流通，全生命周期追踪发票信息，保证税务开票实时性，避免虚开发票场景，提升数据时效性。",
                    },
                    {
                        til: "方便易用接入门槛低",
                        desc: "提供可视化平台大幅降低用户接入门槛。用户可通过可视化界面操作完成不同区块链之间的对接，快速实现跨链业务。",
                    },
                ],
            },
        };
    },
    computed: {

    },
    methods: {

    },
};
</script>

<style scope lang="less">
@import "../../assets/css/products/pmSceneUse1.less";
</style>
