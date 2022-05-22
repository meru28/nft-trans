<template>
  <div class="bg-[#0B0B0B]">
    <div class="max-w-7xl mx-auto px-15 sm:px-15 md:px-10 lg:px-15 xl:px-0 pt-20 pb-8">
      <div class="pb-10 border-b-2 border-b-gray-400">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start">
          <div>
            <nuxt-img format="webp" quality="70" src="/images/Logo Trivi 1.png" />
            <div class="flex items-center">
              <span class="text-white text-base">by</span>
              <nuxt-img format="webp" quality="70" src="/images/Transvision White 1.png" />
            </div>
          </div>
          <div class="text-white flex flex-row flex-wrap sm:flex-row sm:mt-8 md:mt-0 md:flex-row md:flex-wrap md:justify-center lg:flex-row items-start gap-x-16">
            <div>
              <h1 class="mb-3 text-xl font-bold">Company</h1>
              <div class="flex flex-col">
                <nuxt-link to="/">
                  About
                </nuxt-link>
                <nuxt-link to="/">
                  We're Hiring
                </nuxt-link>
              </div>
            </div>
            <div>
              <h1 class="mb-3 text-xl font-bold">Projects</h1>
              <div class="flex flex-col">
                <nuxt-link to="/">
                  62 Rides
                </nuxt-link>
              </div>
            </div>
            <div>
              <h1 class="mb-3 text-xl font-bold">Support</h1>
              <div class="flex flex-col">
                <nuxt-link to="/">
                  Docs
                </nuxt-link>
                <nuxt-link to="/">
                  Contract
                </nuxt-link>
                <nuxt-link to="/">
                  FAQ's
                </nuxt-link>
              </div>
            </div>
            <div>
              <h1 class="mb-3 text-xl font-bold">Market</h1>
              <div class="flex flex-col">
                <nuxt-link to="/">
                  Opensea
                </nuxt-link>
              </div>
            </div>
            <div>
              <h1 class="mb-3 text-xl font-bold">Get In Touch</h1>
              <div class="flex flex-col">
                <nuxt-link to="/">
                  Discord
                </nuxt-link>
                <nuxt-link to="/">
                  Twitter
                </nuxt-link>
                <nuxt-link to="/">
                  Instagram
                </nuxt-link>
                <nuxt-link to="/">
                  Facebook
                </nuxt-link>
                <nuxt-link to="/">
                  Contact
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-8 flex justify-between items-center">
          <div>
            <label for="stay-update">
              <div class="password-spy">
                <input type="text" class="form-input w-60 appearance-none bg-[#1F1F1F] border-0 text-white placeholder:text-[#555555] p-3 rounded-full" placeholder="Stay updated! Add email">
                <i class="icon-angle-right text-black bg-white rounded-full" />
              </div>

            </label>
          </div>
          <div>
            <label for="currency">
              <i class="icon-currency text-white" />
              <select name="currency" id="currency" class="pl-0 appearance-none bg-[#0B0B0B] border-0 text-[#555555]">
                <option value="USD" selected>USD</option>
                <option value="IDR" selected>Rupiah</option>
              </select>
            </label>
            <label for="language">
              <i class="icon-lang text-white" />
              <select name="language" id="language" class="pl-0 appearance-none bg-[#0B0B0B] border-0 text-[#555555]">
                <option value="ENG" selected>ENG</option>
                <option value="INA" selected>INA</option>
              </select>
            </label>
          </div>
        </div>
      </div>
      <div class="my-15 text-white flex justify-between items-center">
        <span>&copy;2022 - TransVision</span>
        <span>Back to Top</span>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  setup () {
    return {}
  }
})
</script>
