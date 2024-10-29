<template>

    <div class="container">
        <div class="row row-cols-2 row-cols-md-4 row-cols-lg-4 g-3 my-5">
            <div v-for="(product, index) in products" :key="index" class="col">
                <router-link :to="'/product-detail/' + product.sid"
                    class="card h-100 product-card rounded-4 p-3 bg-light text-decoration-none">
                    <div class="position-absolute top-0 end-0 p-2">
                        <button class="btn btn-link text-decoration-none">
                            <i class="bi bi-heart"></i>
                        </button>
                    </div>

                    <div class="text-center mb-3">
                        <img :src="product.image" :alt="product.name" class="img-fluid rounded-3"
                            style="max-height: 200px;">
                    </div>
                    <h5 class="text-uppercase mb-2">{{ product.name }}</h5>
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <strong>₹ {{ product.price.toFixed(2) }} INR</strong>
                        <div class="">
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                        </div>
                    </div>

                    <div v-if="product.color" class="d-flex gap-2 mb-3 justify-content-center">
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
    name: 'ProductCard',
    data() {
        return {
        }
    },
    computed: {
        products() {
            return this.$store.getters.getProducts
        }
    },
}
</script>

<style scoped>
.product-card {
    max-width: 300px;
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