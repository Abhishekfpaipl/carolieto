<template>

    <div class="container">
        <dizv class="d-flex justify-content-end align-items-center gap-2 mt-4">
            <p class=" mb-0">Change currency</p>
            <select v-model="currency" @change="switchCurrency">
                <option value="INR">INR</option>
                <option value="USD">USD</option>
            </select>
        </dizv>
        <div class="row row-cols-2 row-cols-md-4 row-cols-lg-4 g-3 my-5 justify-content-center">
            <div v-for="(product, index) in products" :key="index" class="col">
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
                        <strong><span v-if="product.currency === 'INR'">₹</span> {{ product.price.toFixed(2) }} <span
                                v-if="product.currency === 'INR'">{{
                                    product.currency }}</span> <span v-else> USD</span></strong>
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
import { mapGetters, } from 'vuex';
export default {
    name: 'ProductCard',
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(['getProducts']),
        products() {
            return this.getProducts;
        },
        currency() {
            return this.$store.state.currency;
        }
    },
    methods: {
        switchCurrency() {
            this.$store.dispatch('switchCurrency');
        }
        // ...mapActions(['switchCurrency']),
    },
}
</script>

<style scoped>
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