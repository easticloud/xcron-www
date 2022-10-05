<template>
    <div class="p-products">
        <!-- 公共头部 -->
        <common-header></common-header>

        <!-- 1、数据接入服务bannar -->
        <products-pmBanner :pmBanner="pmBanner"></products-pmBanner>

        <!-- 2、产品优势  -->
        <products-pmDotCon :pmDotConTil="pmDotConTil" :pmDotCon="pmDotCon"></products-pmDotCon>

        <!-- 3、应用场景  -->
        <products-pmScene :pmScene="pmScene"></products-pmScene>

        <!-- 4、功能描述  -->
        <products-pmDotCon :pmDotConTil="pmDotConTil01" :pmDotCon="pmDotCon01"></products-pmDotCon>

        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
import pmDotCon from '../../components/products/pm-dotCon.vue';
import pmBanner from '../../components/products/pmBanner.vue';
import pmScene from '../../components/products/pmScene.vue';
export default {
    name: "products-DIS",
    data() {
        return {
            // 数据接入服务-banner
            pmBanner: {
                title: "数据接入服务",
                desc: "数据接入服务（Data Ingestion Service，简称DIS）可让您轻松收集、处理和分发实时流数据，以便您对新信息快速做出响应。DIS对接多种第三方数据采集工具，提供丰富的云服务Connector及Agent/SDK。适用于IoT、互联网、媒体等行业的设备监控、实时推荐、日志分析等场景。",
            },
            // 产品优势
            pmDotConTil: "产品优势",//标题
            pmDotCon: [
                {
                    title: "高效传输",
                    desc: "实时收集各种数据。支持百万并发连接，数据请求毫秒级响应。单分区支持最高每日百GB级别的写入量。轻松实现传输通道规格扩容",
                    img: "/images/products/productsDIS/01.svg",
                },
                {
                    title: "简单易用",
                    desc: "服务秒级开通。用户配置SDK/Agent实现免编程数据采集，快速实现数据采集、传输",
                    img: "/images/products/productsDIS/02.svg",
                },
                {
                    title: "安全可靠",
                    desc: "HTTPS加密传输。租户间资源及操作隔离，实现租户访问权限控制，保护系统和用户的隐私及数据安全。数据跨AZ存储，服务可用性99.9%",
                    img: "/images/products/productsDIS/03.svg",
                },
                {
                    title: "无忧运维",
                    desc: "服务秒级开通。用户配置SDK/Agent实现免编程数据采集，快速实现数据采集、传输",
                    img: "/images/products/productsDIS/03.svg",
                },
            ],
            // 应用场景 
            pmScene: {
                products: 0,
                til: "应用场景",
                isShow: false,
                sceneClass: "m-Bms-productsDIS",
                list: [
                    {
                        label: "实时数据处理",
                        children: {
                            title: "实时数据处理",
                            titletag: "实时收集数据，缓存在通道中，分析平台实时或周期读取通道中的数据分析后将结果应用到业务系统，例如对实时采集城市各交通枢纽的车辆通行数据，基于分析可实现对停车场开放时长和交通资源的调配",
                            src: "/images/products/productsDIS/1.svg",
                            tag: [
                                {
                                    tagTil: "· 永久在线",
                                    tagCon: "业务系统随时随地发送数据到DIS",
                                },
                                {
                                    tagTil: "· 高并发、低延时",
                                    tagCon: "支持百万并发消息，端到端时延低至毫秒级",
                                },
                                {
                                    tagTil: "· 生态完善",
                                    tagCon: "支持对接各分析平台，数据传输、计算一站式处理",
                                },
                            ],
                        },
                    },
                    {
                        label: "实时文件传输",
                        children: {
                            title: "实时文件传输",
                            titletag: "实时检测客户应用系统中产生的日志文件，并采集上传到云上，进行离线分析、存储查询及机器学习，可应用于日志分析、用户画像、营销推荐等场景。",
                            src: "/images/products/productsDIS/2.svg",
                            tag: [
                                {
                                    tagTil: "· 自动捕获增量数据",
                                    tagCon: "支持自动采集文件中的增量数据或新增文件",
                                },
                                {
                                    tagTil: "· 简单易用",
                                    tagCon: "提供不同平台Agent，简单配置，即可实现数据采集",
                                },
                                {
                                    tagTil: "· 安全可靠",
                                    tagCon: "传输过程使用https加密，保障数据安全传输",
                                },
                            ],
                        },
                    },
                    {
                        label: "数据接入备份",
                        children: {
                            title: "数据接入备份",
                            titletag: "将大量滚动日志文件传输到云端做备份，用于数据丢失或异常后的恢复和故障分析。同时大量小文本文件可合并转储为大文件，提高数据处理性能",
                            src: "/images/products/productsDIS/3.svg",
                            tag: [
                                {
                                    tagTil: "· 多种数据源支持",
                                    tagCon: "对接kafka、flume等开源系统，易于集成",
                                },
                                {
                                    tagTil: "· 数据传输高效",
                                    tagCon: "通道入口带宽可调整，传输能力有保障",
                                },
                                {
                                    tagTil: "· 海量小文件传输",
                                    tagCon: "小文件搬迁上云，原文件转储到对象存储",
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
                    title: "数据采集",
                    desc: "RestAPI、SDK、Agent对接多种数据源，线上线下数据实时采集",
                    img: "/images/products/productsDIS/01.png",
                },
                {
                    title: "数据传输",
                    desc: "实时数据高并发、低延时、高可靠传输",
                    img: "/images/products/productsDIS/02.png",
                },
                {
                    title: "数据处理",
                    desc: "预置数据抽取、汇聚、格式转换等Connector(处理算子)，对用户输入数据做预处理",
                    img: "/images/products/productsDIS/03.png",
                },
                {
                    title: "数据缓存",
                    desc: "实时数据缓存1-3天，保证实时数据消费可靠性",
                    img: "/images/products/productsDIS/04.png",
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
