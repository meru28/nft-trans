<template>
  <div>
    <div class="bg-gradient-to-br from-[#D02379] to-[#893C8E]">
      <div class="px-[125px] py-8">
        <div class="flex justify-between items-center mb-10">
          <h2 class="font-bold text-[1.625rem] text-white uppercase">News</h2>
          <nuxt-link to="/news">
            <span class="text-base text-white underline font-medium"
              >See More
              <img
                src="~/assets/icons/icon-arrow-white.svg"
                class="inline ml-1"
                alt="arrow-icon"
            /></span>
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
          <img
            src="~/assets/img/news-thumbnail.png"
            alt="news-thumbnail"
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
      <div class="px-[125px] bg-white bg-opacity-70">
        <div class="py-8 flex justify-between items-end text-center">
          <div class="px-4">
            <img
              src="~/assets/img/TechnologyNFT.png"
              class="mix-blend-multiply mb-2"
              alt=""
            />
            <p class="font-bold text-black">Technology NFT</p>
          </div>
          <div class="px-4">
            <img
              src="~/assets/img/NFTAgency.png"
              class="mix-blend-multiply mb-2"
              alt=""
            />
            <p class="font-bold text-black">NFT Agency</p>
          </div>
          <div class="px-4">
            <img
              src="~/assets/img/NFTYHoldings.png"
              class="mix-blend-multiply mb-2"
              alt=""
            />
            <p class="font-bold text-black">NFTY Holdings</p>
          </div>
          <div class="px-4">
            <img
              src="~/assets/img/HonestNFT.png"
              class="mix-blend-multiply mb-2"
              alt=""
            />
            <p class="font-bold text-black">Honest NFT</p>
          </div>
          <div class="px-4">
            <img
              src="~/assets/img/EntourageGlobal.png"
              class="mix-blend-multiply mb-2"
              alt=""
            />
            <p class="font-bold text-black">Entourage Global</p>
          </div>
        </div>
        <div class="py-8 text-center">
          <slider />
        </div>
      </div>
    </div>
    <div
      class="
        py-20
        grid grid-cols-1
        lg:grid-cols-2
        items-center
        text-center
        lg:text-left
        justify-items-center
        px-40
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

        <p class="text">
          Setup your wallet
          <span class="font-bold text-[#FF5800]">Purchase Etherium</span>
          Be on a whitelist Mint an NFT
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Slider from '~/components/Slider.vue'
export default {
  components: { Slider },
}
</script>
