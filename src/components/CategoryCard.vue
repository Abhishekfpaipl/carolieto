<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12" v-for="(category, index) in categories" :key="index">
                    <div class="position-relative">
                        <img :src="category.image" alt="" class=""
                            style="height: 400px;width: 100%; object-fit: cover;object-position: left;">
                        <p class="position-absolute text-white fs-1 mb-0" style="right: 10%;top: 40%; bottom: 50%;">{{
                            category.name }}</p>
                    </div>
                    <div class="row row-cols-2 row-col-md-3 row-cols-lg-4 g-1 my-4">
                        <div class="col" v-for="(category, subIndex) in category.sub_category" :key="subIndex">
                            <router-link :to="'/category-list/' + category.sid"
                                class="card text-decoration-none text-dark">
                                <img :src="category.image" alt="" class="card-img-top" style="height: 250px;object-fit: cover;">
                                <h6 class="fw-bold my-2">{{ category.name }}</h6>
                            </router-link>
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
            return this.$store.getters['category/getCategories']
        }
    }
}
</script>
<style scoped>
.category-grid {
    background-color: #f8f9fa;
    min-height: 100vh;
}

.category-card {
    border-radius: 20px;
    padding: 2rem 1rem;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.category-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}


@media (max-width: 767.98px) {
    .category-card {
        height: 140px;
        padding: 1.5rem 1rem;
    }

    .icon-circle {
        width: 40px;
        height: 40px;
    }

    .icon-circle i {
        font-size: 1.2rem;
    }

    .category-name {
        font-size: 0.9rem;
    }
}

@media (max-width: 575.98px) {
    .category-card {
        height: 120px;
        padding: 1rem;
    }
}
</style>