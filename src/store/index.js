
import { createStore } from "vuex";
import category from "./category";
export default createStore({
  state: {

    currency: 'INR',
    exchangeRate: 0.012,
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
      {
        sid: "kitchen-tap",
        image: "https://carolieto.com/uploads/products/1710398210_CKT%20001%20(2).jpeg",
        images: [
          "https://carolieto.com/uploads/products/1710398210_CKT%20001%20(2).jpeg",
          "https://carolieto.com/uploads/products/1710398210_CKT%20001%20(2).jpeg",
          "https://carolieto.com/uploads/products/1710398210_CKT%20001%20(2).jpeg",
          "https://carolieto.com/uploads/products/1710398210_CKT%20001%20(2).jpeg",
        ],
        category: 'kitchen',
        sub_category: ' kitchen-taps',
        name: "KITCHEN TAP",
        info: "Introducing our Brushed Gold Pull-Out Faucet: the perfect blend of style and functionality for your kitchen. With its elegant finish, durable construction, and convenient features like a pull-out sprayer and easy installation, it's the ideal upgrade for modern homes. ",
        color: [
          {
            image: 'https://carolieto.com/uploads/products/1712136660_Gold%20Colour.png',
            name: 'Golden',
          }
        ],
        price: 445,
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
            title: "Wide Range and Great Support",
            name: "Neha Sharma",
            description: "Loved the variety Carolieto offers. The staff was attentive and knowledgeable, making my shopping experience smooth and enjoyable. Will surely return for future needs!",
            rating: 4.5,
          },
          {
            title: "Top-notch Bath Accessories",
            name: "Puneet Kapoor",
            description: "Carolieto's accessories are high-quality and durable. The designs are modern, and the prices are fair for what you get. Perfect place for any bathroom upgrade.",
            rating: 3,
          }
        ]

      },
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
        sid: "focal-tri",
        image: "https://carolieto.com/uploads/products/1725628037_Change%20%20(5).jpg",
        images: [
          "https://carolieto.com/uploads/products/1725628037_Change%20%20(5).jpg",
          "https://carolieto.com/uploads/products/1712122568_ftri.jpg",
          "https://carolieto.com/uploads/products/1712123358_31.jpg",
          "https://carolieto.com/uploads/products/1711694018_20.jpg",
          "https://carolieto.com/uploads/products/1711694018_21.jpg",
        ],
        price: 445,
        name: "FOCAL TRI",
        category: "shower",
        sub_category: "ceiling shower",
        info: "Transform your bathroom architecture with Focal Tri a shower system that defies boundaries. Arrange the seven distinct tiles over your roof as you see it, creating a bespoke bathing space tailored to your preferences. With 2 Chroma Bar tiles for vibrant lighting, 2 featuring integrated speakers, 2 with cascading water flow, and 1 main tile encompassing both drain and mist flow, Focal Tri offers endless possibilities. Redefine your bathroom ambiance by arranging these tiles to suit your unique style and elevate your shower experience. Unleash your creativity with Focal Tri where each shower becomes a piece of your architectural masterpiece, bringing innovation and customization to your bathing sanctuary.",
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
            title: "Wide Range and Great Support",
            name: "Neha Sharma",
            description: "Loved the variety Carolieto offers. The staff was attentive and knowledgeable, making my shopping experience smooth and enjoyable. Will surely return for future needs!",
            rating: 4,
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
        sid: "8x8-inch-square",
        image: "https://carolieto.com/uploads/products/1725619960_COH002%20-%208X8%20Inch%20Square.jpg",
        images: [
          "https://carolieto.com/uploads/products/1725619960_COH002%20-%208X8%20Inch%20Square.jpg",
          "https://carolieto.com/uploads/products/1725619960_COH002%20-%208X8%20Inch%20Square.jpg",
          "https://carolieto.com/uploads/products/1725619960_COH002%20-%208X8%20Inch%20Square.jpg",
          "https://carolieto.com/uploads/products/1725619960_COH002%20-%208X8%20Inch%20Square.jpg",
        ],
        name: "8X8 Inch Square",
        category: "shower",
        sub_category: "overhead shower",
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
            title: "Value for Money",
            name: "Rajesh Malhotra",
            description: "The prices are very reasonable for the quality offered. The bath fittings are durable, stylish, and definitely worth every penny. Carolieto exceeded my expectations!",
            rating: 4.5,
          },
          {
            title: "Wide Range and Great Support",
            name: "Neha Sharma",
            description: "Loved the variety Carolieto offers. The staff was attentive and knowledgeable, making my shopping experience smooth and enjoyable. Will surely return for future needs!",
            rating: 4,
          },
          {
            title: "Top-notch Bath Accessories",
            name: "Puneet Kapoor",
            description: "Carolieto's accessories are high-quality and durable. The designs are modern, and the prices are fair for what you get. Perfect place for any bathroom upgrade.",
            rating: 4,
          }
        ]

      },
      {
        sid: "safari",
        image: "https://carolieto.com/uploads/products/1725614964_Safari.jpg",
        images: [
          "https://carolieto.com/uploads/products/1725614964_Safari.jpg",
          "https://carolieto.com/uploads/products/1725614964_Safari.jpg",
          "https://carolieto.com/uploads/products/1725614964_Safari.jpg",
        ],
        name: "Safari",
        category: "shower",
        price: 445,
        sub_category: "hand held shower",
        info: "",
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
            rating: 5,
          },
          {
            title: "Trendy and Functional Designs",
            name: "Amit Joshi",
            description: "The showroom is a hub for innovative and stylish designs. I found beautiful faucets and accessories that add a modern touch to my bathroom. Highly recommend Carolieto!",
            rating: 4,
          },

          {
            title: "Top-notch Bath Accessories",
            name: "Puneet Kapoor",
            description: "Carolieto's accessories are high-quality and durable. The designs are modern, and the prices are fair for what you get. Perfect place for any bathroom upgrade.",
            rating: 4,
          }
        ]

      },
      {
        sid: "mercury",
        image: "https://carolieto.com/uploads/products/1725614964_Safari.jpg",
        images: [
          "https://carolieto.com/uploads/products/1725614964_Safari.jpg",
          "https://carolieto.com/uploads/products/1725614964_Safari.jpg",
          "https://carolieto.com/uploads/products/1725614964_Safari.jpg",
        ],
        name: "Mercury",
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
  getters: {
    // getProducts: state => state.products,
    getProducts(state) {
      return state.products.map(product => {
        return {
          ...product,
          price: state.currency === 'INR'
            ? product.price
            : (product.price * state.exchangeRate),
          currency: state.currency
        };
      });
    },
    // getProduct: (state) => (productId) => {
    //   let index = state.products.findIndex(product => product.sid == productId);
    //   return state.products[index];
    // },
    getProduct: (state) => (productId) => {
      const index = state.products.findIndex(product => product.sid === productId);
      if (index === -1) return null; // Return null if the product is not found

      const product = state.products[index];

      // Assuming you have a conversion rate in your state
      const conversionRate = state.currency === 'USD' ? 0.012 : 1; // Example rate: 1 INR = 0.012 USD

      // Return the product with the adjusted price based on currency
      return {
        ...product,
        price: (product.price * conversionRate).toFixed(2), // Adjust price for selected currency
        currency: state.currency
      };
    }

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
  modules: {
    category: category,
  },
});
