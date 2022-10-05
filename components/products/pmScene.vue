<template>
    <div class="m-p-scene" :class="pmScene.sceneClass">
        <div class="wp">
            <h2>{{ pmScene.til }}</h2>
            <div class="m-tabs">
                <div
                    class="m-item"
                    v-for="(item, i) in pmScene.list"
                    :key="i"
                    :class="{ active: index == i }"
                    @click="change(i)"
                >
                    <span class="u-label">{{ item.label }}</span>
                </div>
            </div>
            <div class="m-Scontent" v-if="pmScene.isShow">
                <div class="m-item">
                    <span class="u-img" :style="`backgroundImage: url(${children.src})`"></span>
                    <span class="u-title">{{ children.title }}</span>
                    <div class="u-tags">
                        <template v-if="children.tag.length">
                            <p class="u-tag" v-for="(child, i) in children.tag" :key="i">{{ child }}</p>
                        </template>
                    </div>
                </div>
            </div>
            <div class="m-Scontent" v-else>
                <div class="m-item">
                    <span class="u-img" :style="`backgroundImage: url(${children.src})`"></span>
                    <p class="u-title">
                        {{ children.title }}<span class="u-titletag">{{ children.titletag }}</span>
                    </p>

                    <div class="u-tags">
                        <template v-if="children.tag.length">
                            <p class="u-tag" v-for="(child, i) in children.tag" :key="i">
                                <b>{{ child.tagTil }}</b>
                                {{ child.tagCon }}
                            </p>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        pmScene: Object,
    },
    data() {
        return {
            index: 0,
        };
    },
    computed: {
        children() {
            return this.pmScene.list[this.index].children;
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
@import "../../assets/css/products/pmScene.less";
</style>
