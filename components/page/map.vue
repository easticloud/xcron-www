<template>
    <div class="m-map wp">
        <baidu-map class="u-map" :center="center" :zoom="zoom" ak="Ew6p8zLR26m3UX3cu4ibtwUGqwprCmZI">
            <baidu-map-marker :position="{ lng: 118.726879, lat: 31.997976 }"></baidu-map-marker>
            <BaiduMapOverlay pane="labelPane" class="m-address" @draw="draw">
                <div class="u-logo">
                    <img src="../../static/images/page/contact/logo.png" alt="江苏东云互联网络科技有限公司" />
                </div>
                <div class="u-info">
                    <span class="u-title">江苏实点实分网络科技有限公司</span>
                    <span>江苏省南京市建邺区江东中路359号国睿大厦1号楼B座16-1</span>
                </div>
            </BaiduMapOverlay>
        </baidu-map>
    </div>
</template>
<script>
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import BaiduMapMarker from "vue-baidu-map/components/overlays/Marker.vue";
import BaiduMapOverlay from "vue-baidu-map/components/overlays/Overlay.vue";
export default {
    name: "ContactMap",
    components: {
        BaiduMap,
        BaiduMapMarker,
        BaiduMapOverlay,
    },
    data: function () {
        return {
            center: { lng: "118.726879", lat: "31.997976" },
            zoom: 16,
        };
    },
    methods: {
        // 地图标签定位
        draw({ el, BMap, map }) {
            const pixel = map.pointToOverlayPixel(new BMap.Point(118.726679, 31.998076));
            el.style.left = pixel.x - 124 + "px";
            el.style.top = pixel.y - 142 + "px";
        },
    },
};
</script>
<style lang="less">
@import "~@/assets/css/page/map.less";
</style>
