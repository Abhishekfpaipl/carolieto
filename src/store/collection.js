export default {
    namespaced: true,
    state: {
        categories: [
            {
                id: 1,
                name: 'Shower',
                name: 'Ceiling Shower',
                sid: 'shower',
                icon: 'bi bi-droplet',
                image: "/img/banner.jpg",
                sub_category: [
                    {
                        id: 1,
                        name: 'Ceiling Shower',
                        sid: 'ceiling-shower',
                        icon: 'bi bi-caret-right-fill',
                        image: "https://carolieto.com/uploads/products/1725627836_Change%20%20(2).jpg",
                        products: [
                            {
                                sid: "luca",
                                image: "https://carolieto.com/uploads/products/1725611693_Luca.jpg",
                                images: [
                                    "https://carolieto.com/uploads/products/1725611693_Luca.jpg",
                                    "https://carolieto.com/uploads/products/1725611693_Luca.jpg",
                                    "https://carolieto.com/uploads/products/1725611693_Luca.jpg",
                                    "https://carolieto.com/uploads/products/1725611693_Luca.jpg",
                                ],
                                category: 'kitchen',
                                sub_category: 'sinks',
                                name: "luca",
                                info: '',
                                price: 445,
                                color: [
                                    {
                                        image: 'https://carolieto.com/uploads/products/1715934134_White.png',
                                        name: 'White',
                                    },
                                    {
                                        image: 'https://carolieto.com/uploads/products/1715934349_Black.png',
                                        name: 'Black',
                                    },
                                    {
                                        image: 'https://carolieto.com/uploads/products/1715934377_ceres.png',
                                        name: 'Ceres',
                                    },
                                    {
                                        image: 'https://carolieto.com/uploads/products/1715934389_Rusty.png',
                                        name: 'Rusty',
                                    },
                                    {
                                        image: 'https://carolieto.com/uploads/products/1715934404_Mercury.png',
                                        name: 'Mercury',
                                    },
                                ],
                                attributes: [
                                    { name: 'Material', value: 'Polyester' },
                                    { name: 'Stretchability', value: 'Moderately Stretchable' },
                                    { name: 'Lining', value: 'No' },
                                    { name: 'Style', value: 'Casual' },
                                    { name: 'Occasion', value: 'Daily' },
                                    { name: 'Chestpad', value: 'No' },
                                    { name: 'Neckline', value: 'Spaghetti Strap' },
                                    { name: 'Sleevelength', value: 'Sleeveless' },
                                    { name: 'Silhouette', value: 'S-Line' },
                                    { name: 'Nopieces', value: 1 },
                                    { name: 'Pattern', value: 'Floral' },
                                    { name: 'Trim', value: 'Backless' },
                                    { name: 'Sleevetype', value: 'Sleeveless' },
                                    { name: 'Length', value: 'Long' },
                                    { name: 'Fitness', value: 'Slim Fit' },
                                    { name: 'Belt', value: 'No' },
                                ],
                                reviews: [
                                    {
                                        title: "Excellent Quality and Service",
                                        name: "Rita Kumar",
                                        description: "Carolieto has an impressive selection of bath fixtures, and the quality truly stands out. The staff was helpful, guiding me to make the perfect choices for my home.",
                                        rating: 5,
                                    },
                                    {
                                        title: "Trendy and Functional Designs",
                                        name: "Amit Joshi",
                                        description: "The showroom is a hub for innovative and stylish designs. I found beautiful faucets and accessories that add a modern touch to my bathroom. Highly recommend Carolieto!",
                                        rating: 4,
                                    },
                                    {
                                        title: "One-Stop Solution for Bathroom Needs",
                                        name: "Sneha Verma",
                                        description: "Carolieto provides everything you need to create a sophisticated bathroom. From sleek basins to practical fixtures, their products are top-notch and well-crafted.",
                                        rating: 5,
                                    },
                                    {
                                        title: "Value for Money",
                                        name: "Rajesh Malhotra",
                                        description: "The prices are very reasonable for the quality offered. The bath fittings are durable, stylish, and definitely worth every penny. Carolieto exceeded my expectations!",
                                        rating: 4,
                                    },
                                ]
                            },
                            {
                                sid: "novice",
                                image: "https://carolieto.com/uploads/products/1725612283_Novice.jpg",
                                images: [
                                    "https://carolieto.com/uploads/products/1725612283_Novice.jpg",
                                    "https://carolieto.com/uploads/products/1725612283_Novice.jpg",
                                    "https://carolieto.com/uploads/products/1725612283_Novice.jpg",
                                    "https://carolieto.com/uploads/products/1725612283_Novice.jpg",
                                ],
                                category: 'kitchen',
                                sub_category: 'sinks',
                                name: "NOVICE",
                                info: '',
                                price: 445,
                                color: [
                                    {
                                        image: 'https://carolieto.com/uploads/products/1715934134_White.png',
                                        name: 'White',
                                    },
                                    {
                                        image: 'https://carolieto.com/uploads/products/1715934349_Black.png',
                                        name: 'Black',
                                    },
                                    {
                                        image: 'https://carolieto.com/uploads/products/1715934377_ceres.png',
                                        name: 'Ceres',
                                    },
                                    {
                                        image: 'https://carolieto.com/uploads/products/1715934389_Rusty.png',
                                        name: 'Rusty',
                                    },
                                    {
                                        image: 'https://carolieto.com/uploads/products/1715934404_Mercury.png',
                                        name: 'Mercury',
                                    },
                                ],
                                attributes: [
                                    { name: 'Material', value: 'Polyester' },
                                    { name: 'Stretchability', value: 'Moderately Stretchable' },
                                    { name: 'Lining', value: 'No' },
                                    { name: 'Style', value: 'Casual' },
                                    { name: 'Occasion', value: 'Daily' },
                                    { name: 'Chestpad', value: 'No' },
                                    { name: 'Neckline', value: 'Spaghetti Strap' },
                                    { name: 'Sleevelength', value: 'Sleeveless' },
                                    { name: 'Silhouette', value: 'S-Line' },
                                    { name: 'Nopieces', value: 1 },
                                    { name: 'Pattern', value: 'Floral' },
                                    { name: 'Trim', value: 'Backless' },
                                    { name: 'Sleevetype', value: 'Sleeveless' },
                                    { name: 'Length', value: 'Long' },
                                    { name: 'Fitness', value: 'Slim Fit' },
                                    { name: 'Belt', value: 'No' },
                                ],
                                reviews: [

                                    {
                                        title: "One-Stop Solution for Bathroom Needs",
                                        name: "Sneha Verma",
                                        description: "Carolieto provides everything you need to create a sophisticated bathroom. From sleek basins to practical fixtures, their products are top-notch and well-crafted.",
                                        rating: 5,
                                    },
                                    {
                                        title: "Value for Money",
                                        name: "Rajesh Malhotra",
                                        description: "The prices are very reasonable for the quality offered. The bath fittings are durable, stylish, and definitely worth every penny. Carolieto exceeded my expectations!",
                                        rating: 4,
                                    },
                                    {
                                        title: "Wide Range and Great Support",
                                        name: "Neha Sharma",
                                        description: "Loved the variety Carolieto offers. The staff was attentive and knowledgeable, making my shopping experience smooth and enjoyable. Will surely return for future needs!",
                                        rating: 5,
                                    },
                                    {
                                        title: "Top-notch Bath Accessories",
                                        name: "Puneet Kapoor",
                                        description: "Carolieto's accessories are high-quality and durable. The designs are modern, and the prices are fair for what you get. Perfect place for any bathroom upgrade.",
                                        rating: 4,
                                    }
                                ]

                            }, 
                        ]
                    },
                    {
                        id: 2,
                        name: 'Overhead Shower',
                        sid: 'overhead-shower',
                        icon: 'bi bi-caret-right-fill',
                        image: "https://carolieto.com/uploads/products/1725619960_COH002%20-%208X8%20Inch%20Square.jpg",
                    },
                    {
                        id: 3,
                        name: 'Hand Held Shower',
                        sid: 'hand-held-shower',
                        icon: 'bi bi-caret-right-fill',
                        image: "https://carolieto.com/uploads/products/1725614964_Safari.jpg",
                    },
                    {
                        id: 4,
                        name: 'Health Faucet',
                        sid: 'health-faucet',
                        icon: 'bi bi-caret-right-fill',
                        image: "https://carolieto.com/uploads/products/1719224217_CHF010%20-%20XL-RCS.jpg",
                    }
                ]
            },
            {
                id: 2,
                name: 'Kitchen',
                sid: 'kitchen',
                icon: 'bi bi-house-door',
                image: "/img/banner.jpg",
                sub_category: [
                    {
                        id: 1,
                        name: 'Kitchen Taps',
                        sid: 'kitchen-taps',
                        icon: 'bi bi-caret-right-fill',
                        image: "https://carolieto.com/uploads/products/1725627836_Change%20%20(2).jpg",
                    },
                    {
                        id: 2,
                        name: 'Kitchen Sinks',
                        sid: 'kitchen-sinks',
                        icon: 'bi bi-caret-right-fill',
                        image: "https://carolieto.com/uploads/products/1725627836_Change%20%20(2).jpg",
                    },
                    {
                        id: 3,
                        name: 'Copper Kitchen Sink',
                        sid: 'copper-kitchen-sink',
                        icon: 'bi bi-caret-right-fill',
                        image: "https://carolieto.com/uploads/products/1725627836_Change%20%20(2).jpg",
                    },
                ]
            },
            {
                id: 3,
                name: 'Diverters & Mixers',
                sid: 'diverters-mixers',
                icon: 'bi bi-gear',
                image: "/img/banner.jpg",
                sub_category: [
                    {
                        id: 1,
                        name: 'Single Lever',
                        sid: 'single-lever',
                        icon: 'bi bi-caret-right-fill',
                        image: "https://carolieto.com/uploads/products/1725627836_Change%20%20(2).jpg",
                    },
                    {
                        id: 2,
                        name: 'Thermatic',
                        sid: 'thermatic',
                        icon: 'bi bi-caret-right-fill',
                        image: "https://carolieto.com/uploads/products/1725627836_Change%20%20(2).jpg",
                    },
                    {
                        id: 3,
                        name: 'Vimitro',
                        sid: 'vimitro',
                        icon: 'bi bi-caret-right-fill',
                        image: "https://carolieto.com/uploads/products/1725627836_Change%20%20(2).jpg",
                    },
                    {
                        id: 3,
                        name: 'Shower Engine',
                        sid: 'shower-engine',
                        icon: 'bi bi-caret-right-fill',
                        image: "https://carolieto.com/uploads/products/1725627836_Change%20%20(2).jpg",
                    },
                ]
            },
            {
                id: 4,
                name: 'Faucets',
                sid: 'faucets',
                icon: 'bi bi-arrow-right-circle',
                image: "/img/banner.jpg",
                sub_category: [
                    {
                        id: 1,
                        name: 'Bath Spout',
                        sid: 'bath-spout',
                        icon: 'bi bi-caret-right-fill',
                        image: "https://carolieto.com/uploads/products/1725627836_Change%20%20(2).jpg",
                    },
                    {
                        id: 2,
                        name: 'Wall Mounted',
                        sid: 'wall-mounted',
                        icon: 'bi bi-caret-right-fill',
                        image: "https://carolieto.com/uploads/products/1725627836_Change%20%20(2).jpg",
                    },
                    {
                        id: 3,
                        name: 'Base Mounted',
                        sid: 'base-mounted',
                        icon: 'bi bi-caret-right-fill',
                        image: "https://carolieto.com/uploads/products/1725627836_Change%20%20(2).jpg",
                    },
                ]
            },
            {
                id: 5,
                name: 'Basin',
                sid: 'basin',
                icon: 'bi bi-droplet-half',
                image: "/img/banner.jpg",
                sub_category: [
                    {
                        id: 1,
                        name: 'Standalone Basin',
                        sid: 'standalone-basin',
                        icon: 'bi bi-caret-right-fill',
                        image: "https://carolieto.com/uploads/products/1725627836_Change%20%20(2).jpg",
                    },
                    {
                        id: 2,
                        name: 'Handmade Basin',
                        sid: 'handmade-basin',
                        icon: 'bi bi-caret-right-fill',
                        image: "https://carolieto.com/uploads/products/1725627836_Change%20%20(2).jpg",
                    },
                    {
                        id: 3,
                        name: 'Table Top',
                        sid: 'table-top',
                        icon: 'bi bi-caret-right-fill',
                        image: "https://carolieto.com/uploads/products/1725627836_Change%20%20(2).jpg",
                    },
                    {
                        id: 4,
                        name: 'Under Counter',
                        sid: 'under-counter',
                        icon: 'bi bi-caret-right-fill',
                        image: "https://carolieto.com/uploads/products/1725627836_Change%20%20(2).jpg",
                    },
                    {
                        id: 5,
                        name: 'One Piece Basin',
                        sid: 'one-piece-basin',
                        icon: 'bi bi-caret-right-fill',
                        image: "https://carolieto.com/uploads/products/1725627836_Change%20%20(2).jpg",
                    }
                ]
            },
            {
                id: 6,
                name: 'Water Closet',
                sid: 'water-closet',
                icon: 'bi bi-water',
                image: "/img/banner.jpg",
                sub_category: [
                    {
                        id: 1,
                        name: 'Wall Hung',
                        sid: 'wall-hung',
                        icon: 'bi bi-caret-right-fill',
                        image: "https://carolieto.com/uploads/products/1725627836_Change%20%20(2).jpg",
                    },
                    {
                        id: 2,
                        name: 'Bidet',
                        sid: 'bidet',
                        icon: 'bi bi-caret-right-fill',
                        image: "https://carolieto.com/uploads/products/1725627836_Change%20%20(2).jpg",
                    },
                    {
                        id: 3,
                        name: 'One Piece Toilet',
                        sid: 'one-piece-toilet',
                        icon: 'bi bi-caret-right-fill',
                        image: "https://carolieto.com/uploads/products/1725627836_Change%20%20(2).jpg",
                    },
                    {
                        id: 4,
                        name: 'Urinal',
                        sid: 'urinal',
                        icon: 'bi bi-caret-right-fill',
                        image: "https://carolieto.com/uploads/products/1725627836_Change%20%20(2).jpg",
                    },
                ]
            },
            {
                id: 7,
                name: 'Wellness',
                sid: 'wellness',
                icon: 'bi bi-heart',
                image: "/img/banner.jpg",
                sub_category: [
                    {
                        id: 1,
                        name: 'Sauna',
                        sid: 'sauna',
                        icon: 'bi bi-caret-right-fill',
                        image: "https://carolieto.com/uploads/products/1725627836_Change%20%20(2).jpg",
                    },
                ]
            },
            {
                id: 8,
                name: 'Bath Tub',
                sid: 'bath-tub',
                icon: 'bi bi-inbox',
                image: "/img/banner.jpg",
                sub_category: [
                    {
                        id: 1,
                        name: 'Copper Tub',
                        sid: 'copper-tub',
                        icon: 'bi bi-caret-right-fill',
                        image: "https://carolieto.com/uploads/products/1725627836_Change%20%20(2).jpg",
                    },
                    {
                        id: 2,
                        name: 'Jacuzzi',
                        sid: 'jacuzzi',
                        icon: 'bi bi-caret-right-fill',
                        image: "https://carolieto.com/uploads/products/1725627836_Change%20%20(2).jpg",
                    },
                    {
                        id: 3,
                        name: 'Standalone Bathtub',
                        sid: 'standalone-bathtub',
                        icon: 'bi bi-caret-right-fill',
                        image: "https://carolieto.com/uploads/products/1725627836_Change%20%20(2).jpg",
                    },
                ]
            },
            {
                id: 9,
                name: 'Accessories',
                sid: 'accessories',
                icon: 'bi bi-box-seam',
                image: "/img/banner.jpg",
                sub_category: [
                    {
                        id: 1,
                        name: 'Dibalo',
                        sid: 'dibalo',
                        icon: 'bi bi-caret-right-fill',
                        image: "https://carolieto.com/uploads/products/1725627836_Change%20%20(2).jpg",
                    },
                    {
                        id: 2,
                        name: 'Coasta',
                        sid: 'coasta',
                        icon: 'bi bi-caret-right-fill',
                        image: "https://carolieto.com/uploads/products/1725627836_Change%20%20(2).jpg",
                    },
                    {
                        id: 3,
                        name: 'Vanity',
                        sid: 'vanity',
                        icon: 'bi bi-caret-right-fill',
                        image: "https://carolieto.com/uploads/products/1725627836_Change%20%20(2).jpg",
                    },
                    {
                        id: 4,
                        name: 'Adam',
                        sid: 'adam',
                        icon: 'bi bi-caret-right-fill',
                        image: "https://carolieto.com/uploads/products/1725627836_Change%20%20(2).jpg",
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
        getProductsBySubCategory: (state) => (categoryId, subcategoryId) => {
            // Find the category based on `categoryId` (assuming `sid` is a string)
            const category = state.categories.find(cat => cat.sid === categoryId);
            if (!category) return [];

            // Find the subcategory based on `subcategoryId`
            const subCategory = category.sub_category.find(sub => sub.sid === subcategoryId);
            return subCategory ? subCategory.products : [];
        }

    },
    mutations: {},
    actions: {}
}