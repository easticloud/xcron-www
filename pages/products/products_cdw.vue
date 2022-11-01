<template>
    <div class="p-products">
        <!-- 1、云数据仓库banner -->
        <products-banner banner-key="cdw"></products-banner>

        <!-- 2、了解云数据仓库  -->
        <products-pAboutBCS :pAboutBCS="pAboutBCS" :pAboutBCSTil="pAboutBCSTil" :pAboutBCSClass="pAboutBCSClass">
        </products-pAboutBCS>

        <!-- 3、产品优势  -->
        <products-pmDotCon :pmDotConClass="pmDotConClass" :pmDotConTil="pmDotConTil" :pmDotCon="pmDotCon">
        </products-pmDotCon>

        <!-- 4、精品案例  -->
        <products-pmImgCon :pmImgConClass="pmImgConClass" :pmImgConTil="pmImgConTil" :pmImgCon="pmImgCon">
        </products-pmImgCon>

        <!-- 5、应用场景  -->
        <products-pmScene :pmScene="pmScene"></products-pmScene>
    </div>
</template>

<script>
export default {
    name: "products-CDW",
    layout: "products",
    data() {
        return {
            // 了解弹性云服务器
            pAboutBCSTil: "了解云数据仓库",
            pAboutBCSClass: "m-p-ECS",
            pAboutBCS: [
                {
                    til: "一站式分析",
                    desc: "4+1，库/仓/市/湖/+IoT，一体化仓湖一体，融合(OBS)、协同(HDFS)一库两用，HTAP混合负载",
                },
                {
                    til: "超大规模",
                    desc: "全球最大金融数仓(工行)，单集群480节点，装机20PB首家信通院2048节点集群认证",
                },
                {
                    til: "全场景部署",
                    desc: "客户机房(IDC)、边缘站点各种部署场景全覆盖架构一致、功能一致、体验一致",
                },
                {
                    til: "生态兼容",
                    desc: "兼容TD/Oracle/PG/MySQL生态支持存储过程/触发器/序列/用户自定义函数/窗口函数等",
                },
            ],
            // 产品优势
            pmDotConTil: "产品优势",//标题
            pmDotConClass: "ecs-dotcon",
            pmDotCon: [
                {
                    title: "新一代云数仓，超强扩展，极致算力，多层级高可靠技术",
                    desc: "全国首个金融云数仓，2021 IDC 中国金融行业技术应用场景创新奖“金融新基建”优秀案例; \n集群规模超强扩展能力，存储10PB级业务数据; \n多层级全并行计算，实现算的更快，满足业务更高的SLA要求; \n软件多层级HA、多层级备份、硬件全冗余设计，保证系统的鲁棒性，业务7x24全天候在线。",
                    img: "/images/products/products_cdw/01.png",
                    imgCss: "pic-r",
                },
                {
                    title: "高并发交互式查询秒级响应，分析师工作效率全面提升",
                    desc: "单集群480节点，装机容量20PB，支撑数据分析、集市、BI等各种场景； \n通过分布式查询优化，实现高并发点查询秒级/毫秒级响应； \n资源融合统一，灵活调配，多层级并行计算，效率最优.",
                    img: "/images/products/products_cdw/02.jpeg",
                    imgCss: "pic-l",
                },
                {
                    title: "HTAP混合负载，按需弹性，湖仓一体",
                    desc: "混合负载：“一库两用”，支持超过100万QPS、10万TPS高并发混合读写，支持事务强一致； \n资源管理：可以根据业务优先级进行资源动态分配，实现“快慢通道”； \按需扩容：弹性按需扩容，灵活应对用户数据及负载潮汐变化；\n仓湖一体：DWS可以直接读写OBS对象存储系统的数据，支持数据冷热分级。",
                    img: "/images/products/products_cdw/03.jpg",
                    imgCss: "pic-r",
                },
                {
                    title: "复杂即席查询，实时数据分析，一站式平台",
                    desc: "复杂SQL实时查询，10+表格联合运算，秒级返回结果； \n实时入仓批流融合60万/秒/节点，T+0完成数据分析； \n多源数据融合，一站式统一平台，助力非传统数仓工程师便捷使用数据。",
                    img: "/images/products/products_cdw/04.jpeg",
                    imgCss: "pic-l",
                },
            ],
            // 精品案例
            pmImgConTil: "精品案例",//标题
            pmImgConClass: "p-cdw",//复写样式
            pmImgCon: [//内容数据
                {
                    title: "招商银行",
                    desc: "240节点超大集群承载了全行所有零售数据应用，可储存10PB业务数据，容量提升超4倍",
                    img: "/images/products/products_cdw/zhaohang.jpeg",
                },
                {
                    title: "光大银行",
                    desc: "算力提升3倍，任务时间缩短8小时；查询速度提升至6倍",
                    img: "/images/products/products_cdw/guangda.jpeg",
                },
                {
                    title: "梦饷集团",
                    desc: "提供自动修复、自优化、自运维及自安全能力，运维效率提升30%，TCO降低30%",
                    img: "/images/products/products_cdw/mengxiang.jpeg",
                },
                {
                    title: "中原银行",
                    desc: "集群规模增长10倍，批量处理性能平均提升70%，运行成本降低50%",
                    img: "/images/products/products_cdw/zhongyuan.jpeg",
                }
            ],
            // 应用场景
            pmScene: {
                products: 0,
                til: "应用场景",
                isShow: false,
                sceneClass: "m-Bms-scene",
                list: [
                    {
                        label: "传统数仓替换",
                        children: {
                            title: "传统数仓替换",
                            titletag: "传统数据库或数仓产品面临数据存不下、查不出、扩容难、成本高的痛点。GaussDB(DWS)作为新一代全场景数据仓库，具备极致性能、高扩展、极简易用、一站式分析等特性，满足大数据时代企业构建新型数仓的需求。",
                            src: "/images/products/products_cdw/01.svg",
                            tag: [
                                {
                                    tagTil: "· 平滑迁移",
                                    tagCon: "提供配套的迁移工具，可支持Teradata、Oracle/Exadata、Greenplum等数据分析系统的平滑迁移",
                                },
                                {
                                    tagTil: "· 完备的数据库及SQL能力",
                                    tagCon: "支持SQL 2003标准，兼容Oracle/Teradata的部分语法和数据结构，支持全局事务、存储过程、数据强一致性保证",
                                },
                                {
                                    tagTil: "· 库仓一体",
                                    tagCon: "逻辑集群，支持一套集群容纳数据集市、数据仓库",
                                },
                            ],
                        },
                    },
                    {
                        label: "一站式BI解决方案",
                        children: {
                            title: "一站式BI解决方案",
                            titletag: "企业积累的海量数据及各种数据资产，体量庞大，需高性能大数据平台支撑进行全量数据分析和挖掘。依托DWS+BI工具打造全局的、直观的、关联性的、可视化的运营数字化分析平台 ，以数据分析来驱动业务价值提升及管理提升",
                            src: "/images/products/products_cdw/02.png",
                            tag: [
                                {
                                    tagTil: "· 多源数据接入",
                                    tagCon: "多源数据采集，打破数据孤岛，形成统一的数据展现平台",
                                },
                                {
                                    tagTil: "· 统一分析决策平台",
                                    tagCon: "统一的数据决策平台，多维分析企业经营数据，有效支撑企业的经营决策；",
                                },
                                {
                                    tagTil: "· 多场景展现",
                                    tagCon: "搭配BI工具多终端数据展现PC端/移动端/大屏，满足业务部门各种报表诉求。",
                                },
                            ],
                        },
                    },
                    {
                        label: "数据湖分析",
                        children: {
                            title: "数据湖分析",
                            titletag: "整合数据资源，构建大数据平台，发现数据价值，成为企业经营的新趋势和迫切诉求。DWS Express可直接对存储在对象存储OBS上的大数据平台集成、处理后的数据进行分析",
                            src: "/images/products/products_cdw/03.svg",
                            tag: [
                                {
                                    tagTil: "· 统一分析入口",
                                    tagCon: "以DWS的SQL作为上层应用的统一入口，应用开发人员使用熟悉的SQL语言即可访问所有数据",
                                },
                                {
                                    tagTil: "· 实时交互式分析",
                                    tagCon: "针对即时的分析需求，分析人员通过DWS Express，可实时从大数据平台中获取信息",
                                },
                                {
                                    tagTil: "· 弹性伸缩",
                                    tagCon: "客户可使用DWS Express提供的由成百上千节点组成的加速集群，相比本地托管集群，效率提升数百倍。",
                                },
                            ],
                        },
                    },
                    {
                        label: "IoT数据分析",
                        children: {
                            title: "实时数据分析",
                            titletag: "移动互联网、IoT场景下会产生大量实时数据，为了快速获取数据价值，需要对数据进行实时分析，DWS的快速入库和查询能力可支持实时数据分析",
                            src: "/images/products/products_cdw/04.svg",
                            tag: [
                                {
                                    tagTil: "· 流式数据实时入库",
                                    tagCon: "IoT、互联网等数据经过流计算及AI服务处理后，可实时写入DWS",
                                },
                                {
                                    tagTil: "· 实时监控与预测",
                                    tagCon: "围绕数据进行分析和预测，对设备进行监控，对行为进行预测，实现控制和优化",
                                },
                                {
                                    tagTil: "· AI融合分析",
                                    tagCon: "AI服务对图像、文本等数据的分析结果可在DWS中与其他业务数据进行关联分析，实现融合数据分析",
                                },
                            ],
                        },
                    },
                ],
            },
        }
    },
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";
</style>
