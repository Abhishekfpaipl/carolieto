<template>
    <!-- Mobile version starts -->
    <div class="" style="padding-top: 60px;overflow-x: hidden;">
        <div class="video-player">
            <video ref="videoPlayer" autoplay loop style="width: 100%; ">
                <source src="https://carolieto.com/uploads/banner/1716011495_Carolieto Website Video.mp4">
                <!-- <source src="https://buyer-video-in.urbanic.com/eva/6b3cc46ede954740865b2e887403f9c7.mp4"
                    type="video/ogg">
                <source src="https://buyer-video-in.urbanic.com/eva/6b3cc46ede954740865b2e887403f9c7.mp4"
                    type="video/avi"> -->
            </video>
            <div class="controls">
                <button @click="togglePlayPause" class="btn border" style="background-color: transparent !important;">
                    <i v-if="isPlaying" class="bi bi-pause"></i>
                    <i v-else class="bi bi-play"></i>
                </button>
            </div>
        </div>
        <!-- <div class="container my-5">
            <h2 class="display-5 text-uppercase" style="color: var(--bg-primary);">Our best sellers</h2>
            <div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-3 my-5">
                <div v-for="(product, index) in products" :key="index" class="col">
                    <router-link :to="'/product-detail/' + product.sid"
                        class="card h-100 shadow-sm rounded-4 bg-white text-decoration-none">
                        <img :src="product.image" alt="" style="" class="card-img-top rounded-top-4">
                        <div class="rounded-4 border pt-3" style="background-color:#f3f8f3 !important">
                            <div class="smaller text-muted text-start px-2 text-ellipsis2 mb-3" style="min-height:36px">
                                {{ product.name }}
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div> -->
        <ProductCard />
        <div class="">
            <TextVideoSection />
        </div>
        <div class="">
            <!-- <VideoMaskSection /> --> 
        </div>
    </div>
</template>

<script>
// import VideoMaskSection from '@/components/VideoMaskSection.vue'
import TextVideoSection from '@/components/TextVideoSection.vue' 
import ProductCard from '@/components/ProductCard.vue'
export default {
    name: "HomePage",
    components: {
        // VideoMaskSection,
        TextVideoSection, 
        ProductCard,
    },
    data() {
        return {
            isPlaying: false,
            videos: [
                {
                    videoId: "ZtCsYVnjmn4",
                    title: "Exolar Energy Testimonial video",
                    viewCount: 26,
                },
                {
                    videoId: "f-4FWD6wAuk",
                    title: "Unleashing the Power of the Sun: Exolar Energy - Leading the Solar Revolution",
                    viewCount: 26,
                },
                {
                    videoId: "Y-RWg3xUsAU",
                    title: "Empowering Tomorrow: Exolar Energy - Harness the Power of the Sun!",
                    viewCount: 26,
                },
                {
                    videoId: "ZtCsYVnjmn4",
                    title: "Exolar Energy Testimonial video",
                    viewCount: 26,
                },
                {
                    videoId: "f-4FWD6wAuk",
                    title: "Unleashing the Power of the Sun: Exolar Energy - Leading the Solar Revolution",
                    viewCount: 26,
                },
                {
                    videoId: "Y-RWg3xUsAU",
                    title: "Empowering Tomorrow: Exolar Energy - Harness the Power of the Sun!",
                    viewCount: 26,
                },
            ],
        };
    },
    computed: {
        products() {
            return this.$store.getters.getProducts
        }
    },
    methods: {
        togglePlayPause() {
            const video = this.$refs.videoPlayer;
            if (this.isPlaying) {
                video.pause();
            } else {
                video.play();
            }
            this.isPlaying = !this.isPlaying;
        }
    },
    mounted() {
        this.$refs.videoPlayer.controls = false;
    }
};
</script>
<style scoped>
@media (min-width:998px) {

    .dropstart .dropdown-menu {
        top: 50px !important;
    }
}

.video-player {
    position: relative;
}

.controls {
    position: absolute;
    bottom: 20px;
    left: 20px;
}
</style>