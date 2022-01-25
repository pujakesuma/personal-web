<template>
  <div
    class="h-auto sm:h-screen flex justify-center items-center bg-gray-50 py-16 sm:py-0"
  >
    <div
      data-aos="fade-right"
      data-aos-easing="ease-in-back"
      data-aos-delay="200"
      data-aos-once="true"
      data-aos-offset="0"
      data-aos-duration="500"
      class="flex flex-col items-center text-center"
    >
      <h2 class="text-gray-900 text-2xl font-bold sm:text-3xl md:text-4xl mb-3">
        Work
      </h2>
      <div class="w-1/3 h-0.5 bg-red-900"></div>
      <div class="w-11/12 sm:w-1/2 mx-auto ">
        <div
          class="
                  p-10
                  md:px-7
                  xl:px-10
                  rounded-xl
                  bg-white
                  shadow-md
                  hover:shadow-lg
                  mt-8
                  "
        >
          <div
            class="
              flex
              items-center
              justify-center
              rounded-2xl
              mb-4
              "
          >
            <NuxtImg
                provider="cloudinary"
                src="personal/suaksa_spgxpf.png"
                alt="logo"
                width="35"
                height="35"
                fit="cover"
                format="webp"
            />
          </div>
          <h4 class="font-semibold text-xl text-dark mb-3">
            Suaksa ID
          </h4>
          <p class="text-body-color">
            Our current project E-Invitation with 10+ user in 4 month. Built
            with Nuxt JS and Node JS.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
