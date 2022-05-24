<template>
  <div>
    <!-- Section 1 - Hero -->
    <div
      class="
        h-[620px]
        bg-[url('~/assets/images/bg-hero-detail-page.png')] bg-cover bg-center
      "
    >
      <button
        class="
          w-[138px]
          h-11
          bg-gray-800
          text-white
          font-normal
          mt-28
          ml-20
          rounded-lg
        "
      >
        <i
          class="
            icon-angle-left
            text-white
            font-semibold
            m-0
            before:m-0 before:w-0
          "
        />BACK
      </button>
    </div>
    <!-- section 1 - end -->
    <!-- section 2 - about -->
    <div class="grid lg:grid-cols-2 grid-cols-1">
      <div class="bg-[#232323] py-14 pl-[156px]">
        <div class="max-w-sm">
          <div class="mb-2">
            <button
              class="
                text-white
                font-bold
                text-xs
                bg-[#FF5800]
                rounded-md
                h-8
                w-[86px]
                mr-2
              "
            >
              Cinematic
            </button>
            <button
              class="
                text-white
                font-bold
                text-xs
                border-2 border-white
                rounded-md
                h-8
                w-[86px]
              "
            >
              Season 1
            </button>
          </div>
          <h2 class="font-bold text-4xl text-[#FF5800]">Sang Soerya</h2>
          <p class="font-normal text-lg text-white">
            Based on the book “Man Of Honor” by Harmanto Edy Djatmiko, the
            upcoming project for Sang Soerya series, chronicles the life of
            William Soeryadjaya.
          </p>
        </div>
      </div>
      <div class="bg-[#1E1E1E] py-14 pl-[156px]">
        <div class="max-w-sm">
          <div class="mb-2">
            <button
              class="
                text-white
                font-bold
                text-xs
                bg-gradient-to-r
                from-[#D206E2]
                via-[#8C33E5]
                to-[#5B8EF2]
                rounded-md
                h-8
                w-[86px]
                mr-2
              "
            >
              NFT
            </button>
          </div>
          <h2
            class="
              font-bold
              text-4xl text-transparent
              bg-gradient-to-r
              from-[#D104E7]
              via-[#7540E6]
              to-[#6495EE]
              bg-clip-text
            "
          >
            +62 Sails
          </h2>
          <p class="font-normal text-lg text-white">
            To honor Mr. William Soeryadjaya's legacy, we created the +62 Sails
            NFT project.
          </p>
        </div>
      </div>
    </div>
    <!-- section 2 - end -->
    <!-- section 3 - price -->
    <div
      class="
        grid
        lg:grid-cols-2
        grid-cols-1
        items-center
        bg-[#3B67EA]
        py-12
        px-64
      "
    >
      <div class="">
        <h2 class="font-bold text-4xl text-white mb-6">IDR 100.000</h2>
        <h2 class="font-bold text-4xl text-white">0,1 ETH</h2>
      </div>
      <div class="">
        <button
          class="
            text-2xl
            font-bold
            bg-gradient-to-r
            w-[356px]
            h-[84px]
            rounded-lg
            text-white
            from-[#374280]
            via-[#A03390]
            to-[#E02C5C]
            ml-9
          "
        >
          BUY NFT
        </button>
      </div>
    </div>
    <!-- section 3 - end -->
    <div class="py-[70px] px-20">
      <div class="flex space-x-5 border-b-2 border-[#B1B1B1] mb-[76px]">
        <span
          class="
            font-bold
            text-2xl
            w-[158px]
            text-center
            uppercase
            cursor-pointer
          "
          :class="[
            !isMenuArtwork ? 'text-[#3967EE] border-b-4 border-[#3967EE]' : '',
          ]"
          @click="toggleTabMenu(false)"
          >Traits</span
        >
        <span
          class="
            text-black
            font-bold
            text-2xl
            w-[158px]
            text-center
            uppercase
            cursor-pointer
          "
          :class="[
            isMenuArtwork ? 'text-[#3967EE] border-b-4 border-[#3967EE]' : '',
          ]"
          @click="toggleTabMenu(true)"
          >Artwork</span
        >
      </div>
      <!-- Traits -->
      <div
        class="grid grid-cols-1 lg:grid-cols-2"
        :class="[!isMenuArtwork ? 'block' : 'hidden']"
      >
        <div class="">
          <div class="flex items-baseline mb-6 cursor-pointer text-black">
            <p class="text-base">
              <span class="font-normal text-[1.75rem]">10</span
              ><span class="mx-1">//</span>Time Of Day (TOD)
            </p>
          </div>
          <div class="flex items-baseline mb-6 cursor-pointer text-black">
            <p class="text-base">
              <span class="font-normal text-[1.75rem]">10</span
              ><span class="mx-1">//</span>Time Of Day (TOD)
            </p>
          </div>
          <div class="flex items-baseline mb-6 cursor-pointer text-black">
            <p class="text-base">
              <span class="font-normal text-[1.75rem]">10</span
              ><span class="mx-1">//</span>Time Of Day (TOD)
            </p>
          </div>
          <div class="flex items-baseline mb-6 cursor-pointer text-black">
            <p class="text-base">
              <span class="font-normal text-[1.75rem]">10</span
              ><span class="mx-1">//</span>Time Of Day (TOD)
            </p>
          </div>
          <div class="flex flex-wrap items-baseline mb-6 cursor-pointer">
            <p class="text-base w-full text-[#3967F1]">
              <span class="font-normal text-[1.75rem]">10</span
              ><span class="mx-1">//</span>Time Of Day (TOD)
            </p>
            <div class="mt-6 ml-8">
              <ol>
                <li>1] Red - The color of strength, power, and courage.</li>
                <li>2] Green - The color of vitality, peace,. and security.</li>
                <li>3] Purple - The color of nobility, luxury, and wisdom.</li>
                <li>
                  4] Orange - The color of energy, excitement, and happiness.
                </li>
              </ol>
            </div>
          </div>

          <div class="flex items-baseline mb-6 cursor-pointer text-black">
            <p class="text-base">
              <span class="font-normal text-[1.75rem]">10</span
              ><span class="mx-1">//</span>Time Of Day (TOD)
            </p>
          </div>
          <div class="flex items-baseline mb-6 cursor-pointer text-black">
            <p class="text-base">
              <span class="font-normal text-[1.75rem]">10</span
              ><span class="mx-1">//</span>Time Of Day (TOD)
            </p>
          </div>
        </div>
        <div class="">
          <img src="~/assets/images/traits-img.png" alt="" />
        </div>
      </div>
      <!-- End Traits -->
      <!-- Artwork -->
      <div
        class="grid grid-cols-1 lg:grid-cols-3 gap-9"
        :class="[isMenuArtwork ? 'block' : 'hidden']"
      >
        <div class="">
          <img
            src="~/assets/images/artwork-img-1.png"
            alt=""
            class="mb-[42px] rounded-lg object-fill w-full"
          />
          <p class="font-normal text-[1.75rem] text-center">Super Rare</p>
        </div>
        <div class="">
          <img
            src="~/assets/images/artwork-img-2.png"
            alt=""
            class="mb-[42px] rounded-lg object-fill w-full"
          />
          <p class="font-normal text-[1.75rem] text-center">Rare</p>
        </div>
        <div class="">
          <img
            src="~/assets/images/artwork-img-3.png"
            alt=""
            class="mb-[42px] rounded-lg object-fill w-full"
          />
          <p class="font-normal text-[1.75rem] text-center">Common</p>
        </div>
      </div>
      <!-- End Artwork -->
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { useDaerah } from '@/compositions'
import Slider from '~/components/Slider.vue'
export default defineComponent({
  components: { Slider },
  name: 'IndexPage',
  setup() {
    const isMenuArtwork = ref(false)
    const toggleTabMenu = (val: boolean) => {
      isMenuArtwork.value = val
    }
    return {
      isMenuArtwork,
      toggleTabMenu,
    }
  },
})
</script>
