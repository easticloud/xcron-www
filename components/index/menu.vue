<template>
    <div class="m-index-menu" v-if="type">
        <div class="wp">
            <template v-if="type == 'production'">
                <div class="m-list-production">
                    <a class="u-more" href="" target="_blank">查看全部产品 ></a>
                    <span
                        class="u-list"
                        v-for="(item, i) in production"
                        :key="i"
                        :class="{ active: index == i }"
                        @click="change(i)"
                    >
                        {{ item.title }}</span
                    >
                </div>
                <div class="m-search">
                    <div class="u-search">
                        <img class="u-img" src="../../assets/img/search.svg" />
                        <el-input class="u-input" placeholder="搜索云产品" v-model.trim="search"> </el-input>
                    </div>
                    <div class="m-content" v-show="children.length">
                        <a
                            :href="item.link"
                            class="m-item"
                            :class="{ 'is-search': search }"
                            v-for="(item, i) in children"
                            :key="i"
                        >
                            <span class="u-title">{{ item.title }}</span>
                            <span class="u-desc" v-show="!search">{{ item.desc }}</span>
                        </a>
                    </div>
                    <div class="m-empty" v-show="!children.length">没找到结果，请重新输入</div>
                </div>
            </template>
            <template v-if="type == 'solution'">
                <div class="m-list-solution">
                    <div class="m-item" v-for="(item, i) in solution" :key="i">
                        <img class="u-img" :src="item.icon" />
                        <a :href="item.link" class="u-txt">
                            <span class="u-label">{{ item.label }}</span>
                            <span class="u-desc">{{ item.desc }}</span>
                        </a>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
export default {
    props: ["type"],
    data() {
        return {
            index: 0,
            search: "",
            production: [
                {
                    title: "人工智能",
                    children: [
                        {
                            title: "智能AI边缘盒子",
                            desc: "提供识别、抓拍、对比、报警等服务",
                            link: "/products/products_ai",
                        },
                        {
                            title: "AI在线服务",
                            desc: "适用于图像识别、自然语言处理等...",
                            link: "/products/products_ais",
                        },
                    ],
                },
                {
                    title: "区块链",
                    children: [
                        {
                            title: "区块链服务",
                            desc: "高性能、高安全的区块链技术平台服务",
                            link: "/products/products_bcs",
                        },
                        {
                            title: "可信跨链服务",
                            desc: "实现不同区块链内核的可信互联互通",
                            link: "/products/products_tcs",
                        },
                    ],
                },
                {
                    title: "云计算",
                    children: [
                        {
                            title: "弹性云服务器",
                            desc: "可随时自动获取、弹性伸缩的云服务器",
                            link: "/products/products_ecs",
                        },
                        {
                            title: "裸金属服务器",
                            desc: "高性能、高安全的云上物理服务器",
                            link: "/products/products_bms",
                        },
                        {
                            title: "专属主机",
                            desc: "专属物理主机创建的云服务器",
                            link: "/products/products_dh",
                        },
                    ],
                },
                {
                    title: "大数据",
                    children: [
                        {
                            title: "云数据仓库",
                            desc: "极致性能、稳定、按需扩展的数据仓库服务",
                            link: "/products/products_cdw",
                        },
                        {
                            title: "数据接入服务",
                            desc: "实时数据接入、处理、转储服务",
                            link: "/products/products_dis",
                        },
                        {
                            title: "数据可视化",
                            desc: "提供可视化组件定制和应用数据大屏",
                            link: "/products/products_dlv",
                        },
                    ],
                },
                {
                    title: "网络",
                    children: [
                        { title: "虚拟私有云", desc: "隔离的、私密的虚拟网络环境", link: "/products/products_vpc" },
                        {
                            title: "云专线",
                            desc: "搭建本地数据中心与VPC间的专属连接通道",
                            link: "/products/products_dc",
                        },
                        { title: "全球加速", desc: "提供SLA稳定的加速传输", link: "/products/products_ga" },
                    ],
                },
                {
                    title: "智能边缘",
                    children: [
                        {
                            title: "全站加速",
                            desc: "提升网络传输的性能、稳定性和访问体验",
                            link: "/products/products_wsa",
                        },
                        {
                            title: "智能边缘云",
                            desc: "部署在距用户更近的位置，提供低时延体验",
                            link: "/products/products_iec",
                        },
                    ],
                },
                {
                    title: "终端",
                    children: [
                        {
                            title: "终端安全防护",
                            desc: "联动网络侧的安全防御能力，为企业构建由网到端的全面闭环防护",
                            link: "/products/products_tsp",
                        },
                    ],
                },
                {
                    title: "安全",
                    children: [
                        { title: "云防火墙", desc: "网络流量管控与入侵安全防护", link: "/products/products_cf" },
                        { title: "企业主机安全", desc: "服务器贴身安全管家", link: "/products/products_hss" },
                        { title: "数据加密服务", desc: "云上数据加密和密钥托管服务", link: "/products/products_dew" },
                    ],
                },
            ],
            solution: [
                {
                    label: "新零售行业解决方案",
                    desc: "要素整合、精准营销、高效果运营",
                    icon: "/images/index/solution/icon-1.png",
                    link: "/programme/new_retail",
                },
                {
                    label: "运营商行业解决方案",
                    desc: "网络变现、业务创新、运营敏捷",
                    icon: "/images/index/solution/icon-2.png",
                    link: "/programme/operators",
                },
                {
                    label: "数字政府解决方案",
                    desc: "服务能力向移动化和智能化发展",
                    icon: "/images/index/solution/icon-3.png",
                    link: "/programme/government",
                },
                {
                    label: "金融行业解决方案",
                    desc: "敏捷创新、智能升级、数字化转型",
                    icon: "/images/index/solution/icon-4.png",
                    link: "/programme/finance",
                },
                {
                    label: "迁移上云解决方案",
                    desc: "提供ERP系统上云一站式服务",
                    icon: "/images/index/solution/icon-5.png",
                    link: "/programme/cloud",
                },
                {
                    label: "TIk Tok解决方案",
                    desc: "解决个人/企业Tiktok问题",
                    icon: "/images/index/solution/icon-6.png",
                    link: "/programme/media",
                },
                {
                    label: "其他行业解决方案",
                    desc: "能源丨医疗健康丨教育丨交通物流",
                    icon: "/images/index/solution/icon-7.png",
                    link: "/programme/other?key=energy",
                },
            ],
        };
    },
    computed: {
        children() {
            const list = this.production;
            const flattenChildren = list.reduce((acc, cur) => {
                return acc.concat(cur.children);
            }, []);
            return this.search
                ? flattenChildren.filter((item) => item.title.includes(this.search))
                : list[this.index].children;
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
@import "../../assets/css/index/menu.less";
</style>
