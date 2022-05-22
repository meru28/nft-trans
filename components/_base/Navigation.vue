<template>
  <nav ref="navbar" class="fixed w-full z-10">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-20">
        <div class="flex-1 flex items-center sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <i class="icon-vector-1 text-black text-5xl font-bold" />
            <div class="relative">
              <div>
                <button>
                  <i class="icon-ellipsis text-black text-2xl" @click="toggleMenu" />
                </button>
              </div>
              <div class="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" :class="[isMenu ? 'block' : 'hidden']">
                <div class="flex justify-between items-center">
                  <i class="icon-ellipsis text-orange-400 p-2" />
                  <i class="icon-cancel text-sm p-2" />
                </div>
                <div class="px-6 pt-3 pb-6 grid grid-cols-1 gap-3 text-sm">
                  <nuxt-link to="/about">About</nuxt-link>
                  <nuxt-link to="/about">Features</nuxt-link>
                  <nuxt-link to="/about">Projects</nuxt-link>
                  <nuxt-link to="/about">Roadmap</nuxt-link>
                  <label for="search" class="block">
                    <input id="search" class="form-input mt-1 block w-full border-0 border-b border-gray-200 p-2 appearance-none" type="text" placeholder="Search" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button type="button" class="p-1 rounded-full text-gray-400 hover:text-white">
            <span class="sr-only">Twitter</span>
            <i class="icon-vector text-xl text-black" />
          </button>
          <button type="button" class="p-1 rounded-full text-gray-400 hover:text-white">
            <span class="sr-only">Discord</span>
            <i class="icon-vector-2 text-xl text-black" />
          </button>
          <div class="ml-3 relative">
            <div>
              <button type="button" class="bg-gray-800 px-8 py-2 text-white flex text-sm rounded-md focus:outline-none" id="user-menu-button" @click="toggleLoginMenu">
                <span class="sr-only">Open user menu</span>
                LOGIN
              </button>
            </div>
            <div class="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" :class="[isLoginMenu ? 'block' : 'hidden']">
              <!-- Active: "bg-gray-100", Not Active: "" -->
              <div class="p-6 grid grid-cols-1 gap-3 text-sm">
                <label for="username" class="block">
                  <span>Username</span>
                  <input id="username" class="form-input mt-1 block w-full border-0 border-b border-gray-200 p-2" type="text" placeholder="Type your username" />
                </label>
                <label for="password" class="block">
                  <span>Password</span>
                  <input id="password" class="form-input mt-1 block w-full border-0 border-b border-gray-200" type="password" placeholder="Type your password" />
                </label>
                <span class="-mt-2 text-right text-[10px] cursor-pointer">Forgot Password?</span>
                <button class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg px-5 py-4 text-white">
                  LOGIN
                </button>
                <span class="text-center text-gray-400">------ Or ------ </span>
                <button class="bg-white rounded-lg px-5 py-4 border-[1px] flex justify-center items-center shadow-md"><nuxt-img format="webp" quality="30" src="/images/google 1.png" class="mr-1" />Continue with Google</button>
                <button class="bg-primary rounded-lg px-5 py-4 text-white">Connect Wallet</button>
                <span class="text-center text-gray-400">------ Or ------ </span>
                <nuxt-link to="#" class="text-center underline">Sign Up</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { defineComponent, ref, onMounted, onBeforeUnmount } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'Navigation',
  setup () {
    const isLoginMenu = ref(false)
    const toggleLoginMenu = () => {
      isLoginMenu.value = !isLoginMenu.value
      isMenu.value = false
    }

    const isMenu = ref(false)
    const toggleMenu = () => {
      isMenu.value = !isMenu.value
      isLoginMenu.value = false
    }

    const navbar = ref(null)
    const scrollPosition = ref(null)
    const updateScroll = () => {
      scrollPosition.value = window.scrollY
      if (scrollPosition.value > 100) {
        navbar.value.classList.add('bg-nav')
      } else {
        navbar.value.classList.remove('bg-nav')
      }
    }

    onMounted(() => {
      scrollPosition.value = window.scrollY
      window.addEventListener('scroll', updateScroll)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', updateScroll)
    })

    return {
      isLoginMenu,
      toggleLoginMenu,
      isMenu,
      toggleMenu,
      navbar,
      scrollPosition
    }
  }
})
</script>
