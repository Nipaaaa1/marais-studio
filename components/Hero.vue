<template>
  <header id="header" class="relative">
    <img
      src="/public/images/mobile/hero.png"
      alt="A man using laptop"
      class="h-max w-full md:hidden"
    />
    <img
      src="/public/images/desktop/hero.png"
      alt="A man using laptop"
      class="hidden h-max w-full md:block"
    />
    <div
      class="md:px-desktop absolute top-0 flex size-full items-center p-6 md:items-start"
    >
      <div
        class="flex w-full -translate-y-[7.3125rem] flex-col gap-6 md:translate-y-[23.1875rem]"
      >
        <h1 class="font-bebas-neue text-2xl text-white md:text-desktop-2xl">
          You Deserve a Great Website
        </h1>
        <div class="space-y-2 md:space-y-6 md:self-end">
          <p class="w-[20.0625rem] text-white/80">
            One of the most impressive aspects of MARAIS's work is their ability
            to capture the essence of our brand and translate it into a visually
            stunning digital platform.
          </p>
          <div class="flex flex-col text-white">
            <span>Adam Smith</span>
            <span class="text-sm md:text-desktop-sm">CEO of Hubble</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
