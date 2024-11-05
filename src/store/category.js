export default {
    namespaced: true,
    state: {
        currency: 'INR',
        exchangeRate: 0.012,
        categories: [
            {
                id: 1,
                name: 'Shower',
                sid: 'shower',
                icon: 'bi bi-droplet',
                image: "/img/banner.jpg",
                products: [
                    {
                        sid: "dionysus",
                        image: "https://carolieto.com/uploads/products/1725627836_Change%20%20(2).jpg",
                        images: [
                            "https://carolieto.com/uploads/products/1725627836_Change%20%20(2).jpg",
                            "https://carolieto.com/uploads/products/1711694018_22.jpg",
                            "https://carolieto.com/uploads/products/1712123358_31.jpg",
                            "https://carolieto.com/uploads/products/1711694018_20.jpg",
                            "https://carolieto.com/uploads/products/1711694018_21.jpg",
                        ],
                        price: 445,
                        name: "DIONYSUS",
                        category: "shower",
                        sub_category: "ceiling shower",
                        info: "Step into a world of shower luxury with Dionysus the ultimate three row ceiling shower. Customize your shower experience with the touch of a button, offering the perfect blend of rain, cascade, and mist rows.",
                        color: [
                            {
                                image: 'https://carolieto.com/uploads/products/1712136660_Gold%20Colour.png',
                                name: 'Golden',
                            },
                            {
                                image: 'https://carolieto.com/uploads/products/1712136604_Chrome%20Colour.png',
                                name: 'Chrome',
                            },
                            {
                                image: 'https://carolieto.com/uploads/products/1712136627_Rose%20Gold%20Colour.png',
                                name: 'Rose Gold',
                            },
                            {
                                image: 'https://carolieto.com/uploads/products/1712136693_Gun%20Grey%20Colour.png',
                                name: 'Gun Grey',
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
                                rating: 4.5,
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
                                rating: 3,
                            },
                        ]
                    },
                    {
                        sid: "10-inch-round-flat",
                        image: "https://carolieto.com/uploads/products/1725619885_COH001%20-%2010%20Inch%20Round%20Flat.jpg",
                        images: [
                            "https://carolieto.com/uploads/products/1725619885_COH001%20-%2010%20Inch%20Round%20Flat.jpg",
                            "https://carolieto.com/uploads/products/1725619885_COH001%20-%2010%20Inch%20Round%20Flat.jpg",
                            "https://carolieto.com/uploads/products/1725619885_COH001%20-%2010%20Inch%20Round%20Flat.jpg",
                        ],
                        price: 445,
                        name: "10 Inch Round Flat",
                        category: "shower",
                        sub_category: "overhead shower",
                        info: "Step into a world of shower luxury with Dionysus the ultimate three row ceiling shower. Customize your shower experience with the touch of a button, offering the perfect blend of rain, cascade, and mist rows.",
                        color: [
                            {
                                image: 'https://carolieto.com/uploads/products/1712136660_Gold%20Colour.png',
                                name: 'Golden',
                            },
                            {
                                image: 'https://carolieto.com/uploads/products/1712136604_Chrome%20Colour.png',
                                name: 'Chrome',
                            },
                            {
                                image: 'https://carolieto.com/uploads/products/1712136627_Rose%20Gold%20Colour.png',
                                name: 'Rose Gold',
                            },
                            {
                                image: 'https://carolieto.com/uploads/products/1712136693_Gun%20Grey%20Colour.png',
                                name: 'Gun Grey',
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
                                rating: 4.5,
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
                                rating: 3,
                            },
                        ]
                    },
                    {
                        sid: "mercury-hs",
                        image: "https://carolieto.com/uploads/products/1725614964_Safari.jpg",
                        images: [
                            "https://carolieto.com/uploads/products/1725614964_Safari.jpg",
                            "https://carolieto.com/uploads/products/1725614964_Safari.jpg",
                            "https://carolieto.com/uploads/products/1725614964_Safari.jpg",
                        ],
                        name: "Mercury HS",
                        category: "shower",
                        sub_category: "hand held shower",
                        info: "",
                        price: 445,
                        color: [
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
                                rating: 5,
                            }
                        ]

                    },
                    {
                        sid: "sqfs",
                        image: "https://carolieto.com/uploads/products/1719223995_CHF008%20-%20SQFS.jpg",
                        images: [
                            "https://carolieto.com/uploads/products/1719223995_CHF008%20-%20SQFS.jpg",
                            "https://carolieto.com/uploads/products/1719223995_CHF008%20-%20SQFS.jpg",
                            "https://carolieto.com/uploads/products/1719223995_CHF008%20-%20SQFS.jpg",
                        ],
                        name: "SQFS",
                        category: "shower",
                        sub_category: "health faucet",
                        info: "",
                        price: 445,
                        color: [
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
                                rating: 5,
                            }
                        ]

                    },
                ]
            },
            {
                id: 2,
                name: 'Kitchen',
                sid: 'kitchen',
                icon: 'bi bi-house-door',
                image: "/img/banner.jpg",
                products: [
                    {
                        sid: "kitchen-tap",
                        image: "https://carolieto.com/uploads/products/1710398210_CKT%20001%20(2).jpeg",
                        images: [
                            "https://carolieto.com/uploads/products/1710398210_CKT%20001%20(2).jpeg",
                            "https://carolieto.com/uploads/products/1710398210_CKT%20001%20(2).jpeg",
                            "https://carolieto.com/uploads/products/1710398210_CKT%20001%20(2).jpeg",
                        ],
                        price: 445,
                        name: "KITCHEN TAP",
                        category: "kitchen",
                        sub_category: "kitchen taps",
                        info: "Step into a world of shower luxury with Dionysus the ultimate three row ceiling shower. Customize your shower experience with the touch of a button, offering the perfect blend of rain, cascade, and mist rows.",
                        color: [
                            {
                                image: 'https://carolieto.com/uploads/products/1712136660_Gold%20Colour.png',
                                name: 'Golden',
                            },
                            {
                                image: 'https://carolieto.com/uploads/products/1712136604_Chrome%20Colour.png',
                                name: 'Chrome',
                            },
                            {
                                image: 'https://carolieto.com/uploads/products/1712136627_Rose%20Gold%20Colour.png',
                                name: 'Rose Gold',
                            },
                            {
                                image: 'https://carolieto.com/uploads/products/1712136693_Gun%20Grey%20Colour.png',
                                name: 'Gun Grey',
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
                                rating: 4.5,
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
                                rating: 3,
                            },
                        ]
                    },
                    {
                        sid: "luca",
                        image: "https://carolieto.com/uploads/products/1725611693_Luca.jpg",
                        images: [
                            "https://carolieto.com/uploads/products/1725611693_Luca.jpg",
                            "https://carolieto.com/uploads/products/1716009285_1%20CKS001.jpg",
                            "https://carolieto.com/uploads/products/1716009432_2.%20CKS001.jpg",
                        ],
                        category: 'kitchen',
                        sub_category: 'kitchen sinks',
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
                        sid: "ccs-001",
                        image: "https://carolieto.com/uploads/products/1718102027_CCV014%20-%201.jpg",
                        images: [
                            "https://carolieto.com/uploads/products/1718102027_CCV014%20-%201.jpg",
                            "https://carolieto.com/uploads/products/1718102027_CCV014%20-%201.jpg",
                            "https://carolieto.com/uploads/products/1718102027_CCV014%20-%201.jpg",
                            "https://carolieto.com/uploads/products/1718102027_CCV014%20-%201.jpg",
                        ],
                        category: 'kitchen',
                        sub_category: 'copper kitchen sink',
                        name: "CCS 001",
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
                                rating: 4,
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
                                title: "Top-notch Bath Accessories",
                                name: "Puneet Kapoor",
                                description: "Carolieto's accessories are high-quality and durable. The designs are modern, and the prices are fair for what you get. Perfect place for any bathroom upgrade.",
                                rating: 5,
                            }
                        ]

                    },
                ]
            },
            {
                id: 3,
                name: 'Diverters & Mixers',
                sid: 'diverters-mixers',
                icon: 'bi bi-gear',
                image: "/img/banner.jpg",
                products: [
                    {
                        sid: "single-lever-diverters-single-outlet",
                        image: "https://carolieto.com/uploads/products/1709639122_Single%20Lever%20Concealed%20One%20Flow.jpg",
                        images: [
                            "https://carolieto.com/uploads/products/1709639122_Single%20Lever%20Concealed%20One%20Flow.jpg",
                            "https://carolieto.com/uploads/products/1709639122_Single%20Lever%20Concealed%20One%20Flow.jpg",
                            "https://carolieto.com/uploads/products/1709639122_Single%20Lever%20Concealed%20One%20Flow.jpg",
                        ],
                        category: 'diverters-mixers',
                        sub_category: 'single lever',
                        name: "SINGLE LEVER DIVERTERS (SINGLE OUTLET)",
                        info: 'Discover the epitome of shower control with our Single Lever Concealed Type Diverter, designed for optimal simplicity and efficiency. Crafted with precision and reliability in mind, our diverter ensures consistent performance and durability. Elevate your shower experience with our Single Lever Concealed Type Diverter, where ease of use meets sophistication for a truly luxurious bathing experience.',
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
                                rating: 4,
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
                                title: "Top-notch Bath Accessories",
                                name: "Puneet Kapoor",
                                description: "Carolieto's accessories are high-quality and durable. The designs are modern, and the prices are fair for what you get. Perfect place for any bathroom upgrade.",
                                rating: 5,
                            }
                        ]
                    },
                    {
                        sid: "thermatic-two-flow",
                        image: "https://carolieto.com/uploads/products/1709641357_Thermatic%20Two%20Flow.jpg",
                        images: [
                            "https://carolieto.com/uploads/products/1709641357_Thermatic%20Two%20Flow.jpg",
                            "https://carolieto.com/uploads/products/1709641357_Thermatic%20Two%20Flow.jpg",
                            "https://carolieto.com/uploads/products/1709641357_Thermatic%20Two%20Flow.jpg",
                        ],
                        category: 'diverters-mixers',
                        sub_category: 'thermatic',
                        name: "THERMATIC (TWO FLOW)",
                        info: 'Upgrade your shower experience with our Two-Way Thermostatic Concealed Diverter, the epitome of simplicity and efficiency. Its sleek, concealed design saves space and adds a touch of elegance to your bathroom décor. Transform your shower routine into a luxurious retreat with this innovative solution.',
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
                                rating: 4,
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
                                title: "Top-notch Bath Accessories",
                                name: "Puneet Kapoor",
                                description: "Carolieto's accessories are high-quality and durable. The designs are modern, and the prices are fair for what you get. Perfect place for any bathroom upgrade.",
                                rating: 5,
                            }
                        ]
                    },
                    {
                        sid: "vimitro-three-flow",
                        image: "https://carolieto.com/uploads/products/1709641357_Thermatic%20Two%20Flow.jpg",
                        images: [
                            "https://carolieto.com/uploads/products/1709641357_Thermatic%20Two%20Flow.jpg",
                            "https://carolieto.com/uploads/products/1709641357_Thermatic%20Two%20Flow.jpg",
                            "https://carolieto.com/uploads/products/1709641357_Thermatic%20Two%20Flow.jpg",
                        ],
                        category: 'diverters-mixers',
                        sub_category: 'vimitro',
                        name: "VIMITRO (THREE FLOW)",
                        info: 'Upgrade your shower with the Three-Way Thermostatic Concealed Diverter, offering precise temperature control, effortless switching between water outlets, and a sleek, space-saving design. Experience the ultimate shower customization for a luxurious and comfortable bathing experience every time.',
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
                                rating: 4,
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
                                title: "Top-notch Bath Accessories",
                                name: "Puneet Kapoor",
                                description: "Carolieto's accessories are high-quality and durable. The designs are modern, and the prices are fair for what you get. Perfect place for any bathroom upgrade.",
                                rating: 5,
                            }
                        ]
                    },
                    {
                        sid: "shower-engine-3-outlet",
                        image: "https://carolieto.com/uploads/products/1710747642_3%20Flow%20Shower%20Engine.jpg",
                        images: [
                            "https://carolieto.com/uploads/products/1710747642_3%20Flow%20Shower%20Engine.jpg",
                            "https://carolieto.com/uploads/products/1710747642_3%20Flow%20Shower%20Engine.jpg",
                            "https://carolieto.com/uploads/products/1710747642_3%20Flow%20Shower%20Engine.jpg",
                        ],
                        category: 'diverters-mixers',
                        sub_category: 'shower engine',
                        name: "SHOWER ENGINE 3 OUTLET",
                        info: 'Experience the perfect balance of comfort and simplicity with Shower Engine 3 Flow. With three customizable outlets, enjoy a refreshing shower. Upgrade your daily routine effortlessly.',
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
                                rating: 4,
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
                                title: "Top-notch Bath Accessories",
                                name: "Puneet Kapoor",
                                description: "Carolieto's accessories are high-quality and durable. The designs are modern, and the prices are fair for what you get. Perfect place for any bathroom upgrade.",
                                rating: 5,
                            }
                        ]
                    },
                ]
            },
            {
                id: 4,
                name: 'Faucets',
                sid: 'faucets',
                icon: 'bi bi-arrow-right-circle',
                image: "/img/banner.jpg",
                products: [
                    {
                        sid: "diamante",
                        image: "https://carolieto.com/uploads/products/1719216233_1.%20CPS001%20-%20Diamante%20Bath%20Spout.jpg",
                        images: [
                            "https://carolieto.com/uploads/products/1719216233_1.%20CPS001%20-%20Diamante%20Bath%20Spout.jpg",
                            "https://carolieto.com/uploads/products/1719216233_1.%20CPS001%20-%20Diamante%20Bath%20Spout.jpg",
                            "https://carolieto.com/uploads/products/1719216233_1.%20CPS001%20-%20Diamante%20Bath%20Spout.jpg",
                        ],
                        category: 'faucets',
                        sub_category: 'bath spout',
                        name: "DIAMANTE",
                        info: 'Diamante Bath Spout - Wall Mounted, Bucket Filler.',
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
                                rating: 4,
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
                                title: "Top-notch Bath Accessories",
                                name: "Puneet Kapoor",
                                description: "Carolieto's accessories are high-quality and durable. The designs are modern, and the prices are fair for what you get. Perfect place for any bathroom upgrade.",
                                rating: 5,
                            }
                        ]
                    },
                    {
                        sid: "bullet-series",
                        image: "https://carolieto.com/uploads/products/1709374596_1.jpg",
                        images: [
                            "https://carolieto.com/uploads/products/1709374596_1.jpg",
                            "https://carolieto.com/uploads/products/1709374596_1.jpg",
                            "https://carolieto.com/uploads/products/1709374596_1.jpg",
                        ],
                        category: 'faucets',
                        sub_category: 'wall mounted',
                        name: "BULLET SERIES",
                        info: "A Connoisseur's delight.Unlike any Shower Column you would have ever seen, this is any Interior Designer's highest recommendation.",
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
                                rating: 4,
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
                                title: "Top-notch Bath Accessories",
                                name: "Puneet Kapoor",
                                description: "Carolieto's accessories are high-quality and durable. The designs are modern, and the prices are fair for what you get. Perfect place for any bathroom upgrade.",
                                rating: 5,
                            }
                        ]
                    },
                    {
                        sid: "victoria-filler",
                        image: "https://carolieto.com/uploads/products/1709374887_1.jpg",
                        images: [
                            "https://carolieto.com/uploads/products/1709374887_1.jpg",
                            "https://carolieto.com/uploads/products/1709374887_1.jpg",
                            "https://carolieto.com/uploads/products/1709374887_1.jpg",
                        ],
                        category: 'faucets',
                        sub_category: 'base mounted',
                        name: "VICTORIA FILLER",
                        info: "An elegant Floor-mounted Designer Bathtub Filler, to prepare your bath with the opulence, which is the subject of dreams.The symphony of water writes a symphony of water in all its wonderful shapes andforms enjoy your bath.",
                        price: 445,
                        color: [
                            {
                                image: 'https://carolieto.com/uploads/products/1712136604_Chrome%20Colour.png',
                                name: 'Chrome',
                            },
                            {
                                image: 'https://carolieto.com/uploads/products/1712136660_Gold%20Colour.png',
                                name: 'Gold',
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
                                rating: 4,
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
                                title: "Top-notch Bath Accessories",
                                name: "Puneet Kapoor",
                                description: "Carolieto's accessories are high-quality and durable. The designs are modern, and the prices are fair for what you get. Perfect place for any bathroom upgrade.",
                                rating: 5,
                            }
                        ]
                    },
                ]
            },
            {
                id: 5,
                name: 'Basin',
                sid: 'basin',
                icon: 'bi bi-droplet-half',
                image: "/img/banner.jpg",
                products: [
                    {
                        sid: "quartz-wood",
                        image: "https://carolieto.com/uploads/products/1709206509_CSB-002.jpg",
                        images: [
                            "https://carolieto.com/uploads/products/1709206509_CSB-002.jpg",
                            "https://carolieto.com/uploads/products/1711612641_CSB%20002.jpg",
                        ],
                        category: 'basin',
                        sub_category: 'standalone basin',
                        name: "QUARTZ  WOOD",
                        info: "Presenting our square standalone basin with a quartz basin nestled within, encased in a distinctive fluted Valsadi Sag along its curved surface area. Crafted from pre-treated waterproof and termite-proof wood, this basin seamlessly merges modern aesthetics with enduring quality, making it a sophisticated addition to your personal space.",
                        price: 445,
                        color: [
                            {
                                image: 'https://carolieto.com/uploads/products/1712142409_47.jpg',
                                name: 'Light yellow',
                            },
                            {
                                image: 'https://carolieto.com/uploads/products/1712142840_48.jpg',
                                name: 'Orange',
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
                                rating: 4,
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
                                title: "Top-notch Bath Accessories",
                                name: "Puneet Kapoor",
                                description: "Carolieto's accessories are high-quality and durable. The designs are modern, and the prices are fair for what you get. Perfect place for any bathroom upgrade.",
                                rating: 5,
                            }
                        ]
                    },
                    {
                        sid: "ctt-008",
                        image: "https://carolieto.com/uploads/products/1708337893_1.jpg",
                        images: [
                            "https://carolieto.com/uploads/products/1708337893_1.jpg",
                            "https://carolieto.com/uploads/products/1711625657_4.jpg",
                            "https://carolieto.com/uploads/products/1711625657_5.jpg",
                            "https://carolieto.com/uploads/products/1711625657_2.jpg",
                        ],
                        category: 'basin',
                        sub_category: 'handmade basin',
                        name: "CTT 008",
                        info: "Introducing our unique basin design, adorned with an enchanting triangular pattern along the periphery.Elevate your space with this distinctive ceramic masterpiece, blending functionality with captivating aesthetics. The triangular motif adds a modern touch, creating a visual symphony that transforms your bathroom into a haven of style and sophistication. Immerse yourself in the beauty of thoughtful design – where every angle tells a story of contemporary elegance.",
                        price: 445,
                        color: [
                            {
                                image: 'https://carolieto.com/uploads/products/1712136693_Gun%20Grey%20Colour.png',
                                name: 'Gun Grey',
                            },
                            {
                                image: 'https://carolieto.com/uploads/products/1712142409_47.jpg',
                                name: 'Light Yellow',
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
                                rating: 4,
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
                                title: "Top-notch Bath Accessories",
                                name: "Puneet Kapoor",
                                description: "Carolieto's accessories are high-quality and durable. The designs are modern, and the prices are fair for what you get. Perfect place for any bathroom upgrade.",
                                rating: 5,
                            }
                        ]
                    },
                    {
                        sid: "imperale",
                        image: "https://carolieto.com/uploads/products/1709617727_CTT%20001-fococlipping-HD.jpeg",
                        images: [
                            "https://carolieto.com/uploads/products/1709617727_CTT%20001-fococlipping-HD.jpeg",
                            "https://carolieto.com/uploads/products/1711456178_IMPERALE%20-%20CTT%20001.jpg",
                        ],
                        category: 'basin',
                        sub_category: 'table top',
                        name: "IMPERALE",
                        info: "Immerse yourself in the epitome of opulence with the IMPERALE Table Top Basin an expansive rectangular washbasin that redefines luxury and sophistication in your bathroom space.",
                        price: 445,
                        color: [
                            {
                                image: 'https://carolieto.com/uploads/products/1712136604_Chrome%20Colour.png',
                                name: 'Chrome',
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
                                rating: 4,
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
                                title: "Top-notch Bath Accessories",
                                name: "Puneet Kapoor",
                                description: "Carolieto's accessories are high-quality and durable. The designs are modern, and the prices are fair for what you get. Perfect place for any bathroom upgrade.",
                                rating: 5,
                            }
                        ]
                    },
                    {
                        sid: "armani",
                        image: "https://carolieto.com/uploads/products/1710229118_9.jpg",
                        images: [
                            "https://carolieto.com/uploads/products/1710229118_9.jpg",
                            "https://carolieto.com/uploads/products/1711518638_ARMANI%20-%20CUC%20001.jpg",
                        ],
                        category: 'basin',
                        sub_category: 'under counter',
                        name: "ARMANI",
                        info: "Experience the artistry of modern design with the ARMANI Rectangular Under Counter Wash Basin an embodiment of sophistication and practical elegance. Let this basin redefine the aesthetics of your bathroom, turning every visit into a moment of refined beauty and a celebration of the seamless integration of form and functionality.",
                        price: 445,
                        color: [
                            {
                                image: 'https://carolieto.com/uploads/products/1712136604_Chrome%20Colour.png',
                                name: 'Chrome',
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
                                rating: 4,
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
                                title: "Top-notch Bath Accessories",
                                name: "Puneet Kapoor",
                                description: "Carolieto's accessories are high-quality and durable. The designs are modern, and the prices are fair for what you get. Perfect place for any bathroom upgrade.",
                                rating: 5,
                            }
                        ]
                    },
                    {
                        sid: "crofton",
                        image: "https://carolieto.com/uploads/products/1709705639_CHP%20001-fococlipping-HD.jpeg",
                        images: [
                            "https://carolieto.com/uploads/products/1709705639_CHP%20001-fococlipping-HD.jpeg",
                            "https://carolieto.com/uploads/products/1711518464_CROFTON%20-%20CHP%20001.jpg",
                        ],
                        category: 'basin',
                        sub_category: 'one piece basin',
                        name: "CROFTON",
                        info: "The rectangular shape of the CROFTON basin introduces a clean and contemporary aesthetic, while the inclusion of a half pedestal ensures a modern and space-efficient design. Meticulously crafted, the basin's surface showcases impeccable finishing.",
                        price: 445,
                        color: [
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
                                rating: 4,
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
                                title: "Top-notch Bath Accessories",
                                name: "Puneet Kapoor",
                                description: "Carolieto's accessories are high-quality and durable. The designs are modern, and the prices are fair for what you get. Perfect place for any bathroom upgrade.",
                                rating: 5,
                            }
                        ]
                    },
                ]
            },
            {
                id: 6,
                name: 'Water Closet',
                sid: 'water-closet',
                icon: 'bi bi-water',
                image: "/img/banner.jpg",
                products: [
                    {
                        sid: "novella",
                        image: "https://carolieto.com/uploads/products/1709377169_NOVELLA.jpg",
                        images: [
                            "https://carolieto.com/uploads/products/1709377169_NOVELLA.jpg",
                            "https://carolieto.com/uploads/products/1709377169_NOVELLA.jpg",
                        ],
                        category: 'water closet',
                        sub_category: 'wall hung',
                        name: "NOVELLA",
                        info: "The gentle curves of the NOVELLA evoke a sense of graceful fluidity, creating a visual symphony that transcends the ordinary. The wall-hung installation not only imparts a sense of airy lightness to your bathroom but also maximizes floor space, making it an ideal choice for both compact and expansive settings.",
                        price: 445,
                        color: [
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
                                rating: 4,
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
                                title: "Top-notch Bath Accessories",
                                name: "Puneet Kapoor",
                                description: "Carolieto's accessories are high-quality and durable. The designs are modern, and the prices are fair for what you get. Perfect place for any bathroom upgrade.",
                                rating: 5,
                            }
                        ]
                    },
                    {
                        sid: "modena",
                        image: "https://carolieto.com/uploads/products/1709378129_MODENA.jpg",
                        images: [
                            "https://carolieto.com/uploads/products/1709378129_MODENA.jpg",
                            "https://carolieto.com/uploads/products/1711455233_MODENA%20-%20CB%20001.jpg",
                        ],
                        category: 'water closet',
                        sub_category: 'bidet',
                        name: "MODENA",
                        info: "What sets the MODENA Bidet Toilet apart is its dedication to enhancing personal hygiene, especially for women.The thoughtfully designed rectangular shape provides ample space for a comprehensive and gentle cleansing experience. The bidet feature, with adjustable settings, ensures a customizable and precise wash, offering a level of comfort and cleanliness that goes beyond conventional expectations.",
                        price: 445,
                        color: [
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
                                rating: 4,
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
                                title: "Top-notch Bath Accessories",
                                name: "Puneet Kapoor",
                                description: "Carolieto's accessories are high-quality and durable. The designs are modern, and the prices are fair for what you get. Perfect place for any bathroom upgrade.",
                                rating: 5,
                            }
                        ]
                    },
                    {
                        sid: "penedenza",
                        image: "https://carolieto.com/uploads/products/1709379481_PENEDENZA.jpg",
                        images: [
                            "https://carolieto.com/uploads/products/1709379481_PENEDENZA.jpg",
                            "https://carolieto.com/uploads/products/1711455997_PENEDENZA%20-%20CB%20002.jpg",
                        ],
                        category: 'water closet',
                        sub_category: 'one piece toilet',
                        name: "PENEDENZA",
                        info: "Step into the realm of contemporary luxury with the PENEDENZA One-Piece Toilet,a rectangular masterpiece that seamlessly combines form and function.A rectangular masterpiece that seamlessly combines form and function, setting new standards for sophistication in modern bathroom design.",
                        price: 445,
                        color: [
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
                                rating: 4,
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
                                title: "Top-notch Bath Accessories",
                                name: "Puneet Kapoor",
                                description: "Carolieto's accessories are high-quality and durable. The designs are modern, and the prices are fair for what you get. Perfect place for any bathroom upgrade.",
                                rating: 5,
                            }
                        ]
                    },
                    {
                        sid: "gala",
                        image: "https://carolieto.com/uploads/products/1708423631_GALA.jpg",
                        images: [
                            "https://carolieto.com/uploads/products/1708423631_GALA.jpg",
                            "https://carolieto.com/uploads/products/1711456044_GALA%20-%20CU%20001.jpg",
                        ],
                        category: 'water closet',
                        sub_category: 'urinal',
                        name: "GALA",
                        info: "The oblong silhouette of the GALA Ceramic Urinal is a testament to contemporary elegance, seamlessly marrying sleek lines and a refined form.Meticulously crafted from high-quality ceramic, the surface exhibits a flawless finish that exudes a subtle brilliance, transforming your bathroom into a haven of modern luxury.",
                        price: 445,
                        color: [
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
                                rating: 4,
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
                                title: "Top-notch Bath Accessories",
                                name: "Puneet Kapoor",
                                description: "Carolieto's accessories are high-quality and durable. The designs are modern, and the prices are fair for what you get. Perfect place for any bathroom upgrade.",
                                rating: 5,
                            }
                        ]
                    },
                ]
            },
            {
                id: 7,
                name: 'Wellness',
                sid: 'wellness',
                icon: 'bi bi-heart',
                image: "/img/banner.jpg",
                products: [
                    {
                        sid: "sauna-bath-system",
                        image: "https://carolieto.com/uploads/products/1710493943_Carolieto%20product%20.jpg",
                        images: [
                            "https://carolieto.com/uploads/products/1710493943_Carolieto%20product%20.jpg",
                            "https://carolieto.com/uploads/products/1710493943_Carolieto%20product%20.jpg",
                            "https://carolieto.com/uploads/products/1710493943_Carolieto%20product%20.jpg",
                        ],
                        category: 'wellness',
                        sub_category: 'sauna',
                        name: "SAUNA BATH SYSTEM",
                        info: "",
                        price: 445,
                        color: [
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
                                rating: 4,
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
                                title: "Top-notch Bath Accessories",
                                name: "Puneet Kapoor",
                                description: "Carolieto's accessories are high-quality and durable. The designs are modern, and the prices are fair for what you get. Perfect place for any bathroom upgrade.",
                                rating: 5,
                            }
                        ]
                    },
                ]
            },
            {
                id: 8,
                name: 'Bath Tub',
                sid: 'bath-tub',
                icon: 'bi bi-inbox',
                image: "/img/banner.jpg",
                products: [
                    {
                        sid: "copper-polished-outer-nickel-inner",
                        image: "https://carolieto.com/uploads/products/1716809498_CCB001%20-%201.jpg",
                        images: [
                            "https://carolieto.com/uploads/products/1716809498_CCB001%20-%201.jpg",
                            "https://carolieto.com/uploads/products/1716810045_CCB001%20-%202.jpg",
                            "https://carolieto.com/uploads/products/1716809498_CCB001%20-%201.jpg",
                        ],
                        category: 'bath tub',
                        sub_category: 'copper tub',
                        name: "COPPER POLISHED OUTER NICKEL INNER",
                        info: "",
                        price: 445,
                        color: [
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
                                rating: 4,
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
                                title: "Top-notch Bath Accessories",
                                name: "Puneet Kapoor",
                                description: "Carolieto's accessories are high-quality and durable. The designs are modern, and the prices are fair for what you get. Perfect place for any bathroom upgrade.",
                                rating: 5,
                            }
                        ]
                    },
                    {
                        sid: "delta-collection",
                        image: "https://carolieto.com/uploads/products/1710325238_Delta%20Collection%20Cut%20Out.jpg",
                        images: [
                            "https://carolieto.com/uploads/products/1710325238_Delta%20Collection%20Cut%20Out.jpg",
                            "https://carolieto.com/uploads/products/1710325238_Delta%20Collection%20Cut%20Out.jpg",
                        ],
                        category: 'bath tub',
                        sub_category: 'jacuzzi',
                        name: "DELTA COLLECTION",
                        info: "Our pride lies in offering the best quality and unique variety.",
                        price: 445,
                        color: [
                            {
                                image: 'https://carolieto.com/uploads/products/1712136604_Chrome%20Colour.png',
                                name: 'Chrome',
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
                                rating: 4,
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
                                title: "Top-notch Bath Accessories",
                                name: "Puneet Kapoor",
                                description: "Carolieto's accessories are high-quality and durable. The designs are modern, and the prices are fair for what you get. Perfect place for any bathroom upgrade.",
                                rating: 5,
                            }
                        ]
                    },
                    {
                        sid: "valeriana-collection",
                        image: "https://carolieto.com/uploads/products/1710745827_Valeriana.jpg",
                        images: [
                            "https://carolieto.com/uploads/products/1710745827_Valeriana.jpg",
                            "https://carolieto.com/uploads/products/1712140860_Valeriana%20Black%202.jpg",
                            "https://carolieto.com/uploads/products/1712140860_Valeriana%20Black%203.jpg",
                        ],
                        category: 'bath tub',
                        sub_category: 'jacuzzi',
                        name: "VALERIANA COLLECTION",
                        info: "The symphony of design & dimension beauty & perfection.",
                        price: 445,
                        color: [
                            {
                                image: 'https://carolieto.com/uploads/products/1712136604_Chrome%20Colour.png',
                                name: 'Chrome',
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
                                rating: 4,
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
                                title: "Top-notch Bath Accessories",
                                name: "Puneet Kapoor",
                                description: "Carolieto's accessories are high-quality and durable. The designs are modern, and the prices are fair for what you get. Perfect place for any bathroom upgrade.",
                                rating: 5,
                            }
                        ]
                    },
                ]
            },
            {
                id: 9,
                name: 'Accessories',
                sid: 'accessories',
                icon: 'bi bi-box-seam',
                image: "/img/banner.jpg",
                products: [
                    {
                        sid: "liquid-soap-dispenser",
                        image: "https://carolieto.com/uploads/products/1710415491_Diba%20-%20CA001.jpg",
                        images: [
                            "https://carolieto.com/uploads/products/1710415491_Diba%20-%20CA001.jpg",
                            "https://carolieto.com/uploads/products/1710415491_Diba%20-%20CA001.jpg",
                        ],
                        category: 'accessories',
                        sub_category: 'dibalo',
                        name: "LIQUID SOAP DISPENSER",
                        info: "",
                        price: 445,
                        color: [
                            {
                                image: 'https://carolieto.com/uploads/products/1712136693_Gun%20Grey%20Colour.png',
                                name: 'Gun Grey',
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
                                rating: 4,
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
                                title: "Top-notch Bath Accessories",
                                name: "Puneet Kapoor",
                                description: "Carolieto's accessories are high-quality and durable. The designs are modern, and the prices are fair for what you get. Perfect place for any bathroom upgrade.",
                                rating: 5,
                            }
                        ]
                    },
                    {
                        sid: "towel-ring",
                        image: "https://carolieto.com/uploads/products/1710417305_CA002-TR%20Towel%20Ring.jpg",
                        images: [
                            "https://carolieto.com/uploads/products/1710417305_CA002-TR%20Towel%20Ring.jpg",
                            "https://carolieto.com/uploads/products/1710417305_CA002-TR%20Towel%20Ring.jpg",
                        ],
                        category: 'accessories',
                        sub_category: 'coasta',
                        name: "TOWEL RING",
                        info: "",
                        price: 445,
                        color: [
                            {
                                image: 'https://carolieto.com/uploads/products/1712136693_Gun%20Grey%20Colour.png',
                                name: 'Gun Grey',
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
                                rating: 4,
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
                                title: "Top-notch Bath Accessories",
                                name: "Puneet Kapoor",
                                description: "Carolieto's accessories are high-quality and durable. The designs are modern, and the prices are fair for what you get. Perfect place for any bathroom upgrade.",
                                rating: 5,
                            }
                        ]
                    },
                    {
                        sid: "soap-holder-round",
                        image: "https://carolieto.com/uploads/products/1710418284_CA003-SH%20Soap%20Holder%20-%20Round.jpg",
                        images: [
                            "https://carolieto.com/uploads/products/1710418284_CA003-SH%20Soap%20Holder%20-%20Round.jpg",
                            "https://carolieto.com/uploads/products/1710418284_CA003-SH%20Soap%20Holder%20-%20Round.jpg",
                        ],
                        category: 'accessories',
                        sub_category: 'vanity',
                        name: "SOAP HOLDER-ROUND",
                        info: "",
                        price: 445,
                        color: [
                            {
                                image: 'https://carolieto.com/uploads/products/1712136693_Gun%20Grey%20Colour.png',
                                name: 'Gun Grey',
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
                                rating: 4,
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
                                title: "Top-notch Bath Accessories",
                                name: "Puneet Kapoor",
                                description: "Carolieto's accessories are high-quality and durable. The designs are modern, and the prices are fair for what you get. Perfect place for any bathroom upgrade.",
                                rating: 5,
                            }
                        ]
                    },
                    {
                        sid: "tooth-brush-holder",
                        image: "https://carolieto.com/uploads/products/1710419385_CA004-BH%20Tooth%20Brush%20Holder.jpg",
                        images: [
                            "https://carolieto.com/uploads/products/1710419385_CA004-BH%20Tooth%20Brush%20Holder.jpg",
                            "https://carolieto.com/uploads/products/1710419385_CA004-BH%20Tooth%20Brush%20Holder.jpg",
                        ],
                        category: 'accessories',
                        sub_category: 'adam',
                        name: "TOOTH BRUSH HOLDER",
                        info: "",
                        price: 445,
                        color: [
                            {
                                image: 'https://carolieto.com/uploads/products/1712136693_Gun%20Grey%20Colour.png',
                                name: 'Gun Grey',
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
                                rating: 4,
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
                                title: "Top-notch Bath Accessories",
                                name: "Puneet Kapoor",
                                description: "Carolieto's accessories are high-quality and durable. The designs are modern, and the prices are fair for what you get. Perfect place for any bathroom upgrade.",
                                rating: 5,
                            }
                        ]
                    },
                ]
            }
        ],
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
        },
        categoriesWithCurrency(state) {
            return state.categories.map(category => ({
                ...category,
                products: category.products.map(product => ({
                    ...product,
                    price: state.currency === 'INR' ? product.price
                        : (product.price * state.exchangeRate),
                    currency: state.currency
                }))
            }));
        },


    },
    mutations: {
        setCurrency(state, currency) {
            state.currency = currency;
        }, 
    },
    actions: {
        switchCurrency({ commit }, currency) {
            commit('setCurrency', currency);
        },
    },
}