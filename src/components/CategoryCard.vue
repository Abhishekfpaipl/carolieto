<template>
    <div>
        <div class="container-fluid px-0">
            <div class="row">
                <div class="col-12" v-for="(category, index) in categories" :key="index">
                    <router-link :to="'/category-list/' + category.sid" class="position-relative category-banner">
                        <img :src="category.image" alt="" class=""
                            style="height: 300px;width: 100%; object-fit: cover;object-position: left;">
                        <p class="position-absolute text-white fs-1 mb-0" style="right: 10%;top: 40%; bottom: 50%;">{{
                            category.name }}</p>
                    </router-link>
                    <div class="container">
                        <div class="row row-cols-2 row-col-md-3 row-cols-lg-5 g-2 my-4">
                            <div class="col" v-for="(product, subIndex) in category.products" :key="subIndex">
                                <router-link :to="'/product-detail/' + product.sid"
                                    class="card text-decoration-none text-dark h-100">
                                    <img :src="product.image" alt="" class="card-img-top"
                                        style="height: 250px;object-fit: cover; object-position: top;width: 100%;">
                                    
                                    <div class="d-flex justify-content-between align-items-center mb-2 p-2">
                                        <!-- <strong>₹ {{ product.price }} INR</strong> -->
                                        <strong><span v-if="product.currency === 'INR'">₹</span> {{ product.price }}
                                            <span v-if="product.currency === 'INR'">{{
                                                product.currency }}</span> <span v-else> USD</span></strong>
                                        <div class="small">
                                            <i class="bi bi-star-fill text-warning"></i>
                                            <i class="bi bi-star-fill text-warning"></i>
                                            <i class="bi bi-star-fill text-warning"></i>
                                            <i class="bi bi-star-fill text-warning"></i>
                                            <i class="bi bi-star-fill text-warning"></i>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "CategoryCard",
    computed: {
        categories() {
            // return this.$store.getters['category/getCategories']
            return this.$store.getters['categoriesWithCurrency']
        }
    },
}
</script>
<style scoped>
@media (max-width:768px) {
    .category-banner img {
        height: 200px !important;
    }
}
</style>