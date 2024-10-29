<template>
    <div class="prod container bg-light mt-3" style="padding-top: 60px;">
        <div class="row">
            <div class="col-md-4 d-flex prod-img">
                <div class="d-flex flex-column prod-thumb" id="scroll">
                    <img :src="image" style="width: 60px" v-for="(image, index) in product.images" :key="index"
                        v-on:click="selectImage(image)" />
                </div>
                <div class="ms-2 main-img">
                    <img :src="selectedImage" class="flex-fill" style="width: 100%;" />
                </div>
            </div>
            <div class="col-md-8 prod-details">
                <div class="d-flex justify-content-between align-items-center bg-white p-2 mb-2">
                    <div class="text-capitalize">
                        <p class="mb-0 fw-bold fs-4 text-start">{{ product.name }}</p>
                        <small class="text-muted">{{ product.category }}</small>
                        <small class="text-muted ms-2">({{ product.sub_category }})</small>
                        <p class="mb-0 fs-4 fw-bold text-start">₹ {{ product.price }}</p>
                    </div>
                    <div class="d-flex gap-2 fs-5">
                        <div class="d-flex gap-2 fs-5">
                            <i class="bi bi-share"></i>
                        </div>
                    </div>
                </div>
                <p class="px-2 mb-0 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis animi eum repudiandae non molestias adipisci cupiditate numquam. Impedit
                    reprehenderit recusandae laborum fugit! Natus debitis accusamus obcaecati nobis quis,
                    reiciendis nihil facilis fugit quo eius non in ut quasi cum aspernatur dignissimos quisquam
                    quibusdam doloremque eaque perferendis porro. Repudiandae commodi alias quis, adipisci eum
                    obcaecati cupiditate laborum magnam corrupti non harum amet error, tenetur maxime reiciendis
                    placeat optio veritatis temporibus, exercitationem qui eaque laudantium beatae! Est enim ut
                    ipsum corporis aut culpa reiciendis similique saepe in iusto vel porro quisquam ipsa ab qui
                    dolorum nostrum doloribus animi tempora quibusdam, velit molestias.</p>

                <div v-if="product.color" class="bg-white p-2 my-2">
                    <p class="fw-bold text-start">Color</p>
                    <div class="d-flex flex-wrap gap-2">
                        <div class="me-2" v-for="(color, index) in product.color" :key="index">
                            <input type="radio" name="product-color" class="btn-check"
                                :id="'selectProductColor' + index" autocomplete="off" :value="color"
                                v-model="selectedColor">
                            <label class="btn btn-outline-dark border-light rounded-circle p-0"
                                :for="'selectProductColor' + index">
                                <img class="rounded-circle" :src="color.image"
                                    style="width:40px;height:40px; object-fit: cover; margin: 0.05rem;" />
                            </label>
                            <p class="text-center mb-0">{{ color.name }}</p>
                        </div>
                    </div>
                </div>

                <div class="bg-white p-2 my-2 d-flex align-items-center gap-2">
                    <label class="fw-bold">Quantity:</label>
                    <input type="number" v-model.number="quantity" min="1" class="form-control w-25" />
                </div>

                <div class="bg-white my-2 p-2 d-md-block d-none">
                    <button @click="addToCart"
                        class="btn w-100 d-flex justify-content-center align-items-center text-center"
                        style="background-color: #FEBF00;">
                        <i class="bi bi-cart fs-5"></i>
                        <p class="text-center m-0 ms-2">Add to cart</p>
                    </button>
                </div>
                <ProductDetails :product="product"></ProductDetails>
            </div>
        </div>
        <div v-if="showPopupCart" class="popup d-flex justify-content-center align-items-center">
            <div class="text-center">
                Item added to cart!
            </div>
        </div>
    </div>

    <div class="d-md-none">
        <div class="w-100 d-flex align-items-center position-fixed"
            style="height: 63px; z-index: 10; bottom: 0; background: #f6f6f6;">
            <button @click="addToCart" class="btn w-100 d-flex justify-content-center align-items-center text-center"
                style="background-color: #F4B700;">
                <i class="bi bi-cart fs-5"></i>
                <p class="text-center m-0 ms-2">Add to cart</p>
            </button>
        </div>
    </div>
</template>

<script>
import ProductDetails from '@/components/ProductDetails.vue';

export default {
    data() {
        return {
            selectedImage: {},
            selectedColor: null,
            quantity: 1,
            showPopupCart: false,
        };
    },
    components: {
        ProductDetails,
    },
    mounted() {
        this.selectedImage = this.product.images[0];
    },
    computed: {
        product() {
            let productId = this.$route.params.productId;
            return this.$store.getters.getProduct(productId);
        },
    },
    methods: {
        selectImage(image) {
            this.selectedImage = image;
        },
        addToCart() {
            const productToSave = {
                productId: this.product.id,
                name: this.product.name,
                price: this.product.price,
                color: this.selectedColor,
                quantity: this.quantity,
                image: this.selectedImage,
            };

            // Get current cart from localStorage
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Check if product already exists in the cart with the same color
            const existingProductIndex = cart.findIndex(
                item => item.productId === productToSave.productId && item.color === productToSave.color
            );

            if (existingProductIndex >= 0) {
                // Update quantity if the product already exists in the cart
                cart[existingProductIndex].quantity += productToSave.quantity;
            } else {
                // Add new product to cart
                cart.push(productToSave);
            }

            // Save updated cart back to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            // Show popup to confirm addition
            this.showPopupCart = true;
            setTimeout(() => (this.showPopupCart = false), 2000);
        },
    },
};
</script>

<style scoped>
@media (max-width:999px) {
    .prod {
        padding-top: 45px !important;
    }

    .prod-img {
        display: flex;
        flex-direction: column-reverse;
        padding: 0px !important;
    }

    .prod-thumb {
        flex-direction: row !important;
        gap: 1rem;
        margin: 1rem 2rem 1rem 2rem;
        overflow: scroll;
    }

    .main-img {
        width: 100%;
        margin-left: 0px !important;
    }

    .prod-details {
        padding: 16px 0;
    }
}

@media (min-width:1000px) {
    .main-img img {
        position: sticky;
        top: 70px;
    }
}

#scroll::-webkit-scrollbar {
    background-color: none;
    display: none;
}

.count {
    position: absolute;
    top: -4px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #eb3e25;
    right: -8px;
    color: #fff;
    font-size: 11px;
    text-align: center;
    line-height: 12px;
}
</style>