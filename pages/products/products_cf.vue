<template>
    <div class="p-products">
        <!-- 1、banner -->
        <products-banner banner-key="cf"></products-banner>

        <!-- 2、了解云防火墙  -->
        <products-frame-text text-key="cf"></products-frame-text>

        <!-- 2、产品优势  -->
        <products-graphic-matrix matrix-key="cf" />

        <!-- 3、应用场景  -->
        <products-tabs :data="pmScene"></products-tabs>

        <!-- 4、功能描述  -->
        <products-pmDotCon :pmDotConTil="pmDotConTil01" :pmDotCon="pmDotCon01"></products-pmDotCon>
    </div>
</template>

<script>
export default {
    name: "products-CF",
    layout: "products",
    data() {
        return {
            // 应用场景
            pmScene: {
                index: 0,
                til: "应用场景",

                sceneClass: "m-Bms-scene",
                list: [
                    {
                        label: "外部入侵防御",
                        children: {
                            title: "场景介绍",
                            titletag: "通过云防火墙，对已开放公网访问的服务资产进行安全盘点，可一键开启入侵检测与防御",
                            src: "/images/products/products_cf/s1.svg",
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
                            src: "/images/products/products_cf/s2.svg",
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
                            src: "/images/products/products_cf/s3.svg",
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
                    img: "/images/products/products_cf/01-2x.png",
                },
                {
                    title: "主动外联管控",
                    desc: "支持云内资源的主动外联检测与封禁，协助客户判断恶意外连请求\n自动发现失陷主机，展示主机的主动外联数据，及时发现可疑主机",
                    img: "/images/products/products_cf/02-2x.png",
                },
                {
                    title: "入侵检测与防御",
                    desc: "入侵防御引擎对恶意流量实时检测和拦截，集成全网威胁情报，实现智能精准防护\n针对开放公网访问的资产，能够自动识别威胁暴露面，并支持一键开启防护",
                    img: "/images/products/products_cf/03-2x.png",
                },
                {
                    title: "日志审计&流量可视化",
                    desc: "全场景流量日志，报表分析呈现，支持审计及高级威胁溯源分析\n支持全网流量可视",
                    img: "/images/products/products_cf/04-2x.png",
                }
            ],
        }
    },
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";
</style>
