<template>
  <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
    <nav
      class="relative flex items-center justify-between sm:h-10 lg:justify-start"
      aria-label="Global"
    >
      <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
        <div class="flex items-center justify-between w-full md:w-auto">
          <a href="#">
            <span class="sr-only">Workflow</span>
            <img
              class="h-8 w-auto sm:h-16"
              src="/logo.png"
              alt="logo"
              v-lazy-load
            />
          </a>
          <div class="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              id="main-menu"
              aria-haspopup="true"
              @click="isOpen = !isOpen"
            >
              <span class="sr-only">Open main menu</span>
              <!-- Heroicon name: menu -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
        <a href="#" class="font-medium text-gray-500 hover:text-gray-900"
          >About</a
        >

        <a href="#" class="font-medium text-gray-500 hover:text-gray-900"
          >Experiences</a
        >

        <a href="#" class="font-medium text-gray-500 hover:text-gray-900"
          >Work</a
        >

        <a
          href="https://ahmadridwan31.medium.com"
          class="font-medium text-gray-500 hover:text-gray-900"
          target="_blank"
          >Blog</a
        >

        <a href="#" class="font-medium text-gray-500 hover:text-gray-900"
          >Contact</a
        >

        <!-- <a
                href="#"
                class="font-medium text-indigo-600 hover:text-indigo-500"
                >Log in</a
              > -->
      </div>
    </nav>
    <transition
      enter-active-class="transition ease-out duration-100 transform"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-100 ease-in transform"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div
          class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
        >
          <div class="px-5 pt-4 flex items-center justify-between">
            <div>
              <img class="h-8 w-auto" src="/logo.png" alt="logo" v-lazy-load />
            </div>
            <div class="-mr-2">
              <button
                type="button"
                @click="isOpen = !isOpen"
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close main menu</span>
                <!-- Heroicon name: x -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="main-menu"
          >
            <div class="px-2 pt-2 pb-3 space-y-1" role="none">
              <a
                href="#"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                role="menuitem"
                >About</a
              >

              <a
                href="#"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                role="menuitem"
                >Experiences</a
              >

              <a
                href="#"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                role="menuitem"
                >Work</a
              >

              <a
                href="https://ahmadridwan31.medium.com"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                role="menuitem"
                target="_blank"
                >Blog</a
              >

              <a
                href="#"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                role="menuitem"
                >Contact</a
              >
            </div>
            <!-- <div role="none">
                  <a
                    href="#"
                    class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Log in
                  </a>
                </div> -->
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data: () => ({
    isOpen: false,
  }),
};
</script>
