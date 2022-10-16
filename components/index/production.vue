<template>
    <div class="m-index-item m-index-production">
        <div class="wp">
            <div class="m-title">
                <h2>丰富、安全、稳定的产品及服务</h2>
                <a href="/" target="_blank" class="u-desc">查看全部产品 ></a>
            </div>
            <div class="m-tabs">
                <div class="m-item" v-for="(item, i) in list" :key="i" :class="{ active: i == index }"
                    @click="change(i)">
                    <img class="u-img" :src="item.src" />
                    <span class="u-label">{{ item.label }}</span>
                </div>
            </div>
        </div>
        <div class="m-content">
            <div class="wp">
                <div class="m-children">
                    <div class="u-child" v-for="(child, i) in children" :key="i">
                        <span class="u-title">
                            <a :href="child.link" target="_blank" class="u-child-title">{{ child.title }}</a>
                            <span class="u-sign" v-if="child.sign">{{ child.sign }}</span>
                        </span>
                        <span class="u-desc">{{ child.desc }}</span>
                        <div class="u-tags">
                            <span class="u-tag" v-for="(item, k) in child.tag" :key="k">{{ item }}</span>
                        </div>
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
            index: 0,
            list: [
                {
                    label: "人工智能",
                    src: "/images/index/A.png",
                    children: [
                        {
                            title: "智能AI边缘盒子",
                            sign: "自动化部署",
                            link: 'products/products_ai',
                            desc: "提供识别、抓拍、对比、报警等服务",
                            tag: ["算法适配", "海量储存"],
                        },
                        {
                            title: "AI在线服务",
                            sign: "",
                            link: 'products/products_ais',
                            desc: "适用于图像识别、自然语言处理等多个领域",
                            tag: ["安全可靠", "简单易用"],
                        },
                    ],
                },
                {
                    label: "区块链",
                    src: "/images/index/B.png",
                    children: [
                        {
                            title: "区块链服务",
                            sign: "自研平台",
                            link: 'products/products_bcs',
                            desc: "高性能、高安全的区块链技术平台服务",
                            tag: ["云链结合", "高效灵活"],
                        },
                        {
                            title: "可信跨链服务",
                            sign: "",
                            link: 'products/products_tcs',
                            desc: "实现不同区块链内核的可信互联互通",
                            tag: ["可扩展性"],
                        },
                    ],
                },
                {
                    label: "云计算",
                    src: "/images/index/C.png",
                    children: [
                        {
                            title: "弹性云服务器",
                            sign: "多样性",
                            link: 'products/products_ecs',
                            desc: "可随时自动获取、弹性伸缩的云服务器",
                            tag: ["安全可靠", "灵活高效"],
                        },
                        {
                            title: "裸金属服务器",
                            sign: "大容量",
                            link: 'products/products_bms',
                            desc: "高性能、高安全的云上物理服务器",
                            tag: ["高效部署", "快速集成"],
                        },
                        {
                            title: "专属主机",
                            sign: "多配置",
                            link: 'products/products_dh',
                            desc: "专属物理主机创建的云服务器",
                            tag: ["安全合规", "节约成本"],
                        },
                    ],
                },
                {
                    label: "大数据",
                    src: "/images/index/D.png",
                    children: [
                        {
                            title: "云数据仓库",
                            sign: "生态兼容",
                            link: 'products/products_cdw',
                            desc: "极致性能、稳定、按需扩展的数据仓库服务",
                            tag: ["新一代", "全场景"],
                        },
                        {
                            title: "数据接入服务",
                            sign: "永久在线",
                            link: 'products/products_dis',
                            desc: "实时数据接入、处理、转储服务",
                            tag: ["高效传输", "简单易用"],
                        },
                        {
                            title: "数据可视化",
                            sign: "",
                            link: 'products/products_dlv',
                            desc: "提供可视化组件定制和应用数据大屏",
                            tag: ["实时监测"],
                        },
                    ],
                },
                {
                    label: "网络",
                    src: "/images/index/N.png",
                    children: [
                        {
                            title: "虚拟私有云",
                            sign: "100%隔离",
                            link: 'products/products_vpc',
                            desc: "隔离的、私密的虚拟网络环境",
                            tag: ["灵活易用", "轻松扩展"],
                        },
                        {
                            title: "云专线",
                            sign: "混合云",
                            link: 'products/products_dc',
                            desc: "搭建本地数据中心与VPC间的专属连接通道",
                            tag: ["高安全性", "无缝扩展"],
                        },
                        {
                            title: "全球加速",
                            sign: "灵活部署",
                            link: 'products/products_ga',
                            desc: "提供SLA稳定的加速传输",
                            tag: ["高合规", "高可靠", "低时延"],
                        },
                    ],
                },
                {
                    label: "智能边缘",
                    src: "/images/index/E.png",
                    children: [
                        {
                            title: "全站加速",
                            sign: "动静结合",
                            link: 'products/products_wsa',
                            desc: "提升网络传输的性能、稳定性和访问体验",
                            tag: ["节点丰富", "智能加速"],
                        },
                        {
                            title: "智能边缘云",
                            sign: "边云协同",
                            link: 'products/products_iec',
                            desc: "部署在距用户更近的位置，提供低时延体验",
                            tag: ["广域覆盖", "卓越性能"],
                        },
                    ],
                },
                {
                    label: "终端",
                    src: "/images/index/T.png",
                    children: [
                        {
                            title: "终端安全防护",
                            sign: "网端联动",
                            link: 'products/products_tsp',
                            desc: "联动网络侧的安全防御能力，为企业构建由网到端的全面闭环防护",
                            tag: ["实时响应", "专项防护"],
                        },
                    ],
                },
                {
                    label: "安全",
                    src: "/images/index/S.png",
                    children: [
                        {
                            title: "云防火墙",
                            sign: "",
                            link: 'products/products_cf',
                            desc: "网络流量管控与入侵安全防护",
                            tag: ["安全", "可视", "极简"],
                        },
                        {
                            title: "企业主机安全",
                            sign: "",
                            link: 'products/products_hss',
                            desc: "服务器贴身安全管家",
                            tag: ["合规", "高效", "稳定"],
                        },
                        {
                            title: "数据加密服务",
                            sign: "",
                            link: 'products/products_dew',
                            desc: "云上数据加密和密钥托管服务",
                            tag: ["等保合规", "专属加密"],
                        },
                    ],
                },
            ],
        };
    },
    computed: {
        children() {
            return this.list[this.index].children;
        },
    },
    methods: {
        change(i) {
            this.index = i;
        },
    },
};
</script>

<style scope lang="less">
@import "../../assets/css/index/production.less";
</style>
