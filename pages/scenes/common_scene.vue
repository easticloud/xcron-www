<template>
    <div class="p-scene">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 通用场景 -->
        <div class="m-common-scene">
            <Header :data="header" />
            <Tabs :data="tabs" :index="tabsIndex" @change="changeTab" />
            <div class="wp m-common-content m-scene-content">
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
import Programme from "@/components/scenes/programme";
import Recommend from "@/components/scenes/recommend";
export default {
    components: { Header, Tabs, Programme, Recommend },
    data() {
        return {
            title : "通用场景",
            header: {
                type: "common",
                title: "业务通用场景专区",
                desc: "为各个企业核心职能部门提供业务通用场景方案，助力开展云上业务，降本提效",
                link: "",
            },
            tabs: ["市场营销", "人力资源", "综合行政", "资本财务", "生产研发"],
            tabsIndex: 0,
            content: [
                // 市场营销
                {
                    programme: {
                        img: require("/static/images/scene/common/marketing.png"),
                        scene: "市场营销部门需要对企业市场分布、产品优劣势、营销活动、市场渠道、以及品牌等内容进行分析以及进行决策判断、为企业提供更好的营销策略，借助各类营销产品工作，帮助企业完成更高的业绩目标，实现业务快速增长。",
                        advantage: [
                            { title: "降低营销成本", desc: "以点对点方式完成用户触达、降低获客成本" },
                            { title: "品牌外宣提效", desc: "对外输出产品形态、企业形象；提高品牌知名度" },
                            { title: "市场实况探究", desc: "以贴近消费者、市场前线的角色洞察行业动态、市场峰值" },
                            {
                                title: "智能营销决策",
                                desc: "通过丰富的用户洞察模型和便捷的策略配置，完成消费者多维洞察分析和多渠道触达，助力企业实现用户增长",
                            },
                        ],
                        recommend: [
                            {
                                icon: require("/static/images/scene/common/ai.svg"),
                                name: "AI在线服务",
                            },
                        ],
                    },
                    recommend: {
                        desc: "基于实际业务场景，为您精心推荐的爆款产品、产品组合购买",
                        list: [
                            {
                                title: "app拉新（企业通信）",
                                desc: "APP新用户注册时直接以手机号为账号，获得用户授权后，直接完成...",
                                tag: ["号码认证服务", "短信认证"],
                            },
                            {
                                title: "用户触达（企业通信）",
                                desc: "广泛应用于通知类场景，如验证码、外卖取货、直播开播提醒、医院工厂...",
                                tag: ["国内语音通知", "国内短信套餐"],
                            },
                            {
                                title: "企业形象展示（数字化营销）",
                                desc: "利用DataV可视化大屏在项目路演、重大汇报时协助企业向外展现内部实...",
                                tag: ["DataV数据可视化", "Quick Bi"],
                            },
                        ],
                    },
                },
                // 人力资源
                {
                    programme: {
                        img: require("/static/images/scene/common/resources.png"),
                        scene: "核心为企业文化发展、人员招聘与配置 、员工职能培训 、绩效管理、薪资福利管理、劳动关系等范围提供更好的服务；借助更多的OA办公、智能化的服务 帮助企业更好地做人员储备和发展。",
                        advantage: [
                            { title: "线下部署困难", desc: "线下IDC部署缓慢，维护、拓展困难" },
                            { title: "自建成本过高", desc: "中小企业，自建IDC成本过高" },
                            { title: "运维简单", desc: "企业内部应用覆盖协同、营销、OA、ERP等管理系统，后期运维简单" },
                            { title: "快速方便", desc: "全方位一站式地企业服务，可以低成本快速解决上云需求" },
                            { title: "手工处理业务费时费力", desc: "智慧AI加持，业务便捷省力" },
                        ],
                        recommend: [
                            {
                                icon: require("/static/images/scene/common/host.svg"),
                                name: "专属主机",
                            },
                        ],
                    },
                    recommend: {
                        desc: "基于实际业务场景，为您精心推荐的爆款产品、产品组合购买",
                        list: [
                            {
                                title: "身份核验（智慧AI）",
                                desc: "不同业务场景中,利用自动录入身份证件信息+实人认证，快速实现用户注册...",
                                tag: ["实人认证", "身份证识别"],
                            },
                            {
                                title: "简历抽取（降本提效）",
                                desc: "在面对大批量的简历信息时，利用印刷文字识别将图片转文本或同时利用自然...",
                                tag: ["高精版识别", "自然语言处理"],
                            },
                        ],
                    },
                },
                // 综合行政
                {
                    programme: {
                        img: require("/static/images/scene/common/administration.png"),
                        scene: "核心为企业的综合服务做保障，围绕公关任务、法律事务、会议管理、办公物业与制度管理、办公器具采购与管理、车辆管理等职能的场景服务；借助各类智能化服务等工具，帮企业更好地做好后勤保障工作。",
                        advantage: [
                            { title: "运维简单", desc: "企业内部应用覆盖协同、营销、OA、ERP等管理系统，后期运维简单" },
                            { title: "快速方便", desc: "全方位一站式地企业服务，可以低成本快速解决上云需求" },
                            { title: "网络易规划", desc: "混合云私网加密互连，避免暴露在公网增加不必要的安全风险" },
                            { title: "项目协作缓慢", desc: "云上流程办公，加速业务周期" },
                        ],
                        recommend: [
                            {
                                icon: require("/static/images/scene/common/desktop.svg"),
                                name: "云桌面",
                            },
                        ],
                    },
                },
                // 资本财务
                {
                    programme: {
                        img: require("/static/images/scene/common/finance.png"),
                        scene: "财务是一家企业核心的职能部门，围绕财务管理 、投资管理、融资管理等职能的场景服务；通过财务管理等，有效控制企业成本，帮助企业价值显性化。",
                        advantage: [
                            {
                                title: "多样化的产品",
                                desc: "丰富的产品品类，配合云市场强大拓展能力，为企业提供全生命周期服务",
                            },
                            {
                                title: "知识产权服务",
                                desc: "域名服务和商标注册服务全国领先，APP 软著支持无纸化全在线办理等等",
                            },
                            {
                                title: "公司成立，资质速审",
                                desc: "提供普通公司注册、云上公司注册及 ICP、EDI、网络文化经营许可、高新企业认定等各类资质服务。",
                            },
                            { title: "数据繁琐、手工作业复杂", desc: "智慧AI加持，节省人力资源，缩短作业周期" },
                        ],
                        recommend: [
                            {
                                icon: require("/static/images/scene/common/box.svg"),
                                name: "智能AI边缘盒子",
                            },
                        ],
                    },
                },
                // 生产研发
                {
                    programme: {
                        img: require("/static/images/scene/common/production.png"),
                        scene: "研发、技术、安全服务相关类场景，是一家企业建设必不可少的职能部门，对焦于企业基础建设、网络系统、各类产品研发、企业安全等服务场景；借助各类技术产品资源、帮助企业更稳定地持续发展。",
                        advantage: [
                            { title: "简单高效", desc: "配置简单，企业轻松接入" },
                            { title: "企业成本降低", desc: "自动备份，减少运维成本，轻松恢复，降低故障开资" },
                            {
                                title: "备份稳定可靠",
                                desc: "实现跨可用区或跨地域的实时复制，实现秒级RPO，分钟级RTO的高性能应用级容灾",
                            },
                        ],
                        recommend: [
                            {
                                icon: require("/static/images/scene/common/server.svg"),
                                name: "弹性云服务器",
                            },
                        ],
                    },
                    recommend: {
                        desc: "基于实际业务场景，为您精心推荐的爆款产品、产品组合购买",
                        list: [
                            {
                                title: "防域名劫持",
                                desc: "域名A的DNS解析结果IP1被恶意替换为IP2，导致A的访问失败。H...",
                                tag: ["云服务器"],
                            },
                            {
                                title: "企业降成本",
                                desc: "提供部署业务系统所需要的云计算服务资源与支持与多种云产品搭配使用，可...",
                                tag: ["云服务器", "存储容量"],
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
