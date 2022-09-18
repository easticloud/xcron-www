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
                        :class="{ active: production_key == item }"
                    >
                        {{ item }}</span
                    >
                </div>
                <div class="m-search">
                    <el-input placeholder="搜索云产品" v-model="search">
                        <el-button slot="prepend" icon="el-icon-search"></el-button>
                    </el-input>
                    <div class="m-content">
                        <div class="m-item">
                            <span class="u-title">智能AI边缘盒子</span>
                            <span class="u-desc">提供识别、抓拍、对比、报警等服务</span>
                        </div>
                        <div class="m-item">
                            <span class="u-title">AI在线服务</span>
                            <span class="u-desc">适用于图像识别、自然语言处理等服务</span>
                        </div>
                    </div>
                </div>
            </template>
            <template v-if="type == 'solution'">
                <div class="m-list-solution">
                    <div class="m-item" v-for="(item, i) in solution" :key="i">
                        <img class="u-img" :src="item.icon" />
                        <div class="u-txt">
                            <span class="u-label">{{ item.label }}</span>
                            <span class="u-desc">{{ item.desc }}</span>
                        </div>
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
            production_key: "人工智能",

            search: "",
            production: ["人工智能", "区块链", "云计算", "大数据", "网络", "智能边缘", "终端", "安全"],
            solution: [
                {
                    label: "新零售行业解决方案",
                    desc: "要素整合、精准营销、高效果运营",
                    icon: "/images/index/solution/icon-1.png",
                },
                {
                    label: "运营商行业解决方案",
                    desc: "网络变现、业务创新、运营敏捷",
                    icon: "/images/index/solution/icon-2.png",
                },
                {
                    label: "数字政府解决方案",
                    desc: "服务能力向移动化和智能化发展",
                    icon: "/images/index/solution/icon-3.png",
                },
                {
                    label: "金融行业解决方案",
                    desc: "敏捷创新、智能升级、数字化转型",
                    icon: "/images/index/solution/icon-4.png",
                },
                {
                    label: "迁移上云解决方案",
                    desc: "提供ERP系统上云一站式服务",
                    icon: "/images/index/solution/icon-5.png",
                },
                {
                    label: "TIk Tok解决方案",
                    desc: "解决个人/企业Tiktok问题",
                    icon: "/images/index/solution/icon-6.png",
                },
                {
                    label: "其他行业解决方案",
                    desc: "能源丨医疗健康丨教育丨工业互联网",
                    icon: "/images/index/solution/icon-7.png",
                },
            ],
        };
    },

    methods: {},
};
</script>

<style scope lang="less">
@import "../../assets/css/index/menu.less";
</style>
