<template>
  <div
    class="relative min-h-svh bg-white font-hanken-grotesk text-md text-black"
  >
    <Navigation />
    <Hero />
    <main class="flex flex-col gap-16 px-6 py-16">
      <About />
      <Services />
      <Works />
      <Section>
        <div class="flex flex-col gap-3">
          <img
            src="/assets/images/mobile/lamp.png"
            alt="A hand holding a lamp"
            class="h-max w-full"
          />
          <div>
            <h3 class="mb-3 text-lg">
              “We believe in the power of
              <span class="text-primary">quality</span>, direct and honest
              <span class="text-primary">communication</span>”
            </h3>
            <a
              href="#"
              class="mb-6 flex w-max items-center border-b border-primary text-primary"
            >
              Get in Touch with Us <IconsArrowRight />
            </a>
            <p>
              Our deliberate smallness enables effective communication with your
              team. By nurturing an environment of clear dialogue, we gain
              insight into your distinctive vision and the means to achieve your
              project objectives.
            </p>
          </div>
        </div>
      </Section>
    </main>
    <footer class="w-full space-y-6 bg-black p-6">
      <div class="flex items-center gap-3">
        <span class="footer-title font-bebas-neue text-2xl">Marais Studio</span>
        <div class="flex flex-col gap-2 text-white">
          <span>Zurich, Switzerland</span>
          <span class="flex items-center"
            >Back to Top <IconsArrowUp class="h-full w-max"
          /></span>
        </div>
      </div>
      <ul class="space-y-3 text-white">
        <li>About Us</li>
        <li>Services</li>
        <li>Works</li>
      </ul>
      <div class="flex justify-between text-sm text-white">
        <span>Copyright 2024</span>
        <span>Devan Sayidina</span>
      </div>
    </footer>
  </div>
</template>

<style>
.footer-title {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #f9fbfa;
}
</style>
