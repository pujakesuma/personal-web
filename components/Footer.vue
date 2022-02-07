<template>
  <footer class="flex flex-col items-center text-gray-900 py-4 px-6">
    <div class="block w-full mx-auto mb-4" style="max-width: 270px">
      <ul class="flex justify-between items-center">
        <li v-for="(item, i) in social" :key="i">
          <a
            :href="item.link"
            class="p-4"
            :aria-label="item.label"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i :class="item.icon" class="text-gray-900 text-xl"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="flex flex-col items-center">
      <small>
        Designed & Built by Ahmad Ridwan
      </small>
      <small>&copy; Copyright {{ new Date().getFullYear() }}</small>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      social: [
        {
          icon: 'gsicon-github',
          link: 'https://github.com/pujakesuma',
          label: 'GitHub'
        },
        {
          icon: 'gsicon-linkedin',
          link: 'https://www.linkedin.com/in/ahmad-ridwan/',
          label: 'Linkedin'
        },
        {
          icon: 'gsicon-instagram',
          link: 'https://www.instagram.com/ahmad.rdwann/',
          label: 'Instagram'
        },
        {
          icon: 'gsicon-youtube',
          link: 'https://www.youtube.com/channel/UCQ5Ki8OzJi_t1xTbkymYqMQ',
          label: 'Youtube'
        }
      ]
    };
  }
};
</script>

<style></style>
