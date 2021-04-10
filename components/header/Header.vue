<template>
  <div>
    <nav
      class="p-6 mt-0 fixed w-full z-40 pin-t bg-primary overflow-hidden"
      aria-label="Global"
    >
      <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
        <div class="flex items-center justify-between w-full md:w-auto">
          <a href="#">
            <span class="sr-only">Workflow</span>
            <img
              v-lazy-load
              class="h-10 w-auto sm:h-16"
              src="/logo.png"
              alt="logo"
            />
          </a>
          <div class="toggle-menu opacity-75 ml-6 block md:hidden">
            <input v-model="checked" type="checkbox" />
            <span class="bg-gray-500"></span>
            <span class="bg-gray-500"></span>
            <span class="bg-gray-500"></span>
          </div>
        </div>
        <div class="hidden md:block md:ml-auto md:mr-28 md:space-x-8">
          <a href="#" class="font-medium text-gray-500 hover:text-gray-300"
            >About</a
          >

          <a href="#" class="font-medium text-gray-500 hover:text-gray-300"
            >Experiences</a
          >

          <a href="#" class="font-medium text-gray-500 hover:text-gray-300"
            >Work</a
          >

          <a
            href="https://ahmadridwan31.medium.com"
            class="font-medium text-gray-500 hover:text-gray-300"
            target="_blank"
            >Blog</a
          >

          <a href="#" class="font-medium text-gray-500 hover:text-gray-300"
            >Contact</a
          >
        </div>
      </div>
    </nav>
    <nav
      class="mobile-nav h-full pt-20 top-0 right-0 z-10 fixed block md:hidden bg-primary "
      :class="checked ? 'w-full' : 'w-0'"
    >
      <ul class="text-center relative z-20 text-xl tracking-wide">
        <li class="py-5">
          <a href="#" class="font-medium text-gray-500 hover:text-gray-300"
            >About</a
          >
        </li>
        <li class="py-5">
          <a href="#" class="font-medium text-gray-500 hover:text-gray-300"
            >Experiences</a
          >
        </li>
        <li class="py-5">
          <a href="#" class="font-medium text-gray-500 hover:text-gray-300"
            >Work</a
          >
        </li>
        <li class="py-5">
          <a
            href="https://ahmadridwan31.medium.com"
            class="font-medium text-gray-500 hover:text-gray-300"
            target="_blank"
            >Blog</a
          >
        </li>
        <li class="py-5">
          <a href="#" class="font-medium text-gray-500 hover:text-gray-300"
            >Contact</a
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
      checked: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.toggle-menu {
  -webkit-user-select: none;
  user-select: none;
}

.toggle-menu input {
  display: block;
  width: 40px;
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
