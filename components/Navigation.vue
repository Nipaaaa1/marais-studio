<script setup lang="ts">
const menu = ref(false);
const nav = ref(null);

const changeMenu = () => {
  menu.value = !menu.value;
};

onClickOutside(nav, () => {
  changeMenu();
});
</script>

<template>
  <nav
    class="md:px-desktop fixed top-0 z-20 flex w-full items-center justify-between p-6 mix-blend-difference invert"
  >
    <span class="font-bebas-neue text-4xl">Marais Studio</span>
    <svg
      v-if="menu"
      class="cursor-pointer mix-blend-difference invert md:hidden"
      xmlns="http://www.w3.org/2000/svg"
      width="43"
      height="43"
      viewBox="0 0 24 24"
      @click="changeMenu"
    >
      <path
        fill="currentColor"
        d="m12 12.708l-5.246 5.246q-.14.14-.344.15q-.204.01-.364-.15t-.16-.354q0-.194.16-.354L11.292 12L6.046 6.754q-.14-.14-.15-.344q-.01-.204.15-.364t.354-.16q.194 0 .354.16L12 11.292l5.246-5.246q.14-.14.344-.15q.204-.01.364.15t.16.354q0 .194-.16.354L12.708 12l5.246 5.246q.14.14.15.344q.01.204-.15.364t-.354.16q-.194 0-.354-.16z"
      />
    </svg>
    <svg
      v-else
      class="cursor-pointer mix-blend-difference invert md:hidden"
      width="43"
      height="43"
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click="changeMenu"
    >
      <path
        d="M8.06258 30.9421C7.80816 30.9421 7.59555 30.8555 7.42475 30.6823C7.25275 30.5103 7.16675 30.2983 7.16675 30.0462C7.16675 29.7918 7.25275 29.5792 7.42475 29.4084C7.59555 29.2364 7.80816 29.1504 8.06258 29.1504H34.9376C35.192 29.1504 35.4046 29.2364 35.5754 29.4084C35.7462 29.5804 35.8322 29.7936 35.8334 30.048C35.8334 30.3024 35.7474 30.5151 35.5754 30.6859C35.4034 30.8567 35.1908 30.9421 34.9376 30.9421H8.06258ZM8.06258 22.3958C7.80816 22.3958 7.59555 22.3098 7.42475 22.1378C7.25275 21.9658 7.16675 21.7532 7.16675 21.5C7.16675 21.2468 7.25275 21.0342 7.42475 20.8622C7.59675 20.6913 7.80936 20.6059 8.06258 20.6059H34.9376C35.192 20.6059 35.4046 20.6919 35.5754 20.8639C35.7474 21.0359 35.8334 21.2492 35.8334 21.5036C35.8334 21.758 35.7474 21.9706 35.5754 22.1414C35.4046 22.3122 35.192 22.3976 34.9376 22.3976L8.06258 22.3958ZM8.06258 13.8496C7.80816 13.8496 7.59555 13.7642 7.42475 13.5934C7.25394 13.4226 7.16794 13.2093 7.16675 12.9537C7.16675 12.6993 7.25275 12.4867 7.42475 12.3159C7.59555 12.1451 7.80816 12.0597 8.06258 12.0597H34.9376C35.192 12.0597 35.4046 12.1457 35.5754 12.3177C35.7474 12.4897 35.8334 12.7023 35.8334 12.9555C35.8334 13.2099 35.7474 13.4232 35.5754 13.5952C35.4034 13.766 35.1908 13.8514 34.9376 13.8514L8.06258 13.8496Z"
        fill="#F9FBFA"
      />
    </svg>
    <ul
      class="hidden items-center gap-6 text-center *:cursor-pointer *:text-lg md:flex"
    >
      <li>About</li>
      <li>Services</li>
      <li>Works</li>
      <li class="rounded-lg bg-black px-[0.875rem] py-[0.625rem] text-white">
        Contact Us
      </li>
    </ul>
  </nav>
  <div
    ref="nav"
    v-if="menu"
    class="fixed left-6 right-6 top-24 z-20 flex justify-center rounded-lg bg-white py-12 md:hidden"
  >
    <ul class="space-y-6 text-center *:text-lg">
      <li>About</li>
      <li>Services</li>
      <li>Works</li>
      <li class="rounded-lg bg-black px-[0.875rem] py-[0.625rem] text-white">
        Contact Us
      </li>
    </ul>
  </div>
</template>
