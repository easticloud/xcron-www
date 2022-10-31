<template>
    <div class="m-index-item m-index-solution">
        <div class="wp">
            <div class="m-title">
                <h2>全面、专业、智能的解决方案</h2>
                <a href="" target="_blank" class="u-desc">查看全部解决方案 ></a>
            </div>
            <div class="m-tabs">
                <div
                    class="m-item"
                    v-for="(item, i) in list"
                    :key="i"
                    :class="{ active: index == i }"
                    @click="change(i)"
                >
                    <img class="u-img" :src="item.src" />
                    <span class="u-label">{{ item.label }}</span>
                </div>
            </div>
            <div class="m-content" :style="`backgroundImage: url(${children.src})`">
                <div class="m-item">
                    <span class="u-title">{{ children.title }}</span>
                    <span class="u-desc" v-if="children.desc">{{ children.desc }}</span>
                    <div class="u-tags">
                        <template v-if="children.tag.length">
                            <span class="u-tag" v-for="(child, i) in children.tag" :key="i">{{ child }}</span>
                        </template>
                    </div>
                </div>
                <div class="u-others">
                    <template v-if="children.other.length">
                        <span class="u-other" v-for="(child, i) in children.other" :key="i">{{ child }}</span>
                    </template>
                </div>
                <!-- <img class="u-img" v-if="children.src" :src="children.src" /> -->
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
                    label: "新零售",
                    src: "/images/index/solution/icon-1.png",
                    children: {
                        title: "新零售行业解决方案",
                        desc: "通过云计算、大数据、人工智能等技术，蒋零售场景中要素进行整合，达到精准营销，高效运营。",
                        src: "/images/index/solution/01.svg",
                        tag: ["数据驱动", "数字赋能", "AI加持"],
                        other: [],
                    },
                },
                {
                    label: "运营商",
                    src: "/images/index/solution/icon-2.png",
                    children: {
                        title: "运营商行业解决方案",
                        desc: "提供更适合运营商的业务云化转型方案以及面向运营商企业客户的行业数字化方案，帮助运营商加速网络变现，业务创新，运营敏捷，取得新增长。",
                        src: "/images/index/solution/02.jpeg",
                        tag: ["网络变现", "业务创新", "运营敏捷"],
                        other: [],
                    },
                },
                {
                    label: "数字政府",
                    src: "/images/index/solution/icon-3.png",
                    children: {
                        title: "数字政府解决方案",
                        desc: "通过全栈专属云，人工智能和微服务等服务，帮助政府及公共事业的服务能力向移动化和智能化发展。",
                        src: "/images/index/solution/03.jpeg",
                        tag: ["协同共享", "智能精准", "简单易用"],
                        other: [],
                    },
                },
                {
                    label: "金融",
                    src: "/images/index/solution/icon-4.png",
                    children: {
                        title: "金融行业解决方案",
                        desc: "通过金融专区、专属云安全合规部署和全栈技术创新，助力金融客户业务敏捷创新、智能升级等数字化转型目标。",
                        src: "/images/index/solution/04.jpeg",
                        tag: ["全新趋势", "转型升级", "业务创新"],
                        other: [],
                    },
                },
                {
                    label: "上云与迁移",
                    src: "/images/index/solution/icon-5.png",
                    children: {
                        title: "迁移上云解决方案",
                        desc: "提供ERP系统上云一站式服务，为您完成数字化时代的企业管理工具转型。",
                        src: "/images/index/solution/05.jpeg",
                        tag: ["降低成本", "安全稳定", "最新技术"],
                        other: [],
                    },
                },
                {
                    label: "媒体应用",
                    src: "/images/index/solution/icon-6.png",
                    children: {
                        title: "TIk Tok解决方案",
                        desc: "抖音国际版Tiktok在全球深受欢迎，成为国际上下载量最多的APP之一。由简入深，针对浏览客户、运营客户以及企业高端客户都有完整配套解决方案，解决个人/企业Tiktok问题。",
                        src: "/images/index/solution/06.jpeg",
                        tag: ["全案定制", "高速转化", "精准匹配"],
                        other: [],
                    },
                },
                {
                    label: "其他",
                    src: "/images/index/solution/icon-7.png",
                    children: {
                        title: "",
                        desc: "",
                        src: "",
                        tag: [],
                        other: ["能源行业解决方案", "医疗健康行业解决方案", "教育行业解决方案", "交通物流解决方案"],
                    },
                },
            ],
        };
    },
    async asyncData({ params }) {
        return {};
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

<style lang="less">
@import "../../assets/css/index/solution.less";
</style>
