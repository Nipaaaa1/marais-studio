<template>
  <Section class="md:px-[6.25rem]">
    <div class="flex flex-col gap-3 md:flex-row md:gap-[7.5rem]">
      <img
        src="/public/images/mobile/lamp.png"
        alt="A hand holding a lamp"
        class="h-max w-full md:hidden"
      />
      <img
        src="/public/images/desktop/lamp.png"
        alt="A hand holding a lamp"
        class="hidden h-max w-full max-w-[30rem] md:block"
      />
      <div>
        <h3 class="mb-3 text-lg md:text-lg">
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
        <p class="max-w-prose">
          Our deliberate smallness enables effective communication with your
          team. By nurturing an environment of clear dialogue, we gain insight
          into your distinctive vision and the means to achieve your project
          objectives.
        </p>
      </div>
    </div>
  </Section>
</template>
