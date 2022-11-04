<template>
    <div class="p-scene">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 行业场景 -->
        <div class="m-industry-scene">
            <Header :data="header" />
            <Tabs :data="tabs" :index="tabsIndex" @change="changeTab" />
            <div class="wp m-industry-content m-scene-content">
                <Business :data="current.business" v-if="current.business" />
                <Programme :data="current.programme" v-if="current.programme" />
                <Recommend :data="current.recommend" v-if="current.recommend" />
            </div>
        </div>
        <!-- 服务支持 -->
        <products-pmService></products-pmService>
        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>
<script>
import Header from "@/components/scenes/header";
import Tabs from "@/components/scenes/tabs";
import Business from "@/components/scenes/business";
import Programme from "@/components/scenes/programme";
import Recommend from "@/components/scenes/recommend";
export default {
    components: { Header, Tabs, Business, Programme, Recommend },
    data() {
        return {
            header: {
                type: "industry",
                title: "行业应用场景专区",
                desc: "从电商、娱乐媒体、医疗行业维度出发，基于行业内的业务痛点，业务场景；为用户提供相应的爆款产品、产品组合购；更多行业持续更新中",
                link: "",
            },
            tabs: ["娱乐媒体", "电商行业", "医疗健康"],
            tabsIndex: 0,
            content: [
                // 娱乐媒体
                {
                    business: {
                        list: [
                            {
                                icon: require("/static/images/scene/industry/1-1.svg"),
                                title: "网络延迟大",
                                desc: "同地域用户访问质量不同，访问质量依赖于访问地域位置",
                            },
                            {
                                icon: require("/static/images/scene/industry/1-2.svg"),
                                title: "技术门槛高",
                                desc: "技术上涉及分布式存储、分布式计算、视频编解码技术、视频加密、CDN分发等多个技术栈,竞争对手新功能上线快，技术投入成本高,新技术快速演进，视频功能丰富不够，内容审核成本高",
                            },
                            {
                                icon: require("/static/images/scene/industry/1-3.svg"),
                                title: "画质要求高",
                                desc: "不同用户要求不同的画质，编解码消耗巨大的计算资源成本",
                            },
                        ],
                    },
                    programme: {
                        img: require("/static/images/scene/industry/media.png"),
                        scene: "一站式解决方案，可以解决“网络不稳定拥塞、单线源站、突发流量等因素”导致的响应慢、丢包、服务不稳定等问题，实现用户体验的飞跃提升。",
                        advantage: [
                            { title: "稳定极速", desc: "2800+全球节点，150T带宽资源，六大洲覆盖，国内主流运营商支持" },
                            {
                                title: "高效智能",
                                desc: "加速方案更智能，多种分发策略，边缘缓存、较优路由、压缩传输，访问效率提升60%",
                            },
                            {
                                title: "便携接入",
                                desc: "站点无需动静态内容拆分加速，一键接入解决网络拥塞，提高访问成功率",
                            },
                        ],
                        recommend: [
                            {
                                icon: require("/static/images/scene/industry/quicken.svg"),
                                name: "全站加速",
                            },
                        ],
                    },
                    recommend: {
                        desc: "基于实际业务场景，为您精心推荐的爆款产品、产品组合购买",
                        list: [
                            {
                                title: "游戏出海加速",
                                desc: "随之而来的跨国游戏 服务会带来游戏时延高、登陆困难、经常掉线等 游戏体验差的问题，全球同服成为了出海游戏加 速的刚需。出海游戏如何提供稳定访问能力、灵 活快速构建多地域就近访问游戏服服务器、游戏 资源内容安全分发下载能力是出海游戏厂商需 要具备的核心技术能力。",
                            },
                        ],
                    },
                },
                // 电商行业
                {
                    business: {
                        list: [
                            {
                                icon: require("/static/images/scene/industry/2-1.svg"),
                                title: "消息成功触达得不到保障",
                                desc: "订单，物流，交易等信息，需要实时通知到用户和消费者，如何保证消息准确送达",
                            },
                            {
                                icon: require("/static/images/scene/industry/2-2.svg"),
                                title: "流量洪峰",
                                desc: "秒杀，抢购，等业务带来的超高流量洪峰，让系统不堪重负，停机掉线，带来巨大损失",
                            },
                            {
                                icon: require("/static/images/scene/industry/2-3.svg"),
                                title: "运维管理复杂",
                                desc: "不同业务单元之间的资源分配，不同时段的弹性扩缩容带来巨大挑战",
                            },
                        ],
                    },
                    programme: {
                        img: require("/static/images/scene/industry/commerce.png"),
                        scene: "灵活且具备弹性的系统部署的基础架构，可以充分应对大促期间高并发时带来的种种问题。可灵活扩容，缩容。具备平日运营成本可控，大促短时扩容的能力，对比传统按峰值规划的系统可大幅降低成本。",
                        advantage: [
                            {
                                title: "分钟级扩缩容",
                                desc: "前端应用实现分钟级扩缩容，可根据流量情况自动化适配需要的计算资源。",
                            },
                            {
                                title: "数据库扩容",
                                desc: "通过读写分离能力，实现只读业务的线性扩容，并大幅提升OLTP业务的并发承载能力。",
                            },
                            {
                                title: "多级缓存",
                                desc: "通过缓存数据与消息队列，实现应用解耦与多级缓存，降低核心业务的负载压力，保障系统平稳运行。",
                            },
                            {
                                title: "监控与流控",
                                desc: "实时的系统性能监控大盘，系统健康状态了然于胸，轻松接入流控模块，确保流量安全可控。",
                            },
                            {
                                title: "端到端压测",
                                desc: "提供从网络层到后端服务的端到端压测能力，系统容量一清二楚。",
                            },
                        ],
                        recommend: [
                            {
                                icon: require("/static/images/scene/industry/quicken.svg"),
                                name: "全站加速",
                            },
                        ],
                    },
                    recommend: {
                        desc: "基于实际业务场景，为您精心推荐的爆款产品、产品组合购买",
                        list: [
                            {
                                title: "云上高并发Web架构",
                                desc: "云上高并发Web架构和云产品选择，阐述资源弹性、应用监测、性能评估、流量防护、故障演练等的部署与应用。",
                            },
                            {
                                title: "云上高并发系统改造",
                                desc: "在水平扩展阶段通过SLB挂nginx增加负载均衡扩展性，在数据库拆分阶段通过DRDS进行分库分表。",
                            },
                        ],
                    },
                },
                // 医疗健康
                {
                    business: {
                        list: [
                            {
                                icon: require("/static/images/scene/industry/3-1.svg"),
                                title: "本地机房稳定性差",
                                desc: "线上药铺要求7X24小时提供服务，对稳定性要求极高",
                            },
                            {
                                icon: require("/static/images/scene/industry/3-2.svg"),
                                title: "多分支专线接入成本高",
                                desc: "大量分支门店通过专线连接中心机构，每年支付高昂网络费用",
                            },
                            {
                                icon: require("/static/images/scene/industry/3-3.svg"),
                                title: "云上云下互联网络复杂",
                                desc: "专线，VPN方案都会带来复杂的网络规划",
                            },
                        ],
                    },
                    programme: {
                        img: require("/static/images/scene/industry/health.png"),
                        scene: "通过云上的弹性扩容能力，高效应对放号高峰频繁查询和预约抢号带来的高并发峰值，保障系统稳定性，带来较佳的用户体验。",
                        advantage: [
                            {
                                title: "超强弹性",
                                desc: "分钟级弹性可支持应用服务器随业务增加扩展。避免系统宕机。",
                            },
                            {
                                title: "超强稳定",
                                desc: "高可靠性的应用服务架构于数据库服务，确保应用环境多重备份，保障稳定。",
                            },
                            {
                                title: "多级缓存",
                                desc: "多种缓存技术充分降低数据库压力。确保数据库服务的可用性。",
                            },
                        ],
                        recommend: [
                            {
                                icon: require("/static/images/scene/industry/server.svg"),
                                name: "弹性云服务器",
                            },
                        ],
                    },
                    recommend: {
                        desc: "基于实际业务场景，为您精心推荐的爆款产品、产品组合购买",
                        list: [
                            {
                                title: "云上高并发Web架构",
                                desc: "云上高并发Web架构和云产品选择，阐述资源弹性、应用监测、性能评估、流量防护、故障演练等的部署与应用。",
                            },
                            {
                                title: "云上高并发系统改造",
                                desc: "在水平扩展阶段通过SLB挂nginx增加负载均衡扩展性，在数据库拆分阶段通过DRDS进行分库分表。",
                            },
                        ],
                    },
                },
            ],
        };
    },
    computed: {
        current() {
            return this.content[this.tabsIndex];
        },
    },
    methods: {
        changeTab(i) {
            this.tabsIndex = i;
        },
    },
};
</script>
<style lang="less">
@import "~@/assets/css/scene/index.less";
</style>
