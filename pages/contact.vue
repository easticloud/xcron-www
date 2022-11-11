<template>
    <div class="p-page-index">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- banner -->
        <banner bannerKey="contact" />

        <div class="m-page-content">
            <!-- 售前咨询 -->
            <div class="m-enquiry">
                <h2>售前咨询</h2>
                <div class="m-enquiry-content">
                    <div class="m-left">
                        <span class="u-title">联系我们</span>
                        <span class="u-desc">联系服务</span>
                        <div class="m-online">
                            <span>025-86702988</span>
                            <span>sdsf@xcron.cn</span>
                        </div>
                        <span class="u-desc">
                            为您提供售前购买咨询、解决方案推荐、配置推荐等1v1服务， 助您上云无忧！
                            工作时间：周一至周五（9：00-18：00）
                        </span>
                    </div>
                    <div class="m-right">
                        <span class="u-title">让我们与您联系</span>
                        <span class="u-desc">留下您的联系方式，我们的专属顾问会在1个工作日内和您联系</span>
                        <a href="http://" class="u-button">现在留言</a>
                    </div>
                </div>
            </div>
            <!-- 售后服务 -->
            <IconText class="m-services" textKey="sales" />
            <!-- 地图 -->
            <Map />
            <!-- 留言 -->
            <Message />
        </div>
        <!-- 服务支持 -->
        <products-pmService></products-pmService>
        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
import banner from "@/components/page/banner.vue";
import IconText from "@/components/programme/icon_text";
import Map from "@/components/page/map.vue";
import Message from "@/components/page/message.vue";
export default {
    name: "ContactPage",
    components: { banner, IconText, Map, Message },
};
</script>
<style lang="less">
@import "~@/assets/css/page/index.less";
</style>

<style lang="less" scoped>
@import "~@/assets/css/page/contact.less";
</style>
