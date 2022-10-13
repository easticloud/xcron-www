<template>
    <div class="p-products">
        <!-- 公共头部 -->
        <common-header></common-header>

        <!-- 1、bannar -->
        <products-pmBanner :pmBanner="pmBanner"></products-pmBanner>

        <!-- 2、了解云防火墙  -->
        <products-pAboutBCS :pAboutBCSTil="pAboutBCSTil" :pAboutBCS="pAboutBCS"></products-pAboutBCS>

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
import pAboutBCS from '../../components/products/pAboutBCS.vue';
import pmScene from '../../components/products/pmScene.vue';
export default {
    name: "products-CF",
    data() {
        return {
            // 云防火墙-banner
            pmBanner: {
                title: "云防火墙",
                desc: "云防火墙服务（Cloud Firewall）是新一代的云原生防火墙，提供云上互联网边界和VPC边界的防护，包括：实时入侵检测与防御，全局统一访问控制，全流量分析可视化，日志审计与溯源分析等，同时支持按需弹性扩容，是用户业务上云的网络安全防护基础服务。",
                img: "/images/products/productsCF/b1.jpg",
            },
            // 了解云防火墙
            pAboutBCSTil: "云防火墙",
            pAboutBCS: [
                {
                    til: "安全",
                    desc: "提高内部网络的安全性",
                },
                {
                    til: "可视",
                    desc: "对网络存取和访问进行监控审计",
                },
                {
                    til: "极简",
                    desc: "一键开通，安全策略无缝平移",
                },
            ],
            // 产品优势
            pmDotConTil: "产品优势",//标题
            pmDotCon: [
                {
                    title: "极简部署",
                    desc: "作为一款云原生SaaS服务，可以对公网资产、内部资产自动安全盘点，一键开启防护，支持原有安全策略一键导入，可随业务按需动态扩容。",
                    img: "/images/products/productsCF/1-2x.png",
                },
                {
                    title: "智能防护",
                    desc: "集成全网威胁漏洞库，并通过自带的入侵防御引擎（IPS），对恶意流量进行实时检测和防御。",
                    img: "/images/products/productsCF/2-2x.png",
                },
                {
                    title: "可视可溯",
                    desc: "全场景流量日志、访问日志、入侵攻击日志记录，并通过报表分析呈现，支持审计及高级威胁溯源分析。",
                    img: "/images/products/productsCF/3-2x.png",
                },
                {
                    title: "丰富生态",
                    desc: "支持无缝集成第三方厂家威胁检测分析引擎，云上云下统一生态，客户原线下安全策略资产无缝平移。",
                    img: "/images/products/productsCF/4-2x.png",
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
                        label: "外部入侵防御",
                        children: {
                            title: "场景介绍",
                            titletag: "通过云防火墙，对已开放公网访问的服务资产进行安全盘点，可一键开启入侵检测与防御",
                            src: "/images/index/solution/01.svg",
                            tag: [
                                {
                                    tagTil: "· 公网资产自动盘点",
                                    tagCon: "针对开放公网访问的资产，能够自动识别威胁暴露面，并支持一键开启防护",
                                },
                                {
                                    tagTil: "· 智能防护",
                                    tagCon: "集成全网威胁漏洞库，实现智能精准防护",
                                },
                            ],
                        },
                    },
                    {
                        label: "主动外联管控",
                        children: {
                            title: "场景介绍",
                            titletag: "云防火墙支持基于域名的访问控制，可对主动外联行为进行精准管控",
                            src: "/images/index/solution/01.svg",
                            tag: [
                                {
                                    tagTil: "· 外联行为全记录",
                                    tagCon: "针对所有主动对外的连接，进行相关日志记录",
                                },
                                {
                                    tagTil: "· 智能分析与防护",
                                    tagCon: "集成全网威胁漏洞库，对主动外联行为进行分析，评估主机失陷风险状态，并对恶意连接行为进行实时阻断，保护资产安全",
                                },
                            ],
                        },
                    },
                    {
                        label: "VPC间互访控制",
                        children: {
                            title: "场景介绍",
                            titletag: "云防火墙支持VPC间流量的访问控制，实现内部业务互访活动的可视化与安全防护",
                            src: "/images/index/solution/01.svg",
                            tag: [
                                {
                                    tagTil: "· 智能防护",
                                    tagCon: "通过云防火墙实现VPC间流量微隔离，支持VPC间业务系统的访问控制，并对恶意访问进行识别和拦截",
                                },
                                {
                                    tagTil: "· 可视可溯",
                                    tagCon: "内部业务系统之间的互访活动可以记录，并分析展示，支持审计及高级溯源分析",
                                },
                            ],
                        },
                    },
                ],
            },
            // 功能描述
            pmDotConTil01: "功能特性",//标题
            pmDotCon01: [
                {
                    title: "细粒度访问控制",
                    desc: "支持全向流量访问控制，实时入侵防御等功能\n提供Internet流量访问控制、细粒度访问控制、VPC间流量的访问控制",
                    img: "/images/products/productsCF/01-2x.png",
                },
                {
                    title: "主动外联管控",
                    desc: "支持云内资源的主动外联检测与封禁，协助客户判断恶意外连请求\n自动发现失陷主机，展示主机的主动外联数据，及时发现可疑主机",
                    img: "/images/products/productsCF/02-2x.png",
                },
                {
                    title: "入侵检测与防御",
                    desc: "入侵防御引擎对恶意流量实时检测和拦截，集成全网威胁情报，实现智能精准防护\n针对开放公网访问的资产，能够自动识别威胁暴露面，并支持一键开启防护",
                    img: "/images/products/productsCF/03-2x.png",
                },
                {
                    title: "日志审计&流量可视化",
                    desc: "全场景流量日志，报表分析呈现，支持审计及高级威胁溯源分析\n支持全网流量可视",
                    img: "/images/products/productsCF/04-2x.png",
                }
            ],
        }
    },
    components: {
        pmBanner,
        pmDotCon,
        pmScene,
        pAboutBCS
    }
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";
</style>
