<template>
  <div
    class="relative min-h-svh bg-white font-hanken-grotesk text-md text-black md:text-desktop-md"
  >
    <Navigation />
    <Hero />
    <main
      class="md:px-desktop flex flex-col gap-16 px-6 py-16 md:gap-32 md:py-32"
    >
      <About />
      <Services />
      <Works />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<style>
.footer-title {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #f9fbfa;
}
</style>
