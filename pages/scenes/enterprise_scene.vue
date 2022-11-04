<template>
    <div class="p-scene">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 企业场景 -->
        <div class="m-enterprise-scene">
            <Header :data="header" />
            <Tabs :data="tabs" :index="tabsIndex" @change="changeTab" />
            <div class="wp m-enterprise-content  m-scene-content">
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
            title : "企业场景",
            header: {
                type: "enterprise",
                title: "企业通用场景专区",
                desc: "我们为您的企业提供企业初创到营销、管理、业务拓展的全套上云解决方案，助力业务快速发展",
                link: "",
            },
            tabs: ["企业上云", "企业初创", "企业营销", "企业安全"],
            tabsIndex: 0,
            content: [
                // 企业上云
                {
                    business: {
                        desc: "帮助客户解决用户访问高的场景从而减轻业务压力",
                        list: [
                            {
                                icon: require("/static/images/scene/enterprise/1-1.svg"),
                                title: "快速部署上线",
                                desc: "业务高速发展，传统IT基础设施难以满足资源快速增长的需求",
                            },
                            {
                                icon: require("/static/images/scene/enterprise/1-2.svg"),
                                title: "数据可靠性要求高",
                                desc: "业务发展、用户激增，对数据库的稳定性和数据存储的可靠性高要求提高",
                            },
                            {
                                icon: require("/static/images/scene/enterprise/1-3.svg"),
                                title: "架构弹性灵活",
                                desc: "阶段性高并发业务场景，需要IT架构具备更高弹性和性能以保证用户体验",
                            },
                        ],
                    },
                    programme: {
                        img: require("/static/images/scene/enterprise/cloud.png"),
                        scene: "云上网站标准化部署：通过云上部署计算、数据、存储等模块实现业务系统上云，满足未来可灵活的延展性和较低的运营成本。云上独立业务系统部署：对于典型行业的独立系统实现云上部署，云化的高可用架构保障业务运行稳定。",
                        advantage: [
                            { title: "高并发", desc: "负载均衡，云数据库性能可达社区版3倍" },
                            { title: "高可用", desc: "消除业务单点故障，主备秒级切换" },
                            { title: "高弹性", desc: "压测预估资源量，弹性伸缩扩容" },
                        ],
                        recommend: [
                            {
                                icon: require("/static/images/scene/enterprise/server.svg"),
                                name: "弹性云服务器",
                            },
                        ],
                    },
                    recommend: {
                        desc: "基于实际业务场景，为您精心推荐的爆款产品、产品组合购买",
                        list: [
                            {
                                title: "单机网站架构云化",
                                desc: "很多客户最开始使用云的时候，会把云（服务器）简单地当成普通的物理服务器来使用，比如把应用系统、数据库和文件等都保存在同一台云服务器上。",
                            },
                            {
                                title: "云上网站经典架构",
                                desc: "在创业型公司，新项目发布初期存在较大的不确定性，既要考虑项目未来的扩展性，又要衡量项目的运营成本。",
                            },
                            {
                                title: "小型互联网迁移上云",
                                desc: "本方案主要适用于中小型互联网企业，云迁移的最佳实践。方案中会概述网络规划、服务器、数据库、存储数据、Kafka和镜像数据的迁移方案描述。",
                            },
                        ],
                    },
                },
                // 企业初创
                {
                    business: {
                        desc: "为广大中小企业提供多场景解决方案，满足各行业客户在企业初创阶段的业务需求，快速实现数字化转型",
                        list: [
                            {
                                icon: require("/static/images/scene/enterprise/2-1.svg"),
                                title: "耗精力",
                                desc: "公司，商标，工商财税法等流程消耗初创企业大量精力，难以聚焦核心业务",
                            },
                            {
                                icon: require("/static/images/scene/enterprise/2-2.svg"),
                                title: "服务差",
                                desc: "服务商水平参差不齐，服务质量难以保障",
                            },
                            {
                                icon: require("/static/images/scene/enterprise/2-3.svg"),
                                title: "难信赖",
                                desc: "难以找到可信赖的托管机构，售后服务得不到保证",
                            },
                            {
                                icon: require("/static/images/scene/enterprise/2-4.svg"),
                                title: "投入高",
                                desc: "基础IT系统构建繁杂，品牌多，投入高，且难以评估实际价值",
                            },
                        ],
                    },
                    programme: {
                        img: require("/static/images/scene/enterprise/start.png"),
                        scene: "全托管建站服务，为您提供APP，小程序，网站全套的线上企业站式和营销平台，一家供应商，一套业务系统，满足线上企业展示所需。",
                        advantage: [
                            { title: "简单高效", desc: "无需为了不同的客户端对接多个开发商，一次沟通，一次投入" },
                            { title: "量身打造", desc: "提供1V1的策划咨询和开发设计服务，根据用户需求量体裁衣" },
                            {
                                title: "节本增效",
                                desc: "全功能定制，多端部署，统一平台。一次沟通，一次采购，一次开发，一次交付",
                            },
                        ],
                        recommend: [
                            {
                                icon: require("/static/images/scene/enterprise/start.svg"),
                                name: "定制建站",
                            },
                        ],
                    },
                    recommend: {
                        desc: "基于实际业务场景，为您精心推荐的爆款产品、产品组合购买",
                        list: [
                            {
                                title: "如何通过云建站模板快速建站",
                                desc: "云 . 速成美站产品面向企业/个人提供的一款自助建站产品。预置海量模板，类PPT操作设计，便捷、低成本的解决您的建站问题。",
                            },
                            {
                                title: "五步完成企业官网建设",
                                desc: "云·企业官网，建站只需五步，全程由客户经理和设计师为您提供全程一对一服务，在您首次进入后台提交需求并由设计师确认需求后，开启网站制作。",
                            },
                        ],
                    },
                },
                // 企业营销
                {
                    business: {
                        desc: "丰富的消息触达渠道，让企业可以轻松构建与用户之间的信息通道",
                        list: [
                            {
                                icon: require("/static/images/scene/enterprise/3-1.svg"),
                                title: "无营销人群分析",
                                desc: "缺乏用户行为分析和用户生命周期预测，后续营销活动没有方向",
                            },
                            {
                                icon: require("/static/images/scene/enterprise/3-2.svg"),
                                title: "营销拓展成本高",
                                desc: "工具型产品单一，场景拓展成本高，活动权益接入成本高，物料制作成本高",
                            },
                            {
                                icon: require("/static/images/scene/enterprise/3-3.svg"),
                                title: "营销执行不可控",
                                desc: "运营经验缺失，活动准备周期长，用户反馈监控不实时",
                            },
                            {
                                icon: require("/static/images/scene/enterprise/3-4.svg"),
                                title: "营销投入不精准",
                                desc: "活动投放不精准，资源有限，多方竞争",
                            },
                        ],
                    },
                    programme: {
                        img: require("/static/images/scene/enterprise/marketing.png"),
                        scene: "围绕用户全生活场景的智能营销解决方案，基于用户行为大数据分析，结合智能科技提升营销自动化水平。通过在APP中接入生活场景服务，激活存量用户，促进产品二次销售，实现业务快速增长。",
                        advantage: [
                            { title: "拉新留存", desc: "快速获取新用户，并增加用户粘性，预防流失" },
                            { title: "营销自动化", desc: "营销活动策划-准备-执行-分析，全链路高度自动化" },
                            {
                                title: "智能营销",
                                desc: "通过丰富的用户洞察模型和便捷的策略配置，完成消费者多维洞察分析和多渠道触达，助力企业实现用户增长",
                            },
                        ],
                        recommend: [
                            {
                                icon: require("/static/images/scene/enterprise/marketing.svg"),
                                name: "移动分析",
                            },
                        ],
                    },
                    recommend: {
                        desc: "基于实际业务场景，为您精心推荐的爆款产品、产品组合购买",
                        list: [
                            {
                                title: "智能营销解决方案总体架构",
                                desc: "本系统基于全量企业知识图谱，由企业查询、高级筛选、智能推荐等发现线索功能，及线索管理、客户管理、商机管理、合同管理、统计分析等CRM功能模块组成。",
                            },
                            {
                                title: "电商网站智能推荐",
                                desc: "基于领先的大数据和人工智能技术，结合在电商行业的多年积累为开发者提供个性化推荐服务，提升商品购买率和转化率。",
                            },
                        ],
                    },
                },
                // 企业安全
                {
                    business: {
                        desc: "助力企业合规上云，保障业务安全",
                        list: [
                            {
                                icon: require("/static/images/scene/enterprise/4-1.svg"),
                                title: "防护不全面",
                                desc: "黑客攻击途径较和方式多变，单一安全产品无法满足业务安全性",
                            },
                            {
                                icon: require("/static/images/scene/enterprise/4-2.svg"),
                                title: "数据被爬取",
                                desc: "防止爬虫抓取网站页面，频繁查询信息",
                            },
                            {
                                icon: require("/static/images/scene/enterprise/4-3.svg"),
                                title: "安全能力缺乏",
                                desc: "五花八门的安全产品，不懂配置，不懂如何使用",
                            },
                        ],
                    },
                    programme: {
                        img: require("/static/images/scene/enterprise/security.png"),
                        scene: "配置安全产品后，可实现自动的流量清洗，主机安全，防篡改等能力，并且满足国家信息安全法合规要求。",
                        advantage: [
                            {
                                title: "防护能力极强",
                                desc: "可以有效识别Web业务流量的恶意特征，避免网站服务器被恶意入侵导致服务器性能异常等问题",
                            },
                            {
                                title: "防护措施全面",
                                desc: "整套安全方案覆盖各种业务环节众多应用场景，从网络层，应用层，主机层各环节建筑安全长城，告别各种渠道来源的安全隐患",
                            },
                            { title: "便捷部署", desc: "一键部署防护，极大降低人力成本，防护无忧" },
                        ],
                        recommend: [
                            {
                                icon: require("/static/images/scene/enterprise/security.svg"),
                                name: "终端安全防护",
                            },
                            {
                                icon: require("/static/images/scene/enterprise/cloud.svg"),
                                name: "云防火墙",
                            },
                        ],
                    },
                    recommend: {
                        desc: "基于实际业务场景，为您精心推荐的爆款产品、产品组合购买",
                        list: [
                            {
                                title: "传统企业业务上云基础安全防护",
                                desc: "提供传统企业业务上云后，如何在云上构建网络安全、主机安全、入侵检测、运维审计等可实操最佳实践。",
                            },
                            {
                                title: "企业上云等保三级合规",
                                desc: "云原生高性价比的等保三级最佳实践；在等保二级基础上，叠加必要的安全产品及高可用架构/满足三级要求。",
                            },
                            {
                                title: "电商网站业务安全",
                                desc: "电商网站运营期间的安全防护，包括防爬风险管理、DDoS防御、风险管理产品的能力及操作。",
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
