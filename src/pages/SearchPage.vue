<template>
    <div class="container mb-5" style="padding-top: 60px;overflow-x: hidden">
        <!-- <h2 class="display-5 text-uppercase" style="color: var(--bg-primary);">Our Products</h2> -->

        <!-- Search and Filter Section -->
        <div class="row my-4">
            <div class="col-12 col-md-6 mb-3">
                <input type="text" v-model="searchQuery" class="form-control" placeholder="Search products..." />
            </div>
            <div class="col-12 col-md-6 mb-3">
                <select v-model="selectedCategory" class="form-select">
                    <option value="">All Categories</option>
                    <option v-for="category in categories" :key="category.sid" :value="category.sid">
                        {{ category.name }}
                    </option>
                </select>
            </div>
        </div>

        <!-- Product Cards Section -->
        <div class="row row-cols-2 row-cols-md-4 row-cols-lg-4 g-3 my-5 justify-content-center">
            <div v-for="(product, index) in filteredProducts" :key="index" class="col">
                <router-link :to="'/product-detail/' + product.sid"
                    class="card h-100 product-card rounded-4 p-3 bg-light text-decoration-none">
                    <!-- <div class="position-absolute top-0 end-0 p-2">
                        <button class="btn btn-link text-decoration-none">
                            <i class="bi bi-heart"></i>
                        </button>
                    </div> -->

                    <div class="text-center mb-3">
                        <img :src="product.image" :alt="product.name" class="img-fluid rounded-3"
                            style="max-height: 200px;">
                    </div>
                    <h5 class="text-uppercase mb-2">{{ product.name }}</h5>
                    <div class="d-md-flex justify-content-between align-items-center mb-2">
                        <strong>₹ {{ product.price.toFixed(2) }} INR</strong>
                        <div class="small">
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                        </div>
                    </div>

                    <div v-if="product.color" class="d-flex overflow-x-scroll gap-2 mb-3 justify-content-center"
                        id="scroll">
                        <img v-for="(color, index) in product.color" :key="index" :src="color.image"
                            class="btn rounded-circle p-0 border-0" style="width:40px;height:40px;">
                    </div>

                    <p class="text-muted small text-ellipsis3">{{ product.info }}</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchPage',
    data() {
        return {
            searchQuery: '',
            selectedCategory: '',
            // categories: [
            //     { name: 'Shower', sid: 'shower' },
            //     { name: 'Kitchen', sid: 'kitchen' },
            //     { name: 'Diverters & Mixers', sid: 'diverters-mixers' },
            //     { name: 'Faucets', sid: 'faucets' },
            //     { name: 'Basin', sid: 'basin' },
            //     { name: 'Water Closet', sid: 'water-closet' },
            //     { name: 'Wellness', sid: 'wellness' },
            //     { name: 'Bath Tub', sid: 'bath-tub' },
            //     { name: 'Accessories', sid: 'accessories' }
            // ]
        }
    },
    computed: {
        products() {
            return this.$store.getters.getProducts;
        },
        categories() {
            return this.$store.getters['category/getCategories']
        },
        filteredProducts() {
            return this.products.filter(product => {
                const matchesSearch = product.name.toLowerCase().includes(this.searchQuery.toLowerCase());
                const matchesCategory = this.selectedCategory ? product.category === this.selectedCategory : true;
                return matchesSearch && matchesCategory;
            });
        }
    }
}
</script>

<style scoped>
.product-card {
    transition: transform 0.2s;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.quantity-controls button {
    width: 30px;
    height: 30px;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.product-card {
    /* max-width: 300px; */
    transition: transform 0.2s;
}

.product-card:hover {
    transform: translateY(-5px);
}

.btn-link {
    color: #888;
}

.btn-link:hover {
    color: #ff4444;
}
</style>
