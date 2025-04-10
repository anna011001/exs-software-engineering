<script setup>
      const movies = [
        {
          title: "Sjećanja jedne gejše",
          image: "https://mozaik-knjiga.hr/wp-content/uploads/2024/12/Sjecanje-jedne-gejse.jpg",
        },
        {
          title: "Survivor Hrvatska 2025.",
          image: "https://static2.story.hr/api/v3/images/592/1184/487571?ts=2025-02-19T11:50:33",
        },
        {
          title: "Kamisama Hajimemashita",
          image: "https://m.media-amazon.com/images/M/MV5BYjQ2NWQ0Y2UtYzU5Yi00ZjI2LWE2MDEtMjRhZDNlZWJhOWQ3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        },
      ];

      const toggleDarkMode = () => {
      document.documentElement.classList.toggle('dark');
      };

</script>

<template>
  <div class="bg-gradient-to-br dark:from-indigo-950 dark:to-gray-950
  flex justify-center min-h-screen flex-col from-indigo-100 to-gray-100">

    <div class="bg-gradient-to-br dark:from-emerald-950 dark:to-indigo-950 
    rounded-2xl mt-10 mb-10 w-[90%] mx-auto p-4 sm:p-6 md:p-10 from-emerald-100 to-indigo-100">

      <div class="text-center">
        <span class="dark:text-gray-100 text-6xl text-gray-900">
        Pozdrav, ja sam 
        <span class="dark:text-cyan-400 text-6xl font-bold text-cyan-900">
        Anna Bissinger
        </span>
        </span>
      </div>

      <div class="h-1 dark:bg-teal-100 rounded-full mt-10 bg-teal-900"></div>

      <div class="dark:text-teal-100 text-2xl mt-6 text-teal-900">
      Moji omiljeni filmovi:
      </div>

<div class="flex flex-wrap justify-center gap-6 gap-y-11 mt-9">
<div 
  v-for="(movie, index) in movies" 
  :key="index" 
  class="flex flex-col items-center max-w-full"
>
  <img 
    :src="movie.image" 
    :alt="movie.title" 
    class="rounded-lg w-full max-w-[360px] h-auto object-cover aspect-[2/3]
    w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 
    h-auto max-h-[480px]"
  />

  <p class="dark:text-teal-100 text-2xl mt-3 text-center text-teal-900">
    {{ movie.title }}
  </p>
</div>

      </div>
    </div>

    <div ref="dark" class="w-1/4">
   <div @click="toggleDarkMode"
 class="bg-gray-100 text-gray-800 dark:bg-gray-950 dark:text-gray-300 p-4 rounded-full border">
 <b>Pritiskom se mijenja tema</b>
 </div>
</div>

  </div>
</template>