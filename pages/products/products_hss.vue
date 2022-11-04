<template>
    <div class="p-products">
        <!-- 1、banner -->
        <products-banner banner-key="hss"></products-banner>

        <!-- 2、了解企业主机安全  -->
        <products-frame-text text-key="hss"></products-frame-text>

        <!-- 3、应用场景  -->
        <products-tabs tab-key="hss"></products-tabs>

        <!-- 4、重磅升级  -->
        <div class="m-bg-white">
            <products-tabs tab-key="hss_x"></products-tabs>
            <products-tabs tab-key="hss_y"></products-tabs>
        </div>
    </div>
</template>

<script>
export default {
    name: "products-HSS",
    layout: 'products',
    head() {
        return {
            title: "企业主机安全",
        }
    }
};
</script>

<style lang="less">
@import "~@/assets/css/products.less";

.m-p-SceneuseS {
    background: #D8D8D8 linear-gradient(180deg, #fff 0%, #f8f8f8 100%);

    .m-Scontent {
        height: auto;
        margin-bottom: 50px;

        .imgR {
            .pr(525px);
            .pl(0);

            .u-img {
                left: auto;
                right: 74px;
            }
        }
    }
}

.m-p-aboutBCS {
    .h(403px);

    .m-bcs {
        gap: 35px;
    }
}

// bgcolor: #fff
.m-bg-white {
    background: #D8D8D8 linear-gradient(0deg, #F8F8F8 0%, #FFFFFF 100%);

    .m-p-scene {
        background: unset;

        &:first-of-type {
            padding-bottom: 50px;
        }

        &:last-of-type {
            padding-top: 0;

            .m-Scontent {
                margin-top: 0;
            }
        }
    }
}
</style>
