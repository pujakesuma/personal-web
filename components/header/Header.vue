<template>
  <div>
    <nav
      class="py-4 px-4 mt-0 fixed w-full z-40 pin-t bg-white overflow-hidden sm:px-12"
      aria-label="Global"
    >
      <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
        <div class="flex items-center justify-between w-full md:w-auto">
          <nuxt-link to="/">
            <span class="sr-only">Workflow</span>
            <img
              src="/logo_sm.png"
              alt="logo"
              loading="lazy"
              width="40"
              height="40"
            />
          </nuxt-link>
          <div class="toggle-menu opacity-75 ml-6 block md:hidden">
            <label class="hidden" for="check"></label>
            <input id="check" v-model="checked" type="checkbox" />
            <span class="bg-gray-500"></span>
            <span class="bg-gray-500"></span>
            <span class="bg-gray-500"></span>
          </div>
        </div>
        <div class="hidden md:block md:ml-auto md:mr-28 md:space-x-8">
          <nuxt-link
            :to="{ path: '/', hash: '#about' }"
            class="text-gray-900 border-b-2 border-transparent font-bold hover:border-b-2 hover:border-red-900"
            >About</nuxt-link
          >

          <nuxt-link
            :to="{ path: '/', hash: '#experiences' }"
            class="text-gray-900 border-b-2 border-transparent font-bold hover:border-b-2 hover:border-red-900"
            >Experiences</nuxt-link
          >

          <nuxt-link
            :to="{ path: '/', hash: '#works' }"
            class="text-gray-900 border-b-2 border-transparent font-bold hover:border-b-2 hover:border-red-900"
            >Work</nuxt-link
          >

          <a
            href="https://ahmadridwan31.medium.com"
            class="text-gray-900 font-bold border-b-2 border-transparent hover:border-b-2 hover:border-red-900"
            target="_blank"
            rel="noopener"
            >Blog</a
          >

          <nuxt-link
            :to="{ path: '/', hash: '#contact' }"
            class="text-gray-900 border-b-2 border-transparent font-bold hover:border-b-2 hover:border-red-900"
            >Contact</nuxt-link
          >
        </div>
      </div>
    </nav>
    <nav
      class="mobile-nav h-full pt-20 top-0 right-0 z-10 fixed block md:hidden bg-white"
      :class="checked ? 'w-full' : 'w-0'"
    >
      <ul class="text-center relative z-20 text-xl tracking-wide">
        <li class="py-5">
          <nuxt-link
            :to="{ path: '/', hash: '#about' }"
            class="text-gray-900 border-b-2 border-transparent font-bold hover:border-b-2 hover:border-red-900"
            >About</nuxt-link
          >
        </li>
        <li class="py-5">
          <nuxt-link
            :to="{ path: '/', hash: '#experiences' }"
            class="text-gray-900 border-b-2 border-transparent font-bold hover:border-b-2 hover:border-red-900"
            >Experiences</nuxt-link
          >
        </li>
        <li class="py-5">
          <nuxt-link
            :to="{ path: '/', hash: '#works' }"
            class="text-gray-900 border-b-2 border-transparent font-bold hover:border-b-2 hover:border-red-900"
            >Work</nuxt-link
          >
        </li>
        <li class="py-5">
          <a
            href="https://ahmadridwan31.medium.com"
            class="text-gray-900 font-bold border-b-2 border-transparent hover:border-b-2 hover:border-red-900"
            target="_blank"
            rel="noopener"
            >Blog</a
          >
        </li>
        <li class="py-5">
          <nuxt-link
            :to="{ path: '/', hash: '#contact' }"
            class="text-gray-900 border-b-2 border-transparent font-bold hover:border-b-2 hover:border-red-900"
            >Contact</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false
    };
  }
};
</script>

<style lang="scss" scoped>
.toggle-menu {
  -webkit-user-select: none;
  user-select: none;
}

.toggle-menu input {
  display: block;
  width: 28px;
  height: 32px;
  position: absolute;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
  -webkit-touch-callout: none;
}

.toggle-menu span {
  display: block;
  width: 28px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

.toggle-menu span:first-child {
  transform-origin: 0% 0%;
}

.toggle-menu span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

.toggle-menu input:checked ~ span {
  opacity: 1;
  transform: rotate(-45deg) translate(0, -2px);
}

.toggle-menu input:checked ~ span:nth-last-child(2) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

.toggle-menu input:checked ~ span:nth-last-child(3) {
  transform: rotate(45deg) translate(3px, 0);
}

.mobile-nav {
  transition: width 0.5s ease-in-out;
}
</style>
