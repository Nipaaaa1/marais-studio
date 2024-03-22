<template>
  <div
    class="text-md font-hanken-grotesk relative min-h-svh bg-white text-black"
  >
    <Navigation />
    <Hero />
    <main class="flex flex-col gap-16 px-6 py-16">
      <Section>
        <SectionTitle name="01 - About Us">
          Crafting
          <span class="text-primary"> exceptional products </span>that resonate
          with your audience, through strategic partnerships with leading
          companies and brands.
        </SectionTitle>
        <img
          src="/assets/images/mobile/meeting.png"
          alt="People's meeting at work"
          class="h-max w-full"
        />
        <h3 class="text-lg">
          “We're not just a studio, we're your steadfast ally”
        </h3>
        <div class="space-y-3">
          <p class="text-black/80">
            Embracing human-centered design, we ensure technology serves
            humanity, enriching experiences and solving real-world problems. As
            your committed long-term partner, we foster genuine collaboration
            from concept to product, fully invested in your success.
          </p>
          <a
            href="#"
            class="text-primary border-primary flex w-max items-center border-b"
          >
            How we Work <IconsArrowRight />
          </a>
        </div>
      </Section>
      <Section>
        <SectionTitle name="02 - Services">
          Marais Studio Specialize in
          <span class="text-primary"> websites </span> for a leading companies
        </SectionTitle>

        <div class="space-y-8">
          <Service>
            <ServiceImage
              src="_nuxt/assets/images/mobile/laptop.png"
              alt="A laptop on table"
            />
            <ServiceDescription
              title="Web Design"
              description="Putting People First in Web Design, we Harness Technology to
                Elevate Human Experiences and Address Real-World Issues. As Your
                Devoted Partner for the Long Haul, we Nurture Genuine
                Cooperation Throughout the Process, Completely Devoted to Your
                Achievement."
            />
          </Service>
          <ServiceImage
            src="_nuxt/assets/images/mobile/coding.png"
            alt="A person coding on a laptop"
          />
          <ServiceDescription
            title="Web Development"
            description="Prioritizing People in Web Development, we Utilize Technology to
                Enhance Human Experiences and Tackle Practical Challenges
                Head-On. As Your Committed Long-Term Collaborator, we Foster
                Authentic Collaboration Every Step of the Journey, Entirely
                Dedicated to Your Success."
          />
        </div>
      </Section>
    </main>
  </div>
</template>
