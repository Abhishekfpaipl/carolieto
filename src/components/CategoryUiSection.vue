// PlantShop.vue
<template>
    <div class="container py-4">
        <!-- Category Filter Buttons -->
        <div class="d-flex gap-2 mb-4 flex-wrap">
            <button v-for="(category, index) in categories" :key="index" class="btn rounded-pill"
                :class="selectedCategory === category.name ? 'btn-dark' : 'btn-light'"
                @click="selectedCategory = category.name">
                <!-- <i class="bi bi-shop me-2"></i> -->
                <!-- <img v-if="category.icon" :src="category.icon" class="me-2" width="20" height="20" alt=""> -->
                {{ category.name }}
                <span v-if="category.isNew" class="badge bg-warning text-dark ms-2">New</span>
            </button>

            <!-- View and Filter buttons -->
            <div class="ms-auto">
                <button class="btn btn-light me-2">
                    <i class="bi bi-grid"></i> View
                </button>
                <button class="btn btn-light">
                    <i class="bi bi-funnel"></i> Filter
                </button>
            </div>
        </div>

        <!-- Product Grid -->
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
            <div v-for="(product, index) in filteredProducts" :key="index" class="col">
                <div class="card h-100 border-0 shadow-sm">
                    <div class="position-relative">
                        <img :src="product.image" class="card-img-top p-3" :alt="product.name">
                        <span class="position-absolute top-0 start-0 m-3 badge bg-light text-dark">
                            ⭐ {{ product.rating }}
                        </span>
                    </div>
                    <div class="card-body">
                        <p class="text-start text-md-center  small">{{ product.name }}</p>
                        <p class="text-start text-md-center text-primary fw-bold">{{ product.price.toFixed(2) }}</p>
                        <!-- <button class="btn btn-dark rounded-circle">
                            <i class="bi bi-cart-plus"></i>
                        </button> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PlantShop',
    data() {
        return {
            selectedCategory: 'Shower',
            // categories: [
            //     { name: 'All' },
            //     { name: 'Cactus', icon: 'path/to/cactus-icon.png' },
            //     { name: 'Rose', icon: 'path/to/rose-icon.png' },
            //     { name: 'Lily', icon: 'path/to/lily-icon.png' },
            //     { name: 'Monsera', icon: 'path/to/monsera-icon.png', isNew: true }
            // ],

            // plants: [
            //     {
            //         id: 1,
            //         name: 'Pisum Sativum',
            //         price: 210.00,
            //         rating: 4.5,
            //         category: 'All',
            //         image: 'https://carolieto.com/uploads/products/1716977521_Showers.jpg'
            //     },
            //     {
            //         id: 2,
            //         name: 'Cactus Sam',
            //         price: 100.00,
            //         rating: 4.5,
            //         category: 'Cactus',
            //         image: 'https://carolieto.com/uploads/products/1716977521_Showers.jpg'
            //     },
            //     {
            //         id: 3,
            //         name: 'Mini Green',
            //         price: 320.00,
            //         rating: 4.5,
            //         category: 'Monsera',
            //         image: 'https://carolieto.com/uploads/products/1716977521_Showers.jpg'
            //     },
            //     {
            //         id: 4,
            //         name: 'Cactus Sam',
            //         price: 221.00,
            //         rating: 4.5,
            //         category: 'Cactus',
            //         image: 'https://carolieto.com/uploads/products/1716977521_Showers.jpg'
            //     }
            // ] 
        }
    },
    computed: {
        filteredProducts() {
            if (this.selectedCategory.toLowerCase() === 'all') {
                return this.storeProducts;
            }
            return this.storeProducts.filter(product =>
                product.category.toLowerCase() === this.selectedCategory.toLowerCase()
            );
        },
        storeProducts() {
            return this.$store.getters['getProducts'];
        },
        categories() {
            return this.$store.getters['categoriesWithCurrency'];
        }
    }

}
</script>

<style scoped>
.card {
    transition: transform 0.2s;
}

.card:hover {
    transform: translateY(-5px);
}

.btn-circle {
    width: 40px;
    height: 40px;
    padding: 6px 0;
    border-radius: 50%;
}
</style>