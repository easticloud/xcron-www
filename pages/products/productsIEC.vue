<template>
    <div class="p-products">
        <!-- 公共头部 -->
        <common-header></common-header>

        <!-- 1、bannar -->
        <products-pmBanner :pmBanner="pmBanner"></products-pmBanner>

        <!-- 2、产品优势  -->
        <products-pmDotCon :pmDotConTil="pmDotConTil" :pmDotCon="pmDotCon"></products-pmDotCon>

        <!-- 3、应用场景  -->
        <products-pmScene :pmScene="pmScene"></products-pmScene>

        <!-- 4、功能描述  -->
        <products-pmDotCon :pmDotConTil="pmDotConTil01" :pmDotCon="pmDotCon01"></products-pmDotCon>

        <!-- 5、服务支持-->
        <products-pmService></products-pmService>

        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
import pmDotCon from '../../components/products/pm-dotCon.vue';
import pmBanner from '../../components/products/pmBanner.vue';
import pmScene from '../../components/products/pmScene.vue';
export default {
    name: "products-IEC",
    data() {
        return {
            // 智能边缘云-banner
            pmBanner: {
                title: "智能边缘云",
                desc: "智能边缘云（Intelligent EdgeCloud）部署在距离企业和热点用户区域更近的位置，具有与中心云一致的体验，为时延敏感型业务如互动娱乐、在线教育、媒体创作等提供低于10ms的时延体验，支持全局智能管理及调度。",
                img: "/images/products/productsIEC/b1.jpg",
            },
            // 产品优势
            pmDotConTil: "产品优势",//标题
            pmDotCon: [
                {
                    title: "广域覆盖",
                    desc: "基于覆盖中国大陆主要省市和主流运营商的优质节点资源进行部署，用户可以将时延敏感业务就近接入部署，保证确定性时延，提升业务体验",
                    img: "/images/products/productsIEC/01.svg",
                },
                {
                    title: "多样算力",
                    desc: "面向丰富的边缘业务场景，提供多样化的算力类型，用户可以根据业务要求选择合适的算力",
                    img: "/images/products/productsIEC/02.svg",
                },
                {
                    title: "卓越性能",
                    desc: "基于擎天架构打造，软硬结合提供卓越性能。单实例pps转发性能达千万级，提供昇腾AI加速型实例推理性能领先业界2倍",
                    img: "/images/products/productsIEC/03.svg",
                },
                {
                    title: "边云协同",
                    desc: "在提供核心的计算、存储、网络服务的基础上，与多种高阶云服务深度融合与协同，使客户可以更快的构建场景化的解决方案",
                    img: "/images/products/productsIEC/04.svg",
                },
            ],
            // 应用场景 
            pmScene: {
                index: 0,
                til: "应用场景",
                isShow: false,
                sceneClass: "m-Bms-scene",
                list: [
                    {
                        label: "互动直播",
                        children: {
                            title: "互动直播",
                            titletag: "互动直播场景将音视频转码、弹幕分发、内容审核等处理能力部署在边缘站点，可以显著提升业务处理质量，优化响应效率，降低流量成本。",
                            src: "/images/products/productsIEC/s1.svg",
                            tag: [
                                {
                                    tagTil: "· 多样算力",
                                    tagCon: "提供GPU、AI等多样化算力，提升高清转码、内容审核等场景处理的性价比",
                                },
                                {
                                    tagTil: "· 流量本地化",
                                    tagCon: "优化直播弹幕等大流量业务的成本",
                                },
                            ],
                        },
                    },
                    {
                        label: "在线教育",
                        children: {
                            title: "在线教育",
                            titletag: "在线教育场景为老师与学生提供实时互动的视频教育体验，需要在边缘侧提供区域间稳定互联的低时延通信链路，从而有效支撑师生间多点对多点实时互动。",
                            src: "/images/products/productsIEC/s2.svg",
                            tag: [
                                {
                                    tagTil: "· 边云网络",
                                    tagCon: "基于时延和丢包率实时探测的动态网络选路",
                                },
                                {
                                    tagTil: "· 广域覆盖",
                                    tagCon: "边缘节点覆盖中国大陆各主要区域",
                                },
                            ],
                        },
                    },
                    {
                        label: "应用加速",
                        children: {
                            title: "应用加速",
                            titletag: "应用加速场景如游戏加速、App加速等，需要根据端到端时延要求，选择靠近最终用户的边缘站点，并通过优化端到端的网络选路，降低端到端时延。",
                            src: "/images/products/productsIEC/s3.svg",
                            tag: [
                                {
                                    tagTil: "· 弹性扩展",
                                    tagCon: "资源按需使用，批量业务创建，有效应对业务的突发增量需求",
                                },
                                {
                                    tagTil: "· 高效运维",
                                    tagCon: "多站点资源的统一管理，基于API的服务管控和监控运维",
                                },
                            ],
                        },
                    },
                    {
                        label: "自建CDN",
                        children: {
                            title: "自建CDN",
                            titletag: "前互联网企业或服务商自建CDN网络时，大多采取租赁IDC的模式，需要建设和维护遍布多地域的大量站点。边缘云服务提供覆盖中国大陆的边缘算力网络，以及全局管理和自动化运维能力，帮助用户快速搭建和维护CDN网络。",
                            src: "/images/products/productsIEC/s4.svg",
                            tag: [
                                {
                                    tagTil: "· 广域覆盖",
                                    tagCon: "遍布中国大陆各主要地域和省市的站点布局",
                                },
                                {
                                    tagTil: "· 高性价比",
                                    tagCon: "提供内容分发场景所需的含NVMe的高性能本地存储型实例",
                                },
                            ],
                        },
                    },
                ],
            },
            // 功能描述
            pmDotConTil01: "功能描述",//标题
            pmDotCon01: [
                {
                    title: "边缘算力",
                    desc: "提供C6系列高性能通用算力、G5系列GPU算力、Ai系列AI推理算力、D3系列存储型算力，满足边缘业务当前和持续演进的业务需求",
                    img: "/images/products/productsIEC/05.png",
                },
                {
                    title: "边缘网络",
                    desc: "提供VPC、子网、网络ACL、安全组、虚IP、EIP等完善的边缘网络能力，方便客户进行灵活网络的方案配置和管理",
                    img: "/images/products/productsIEC/06.png",
                },
                {
                    title: "统一管理",
                    desc: "一站式实现分布式多节点业务的统一创建、更新、伸缩、运维等管理操作",
                    img: "/images/products/productsIEC/07.png",
                },
                {
                    title: "批量部署",
                    desc: "分钟级完成批量化边缘业务的自动部署",
                    img: "/images/products/productsIEC/08.png",
                },
                {
                    title: "高效运维",
                    desc: "功能全面的服务控制台和API接口，方便管理边缘资源，实时查阅运维监控指标",
                    img: "/images/products/productsIEC/09.png",
                },
                {
                    title: "安全可靠",
                    desc: "高可用、高容错的边缘计算平台，算力和网络实现多租户安全隔离",
                    img: "/images/products/productsIEC/10.png",
                },
            ],
        }
    },
    components: {
        pmBanner,
        pmDotCon,
        pmScene
    }
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";
</style>
