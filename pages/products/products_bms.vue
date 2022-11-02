<template>
    <div class="p-products">
        <!-- 1、banner -->
        <products-banner banner-key="bms"></products-banner>

        <!-- 2、了解裸金属服务器  -->
        <products-frame-text text-key="bms" custom-class="m-p-ECS"></products-frame-text>

        <!-- 3、产品优势  -->
        <products-graphic-matrix matrix-key="bms_x" custom-class="ecs-dotcon" />

        <!-- 4、擎天架构，为裸金属提供业界领先技术支撑 -->
        <products-pmPInfo :pmPInfoTil="pmPInfoTil" :pmPInfoImg="pmPInfoImg"></products-pmPInfo>

        <!-- 5、应用场景  -->
        <products-pmScene :pmScene="pmScene"></products-pmScene>
    </div>
</template>

<script>
export default {
    name: "products-BMS",
    layout: "products",
    data() {
        return {
            // 技术支撑
            pmPInfoTil: "擎天架构，为裸金属提供业界领先技术支撑",//标题
            pmPInfoImg: "/images/products/products_bms/bg.png",
            // 应用场景
            pmScene: {
                products: 0,
                til: "应用场景",
                isShow: false,
                sceneClass: "m-Bms-scene",
                list: [
                    {
                        label: "核心数据库",
                        children: {
                            title: "企业核心数据库场景",
                            titletag: "满足核心数据库对性能和安全的要求，云BMS提供多种规格的服务器，支持自动化挂载共享云硬盘。",
                            src: "/images/products/products_bms/01.svg",
                            tag: [
                                {
                                    tagTil: "· 集群部署",
                                    tagCon: "多台主机同时绑定云硬盘，支持集群应用部署",
                                },
                                {
                                    tagTil: "· 大容量",
                                    tagCon: "可挂载多块云硬盘，单盘最大32TB, 弹性扩容，按需计费",
                                },
                                {
                                    tagTil: "· 高可靠",
                                    tagCon: "三副本备份，数据持久性达99.9999999%，保障数据安全可靠",
                                },
                            ],
                        },
                    },
                    {
                        label: "高性能计算",
                        children: {
                            title: "高性能计算场景",
                            titletag: "针对高计算，高吞吐的场景特点，BMS支持最新Intel CPU的计算实例，结合100G网络，带来低时延的性能体验",
                            src: "/images/products/products_bms/02.svg",
                            tag: [
                                {
                                    tagTil: "· 低时延",
                                    tagCon: "100G网络自动化、安全隔离，支持微秒级时延",
                                },
                                {
                                    tagTil: "· 高性能",
                                    tagCon: "支持Intel最新CPU，性能强劲",
                                },
                                {
                                    tagTil: "· 易扩展",
                                    tagCon: "支持开放API，便于生态集成",
                                },
                            ],
                        },
                    },
                    {
                        label: "大数据",
                        children: {
                            title: "大数据存储与分析场景",
                            titletag: "大数据存储、分析等典型业务。支持裸金属本地存储和结合OBS服务的存算分离方案",
                            src: "/images/products/products_bms/03.svg",
                            tag: [
                                {
                                    tagTil: "· 大数据专用实例",
                                    tagCon: "BMS本地存储型D系列实例、鲲鹏通用计算KS系列实例",
                                },
                                {
                                    tagTil: "· 高性价比",
                                    tagCon: "支持大数据存算分离方案，计算、存储资源独立扩展",
                                },
                                {
                                    tagTil: "· 易用性",
                                    tagCon: "支持分钟级快速发放，实现业务快速部署上线",
                                },
                            ],
                        },
                    },
                ],
            }

        }
    }
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";

.m-p-aboutBCS {
    height: 427px;
}

.m-p-aboutBCS .m-bcs {
    gap: 90px;
}
</style>
