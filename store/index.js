export const state = () => ({
    key: 'val',
    activeIndex: 0
});

export const mutations = {
    fn(state, value) {
        state.key = value;
    },

    changeMenuIndex(state, value) {
        state.activeIndex = value;
    }
};
