export default {
    namespaced: true,
    state: {
        categories: [
            {
                id: 1,
                name: 'Shower',
                sid: 'shower',
                icon: 'bi bi-droplet',
                bgColor: '#00000080',
                sub_category: [
                    {
                        id: 1,
                        name: 'Ceiling Shower',
                        sid: 'ceiling-shower',
                        icon: 'bi bi-caret-right-fill',
                        bgColor: '#98E4D0'
                    },
                    {
                        id: 2,
                        name: 'Overhead Shower',
                        sid: 'overhead-shower',
                        icon: 'bi bi-caret-right-fill',
                        bgColor: '#98E4D0'
                    },
                    {
                        id: 3,
                        name: 'Hand Held Shower',
                        sid: 'hand-held-shower',
                        icon: 'bi bi-caret-right-fill',
                        bgColor: '#98E4D0'
                    },
                    {
                        id: 3,
                        name: 'Health Faucet',
                        sid: 'health-faucet',
                        icon: 'bi bi-caret-right-fill',
                        bgColor: '#98E4D0'
                    }
                ]
            },
            {
                id: 2,
                name: 'Kitchen',
                sid: 'kitchen',
                icon: 'bi bi-house-door',
                bgColor: '#FFB4A2',
                sub_category: [
                    {
                        id: 1,
                        name: 'Kitchen Taps',
                        sid: 'kitchen-taps',
                        icon: 'bi bi-caret-right-fill',
                    },
                    {
                        id: 2,
                        name: 'Kitchen Sinks',
                        sid: 'kitchen-sinks',
                        icon: 'bi bi-caret-right-fill',
                    },
                    {
                        id: 3,
                        name: 'Copper Kitchen Sink',
                        sid: 'copper-kitchen-sink',
                        icon: 'bi bi-caret-right-fill',
                    },
                ]
            },
            {
                id: 3,
                name: 'Diverters & Mixers',
                sid: 'diverters-mixers',
                icon: 'bi bi-gear',
                bgColor: '#A2D2FF',
                sub_category: [
                    {
                        id: 1,
                        name: 'Single Lever',
                        sid: 'single-lever',
                        icon: 'bi bi-caret-right-fill',
                    },
                    {
                        id: 2,
                        name: 'Thermatic',
                        sid: 'thermatic',
                        icon: 'bi bi-caret-right-fill',
                    },
                    {
                        id: 3,
                        name: 'Vimitro',
                        sid: 'vimitro',
                        icon: 'bi bi-caret-right-fill',
                    },
                    {
                        id: 3,
                        name: 'Shower Engine',
                        sid: 'shower-engine',
                        icon: 'bi bi-caret-right-fill',
                    },
                ]
            },
            {
                id: 4,
                name: 'Faucets',
                sid: 'faucets',
                icon: 'bi bi-arrow-right-circle',
                bgColor: '#FFA6E6',
                sub_category: [
                    {
                        id: 1,
                        name: 'Bath Spout',
                        sid: 'bath-spout',
                        icon: 'bi bi-caret-right-fill',
                    },
                    {
                        id: 2,
                        name: 'Wall Mounted',
                        sid: 'wall-mounted',
                        icon: 'bi bi-caret-right-fill',
                    },
                    {
                        id: 3,
                        name: 'Base Mounted',
                        sid: 'base-mounted',
                        icon: 'bi bi-caret-right-fill',
                    },
                ]
            },
            {
                id: 5,
                name: 'Basin',
                sid: 'basin',
                icon: 'bi bi-droplet-half',
                bgColor: '#D7B4F3',
                sub_category: [
                    {
                        id: 1,
                        name: 'Standalone Basin',
                        sid: 'standalone-basin',
                        icon: 'bi bi-caret-right-fill',
                    },
                    {
                        id: 2,
                        name: 'Handmade Basin',
                        sid: 'handmade-basin',
                        icon: 'bi bi-caret-right-fill',
                    },
                    {
                        id: 3,
                        name: 'Table Top',
                        sid: 'table-top',
                        icon: 'bi bi-caret-right-fill',
                    },
                    {
                        id: 4,
                        name: 'Under Counter',
                        sid: 'under-counter',
                        icon: 'bi bi-caret-right-fill',
                    },
                    {
                        id: 5,
                        name: 'One Piece Basin',
                        sid: 'one-piece-basin',
                        icon: 'bi bi-caret-right-fill',
                    }
                ]
            },
            {
                id: 6,
                name: 'Water Closet',
                sid: 'water-closet',
                icon: 'bi bi-water',
                bgColor: '#A6E3E9',
                sub_category: [
                    {
                        id: 1,
                        name: 'Wall Hung',
                        sid: 'wall-hung',
                        icon: 'bi bi-caret-right-fill',
                    },
                    {
                        id: 2,
                        name: 'Bidet',
                        sid: 'bidet',
                        icon: 'bi bi-caret-right-fill',
                    },
                    {
                        id: 3,
                        name: 'One Piece Toilet',
                        sid: 'one-piece-toilet',
                        icon: 'bi bi-caret-right-fill',
                    },
                    {
                        id: 4,
                        name: 'Urinal',
                        sid: 'urinal',
                        icon: 'bi bi-caret-right-fill',
                    },
                ]
            },
            {
                id: 7,
                name: 'Wellness',
                sid: 'wellness',
                icon: 'bi bi-heart',
                bgColor: '#A8E6CF',
                sub_category: [
                    {
                        id: 1,
                        name: 'Sauna',
                        sid: 'sauna',
                        icon: 'bi bi-caret-right-fill',
                    },
                ]
            },
            {
                id: 8,
                name: 'Bath Tub',
                sid: 'bath-tub',
                icon: 'bi bi-inbox',
                bgColor: '#FFE194',
                sub_category: [
                    {
                        id: 1,
                        name: 'Copper Tub',
                        sid: 'copper-tub',
                        icon: 'bi bi-caret-right-fill',
                    },
                    {
                        id: 2,
                        name: 'Jacuzzi',
                        sid: 'jacuzzi',
                        icon: 'bi bi-caret-right-fill',
                    },
                    {
                        id: 3,
                        name: 'Standalone Bathtub',
                        sid: 'standalone-bathtub',
                        icon: 'bi bi-caret-right-fill',
                    },
                ]
            },
            {
                id: 9,
                name: 'Accessories',
                sid: 'accessories',
                icon: 'bi bi-box-seam',
                bgColor: '#FFE194',
                sub_category: [
                    {
                        id: 1,
                        name: 'Dibalo',
                        sid: 'dibalo',
                        icon: 'bi bi-caret-right-fill',
                    },
                    {
                        id: 2,
                        name: 'Coasta',
                        sid: 'coasta',
                        icon: 'bi bi-caret-right-fill',
                    },
                    {
                        id: 3,
                        name: 'Vanity',
                        sid: 'vanity',
                        icon: 'bi bi-caret-right-fill',
                    },
                    {
                        id: 4,
                        name: 'Adam',
                        sid: 'adam',
                        icon: 'bi bi-caret-right-fill',
                    },
                ]
            }
        ]
    },
    getters: {
        getCategories: state => state.categories,
        getCategory: (state) => (productId) => {
            let index = state.categories.findIndex(product => product.sid == productId);
            return state.categories[index];
        },
    },
    mutations: {},
    actions: {}
}