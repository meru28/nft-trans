<template>
  <div>
    <!-- Section 2 - About -->
    <section class="">
      <div
        class="
          max-w-7xl
          mx-auto
          sm:px-15
          md:px-10
          lg:px-15
          xl:px-0
          py-20
          lg:flex lg:justify-around
          gap-x-9
        "
      >
        <!-- <i class="icon-vector-1" /> -->
        <img class="lg:mt-16" src="~/assets/images/home-about.svg" />
        <div class="mt-16 lg:mt-0">
          <h3 class="uppercase font-bold text-[26px] tracking-[.125em] mb-7">
            About
          </h3>
          <hr class="line-heading mb-7" />
          <div class="lg:max-w-md">
            <div class="flex gap-x-10 mb-8">
              <button
                class="uppercase font-bold text-lg leading-3 text-gray-79"
              >
                About
              </button>
              <div class="line-tab"></div>
              <button class="uppercase font-bold text-lg leading-3">How</button>
              <div class="line-tab"></div>
              <button class="uppercase font-bold text-lg leading-3">
                Next
              </button>
            </div>
            <div class="text-lg font-bold leading-7 text-justify">
              <p>
                TRINVI by Transvision is a blockchain powered initiative for the
                broadcasting industry and beyond.
              </p>
              <br />
              <p>
                We at TRINVI believe that digital creators, fans and viewers
                should be able to interact in order to build better content and
                further extend that content’s universe. Our initiators aim to
                bridge the broadcasting industry with the new digital economy
                and invites everyone to take part!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- section 2 end -->
    <!-- section 6 start -->
    <section ref="section6" id="section6" class="gradient-pink-purple">
      <div
        class="max-w-7xl mx-auto sm:px-15 md:px-10 lg:px-15 xl:px-0 pt-20 pb-8"
      >
        <div class="flex justify-between items-center mb-10">
          <h2 class="font-bold text-[1.625rem] text-white uppercase">News</h2>
          <nuxt-link to="/news">
            <span class="text-base text-white underline font-medium"
              >See More
              <i class="icon-angle-right text-white font-semibold" />
            </span>
          </nuxt-link>
        </div>
        <div
          class="
            flex
            lg:justify-start
            justify-center
            items-start
            flex-wrap
            lg:flex-nowrap
            mb-8
          "
        >
          <nuxt-img
            format="webp"
            quality="80"
            src="/images/news-thumbnail.png"
            class="lg:mr-20 mr-0"
          />
          <div class="text-white lg:mr-20 mr-0 w-full">
            <span class="font-normal text-base font-white mb-5 inline-block">
              MARCH 10,2022
            </span>
            <h2 class="font-bold text-[1.75rem] mb-7">
              OpenSea Banned All Iranian Artists. We Need to Talk.
            </h2>
            <p class="font-normal text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
        </div>
        <div
          class="
            grid
            lg:grid-cols-3
            grid-cols-1
            mb-8
            lg:mr-20
            mr-0
            pr-9
            border-t-2 border-white border-opacity-20
          "
        >
          <div class="text-white max-w-[564] w-full py-8 my-2 pr-9">
            <span class="font-normal text-sm font-white mb-5 inline-block">
              MARCH 10,2022
            </span>
            <h2 class="font-normal text-lg">
              Bored Ape Yacht Club Creators Just Bought CryptoPunks and Meebits
            </h2>
          </div>
          <div
            class="
              text-white
              max-w-[564]
              w-full
              py-8
              my-2
              border-l border-white border-opacity-20
              px-4
            "
          >
            <span class="font-normal text-sm font-white mb-5 inline-block">
              MARCH 10,2022
            </span>
            <h2 class="font-normal text-lg">
              Bored Ape Yacht Club Creators Just Bought CryptoPunks and Meebits
            </h2>
          </div>
          <div
            class="
              text-white
              max-w-[564]
              w-full
              py-8
              my-2
              border-l border-white border-opacity-20
              pl-9
            "
          >
            <span class="font-normal text-sm font-white mb-5 inline-block">
              MARCH 10,2022
            </span>
            <h2 class="font-normal text-lg">
              Bored Ape Yacht Club Creators Just Bought CryptoPunks and Meebits
            </h2>
          </div>
        </div>
      </div>
      <div class="bg-white bg-opacity-70">
        <div class="max-w-7xl mx-auto sm:px-15 md:px-10 lg:px-15 xl:px-0">
          <div class="py-8 flex justify-between items-center text-center">
            <div class="px-4">
              <nuxt-img
                format="webp"
                quality="50"
                src="/images/TechnologyNFT.png"
                class="mix-blend-multiply mb-2"
              />
              <p class="font-bold text-black">Technology NFT</p>
            </div>
            <div class="px-4">
              <nuxt-img
                format="webp"
                quality="50"
                src="/images/NFTAgency.png"
                class="mix-blend-multiply mb-2"
              />
              <p class="font-bold text-black">NFT Agency</p>
            </div>
            <div class="px-4">
              <nuxt-img
                format="webp"
                quality="50"
                src="/images/NFTYHoldings.png"
                class="mix-blend-multiply mb-2"
              />
              <p class="font-bold text-black">NFTY Holdings</p>
            </div>
            <div class="px-4">
              <nuxt-img
                format="webp"
                quality="50"
                src="/images/HonestNFT.png"
                class="mix-blend-multiply mb-2"
              />
              <p class="font-bold text-black">Honest NFT</p>
            </div>
            <div class="px-4">
              <nuxt-img
                format="webp"
                quality="50"
                src="/images/EntourageGlobal.png"
                class="mix-blend-multiply mb-2"
              />
              <p class="font-bold text-black">Entourage Global</p>
            </div>
          </div>
          <!-- Sponsor Slider Component  -->
          <div class="text-center">
            <slider />
          </div>
        </div>
      </div>
    </section>
    <!-- section 6 end -->
    <!-- section 7 start -->
    <section class="bg-white">
      <div class="max-w-7xl mx-auto sm:px-15 md:px-10 lg:px-15 xl:px-0">
        <div
          class="
            py-20
            grid grid-cols-1
            lg:grid-cols-2
            items-center
            text-center
            lg:text-left
            justify-items-center
            gap-10
          "
        >
          <h1
            class="
              font-bold
              text-6xl text-transparent
              leading-[72px]
              bg-clip-text bg-gradient-to-r
              from-[#FF5800]
              via-[#D02379] via-[#893C8E]
              to-[#023A59]
              max-w-sm
            "
          >
            IS THIS YOU FIRST NFT?
          </h1>
          <div class="text-3xl max-w-[286px]">
            <p class="font-bold mb-[47px]">Learn How To:</p>
            <p class="text">Setup your wallet</p>
            <p>
              <span class="font-bold text-[#FF5800]">Purchase Etherium</span>
            </p>
            <p>Be on a whitelist</p>
            <p>Mint an NFT</p>
          </div>
        </div>
      </div>
    </section>
    <!-- section 7 end -->
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
    const section6 = ref(null)
    const { fetchProvince } = useDaerah()
    fetchProvince()
    return {
      section6,
    }
  },
})
</script>
