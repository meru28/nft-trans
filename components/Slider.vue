<template>
  <VueSlickCarousel :arrows="true" :slidesToShow="4">
    <div class="px-4">
      <div class="h-28 flex flex-col justify-end">
        <img
          src="~/assets/images/TechnologyNFT.png"
          class="mb-2 mx-auto mix-blend-multiply"
          alt=""
        />
      </div>
      <p class="font-bold text-black">Technology NFT</p>
    </div>
    <div class="px-4">
      <div class="h-28 flex flex-col justify-end">
        <img
          src="~/assets/images/NFTAgency.png"
          class="mb-2 mx-auto mix-blend-multiply"
          alt=""
        />
      </div>
      <p class="font-bold text-black">NFT Agency</p>
    </div>
    <div class="px-4">
      <div class="h-28 flex flex-col justify-end">
        <img
          src="~/assets/images/NFTYHoldings.png"
          class="mb-2 mx-auto mix-blend-multiply"
          alt=""
        />
      </div>
      <p class="font-bold text-black">NFTY Holdings</p>
    </div>
    <div class="px-4">
      <div class="h-28 flex flex-col justify-end">
        <img
          src="~/assets/images/HonestNFT.png"
          class="mb-2 mx-auto mix-blend-multiply"
          alt=""
        />
      </div>
      <p class="font-bold text-black">Honest NFT</p>
    </div>
    <div class="px-4">
      <div class="h-28 flex flex-col justify-end">
        <img
          src="~/assets/images/EntourageGlobal.png"
          class="mb-2 mx-auto mix-blend-multiply"
          alt=""
        />
      </div>
      <p class="font-bold text-black">Entourage Global</p>
    </div>
  </VueSlickCarousel>
</template>
 
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'MyComponent',
  components: { VueSlickCarousel },
}
</script> 