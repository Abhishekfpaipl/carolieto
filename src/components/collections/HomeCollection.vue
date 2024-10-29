<template>
    <div v-if="Object.keys(collections).length > 0">
        <div v-for="(collection, index) in collections " :key="index" class="my-3">
            <div v-if="collection.type === 'section'">
                <div class="banner"
                    style="background: linear-gradient(90deg, rgba(149,143,145,1) 0%, rgba(254,254,254,0.9753151260504201) 100%);">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-6 " :class="'order-' + collection.order">
                                <h4 class="mt-4"
                                    :class="{ 'text-start': collection.order === 0, 'text-end': collection.order === 1 }">
                                    {{ collection.name }}
                                </h4>
                                <p>{{ collection.info }}</p>
                                <router-link :to="'/collection/' + collection.sid"
                                    :class="{ 'float-start': collection.order === 0, 'float-end': collection.order === 1 }">
                                    <button class="btn btn-dark rounded-pill mb-4">Shop Now</button>
                                </router-link>
                            </div>

                            <div class="col-md-4 col-6 d-flex align-items-center "
                                :class="{ 'justify-content-end': collection.order === 0, 'justify-content-start': collection.order === 1 }">
                                <img :src="collection.primary_image" :alt="collection.name" class="img-fluid float-end"
                                    style="height: 150px;">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container my-2">
                    <ProductCard :products="collection.products" />
                </div>
            </div>

            <div v-if="collection.type === 'banner'" class="row g-0">
                <div class="col-6 col-lg-8 d-flex align-items-center px-2" :class="'order-' + collection.order">
                    <div class="flex-fill"
                        :class="{ 'text-end': collection.order === 1, 'text-start': collection.order === 0 }">
                        <h1>{{ collection.name }}</h1>
                        <p>{{ collection.slug }}</p>
                    </div>
                </div>
                <div class="col-6 col-lg-4">
                    <img :src="collection.primary_image" :alt="collection.name"
                        :class="{ 'float-end': collection.order === 0 }" class="img-fluid" width="250">
                </div>
            </div>
        </div>
    </div>
    <div v-else class="placeholder-glow my-1 container-fluid">
        <div class="row">
            <div class="col-12 placeholder" style="height:155px"></div>
        </div>
        <div class="container my-2">
            <div class="row row-cols-3 row-cols-md-4 g-2">
                <div class="col" v-for="item in [1, 2, 3, 4]" :key="item">
                    <div class="card rounded-0">
                        <div class="placeholder" style="height:195px;"></div>
                    </div>
                    <div class="my-1 col-12 placeholder" style="height: 20px;"></div>
                    <div class="my-1 col-6 placeholder" style="height: 20px;"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ProductCard from '@/components/ProductCard.vue';
// import HomeCategory from '@/components/collections/HomeCategory.vue'
export default {
    name: 'HomeCollection',
    data() {
        return {
            publicPath: process.env.BASE_URL,
            // collections: [
            //     {
            //         type: 'banner',
            //         sid:'banner'
            //         name: 'Collcetion Name',
            //         info: 'Collcetion Information',
            //         slug: 'Welcome to our store',
            //         order: 0,
            //         primary_image: '',
            //         products: [
                         
            //         ]
            //     },
            // ]
        }
    },
    components: {
        // HomeCategory,
        ProductCard,
    },
    computed: {
        collections() {
            return this.$store.getters['collection/getCollections']
        },
        categories() {
            return this.$store.getters['collection/getCategories']
        },
        bestSeller() {
            return this.$store.getters['collection/getBestSeller']
        },
        showPrevious() {
            const gallery = this.$refs.gallery;
            return gallery.scrollLeft > 0;
        },
        showNext() {
            const gallery = this.$refs.gallery;
            return gallery.scrollLeft + gallery.offsetWidth < gallery.scrollWidth;
        },
    },
    methods: {
        scrollGallery(direction) {
            const gallery = this.$refs.gallery;
            const scrollAmount = direction * 400;
            gallery.scrollTo({
                left: gallery.scrollLeft + scrollAmount,
                behavior: "smooth", // Adding smooth scroll behavior
            });
        },
    },

}
</script>
<style>
#scroll::-webkit-scrollbar {
    background-color: none;
    display: none;
}

.moving-text {
    animation: moveLeft 10s linear infinite;
}

@keyframes moveLeft {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);
    }
}

.prev-icon {
    position: absolute;
    top: 40%;
    left: 0px;
    background-color: #F4B700;
    padding: 8px;
    display: flex;
}

.next-icon {
    position: absolute;
    top: 40%;
    right: 0px;
    background-color: #F4B700;
    padding: 8px;
    display: flex;
}
</style>