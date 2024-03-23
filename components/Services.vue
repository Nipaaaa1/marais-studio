<template>
  <Section class="md:pl-[6.25rem] md:pr-[12.5rem]" id="services">
    <SectionTitle name="02 - Services">
      Marais Studio Specialize in
      <span class="text-primary"> websites </span> for a leading companies
    </SectionTitle>

    <div class="w-full space-y-8 md:flex md:flex-col md:space-y-16">
      <Service>
        <img
          src="/public/images/mobile/laptop.png"
          alt="A laptop on table"
          class="h-max w-full md:hidden"
        />
        <img
          src="/public/images/desktop/laptop.png"
          alt="A laptop on table"
          class="hidden h-max w-full md:block md:max-w-[30rem]"
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
      <Service class="justify-end">
        <img
          src="/public/images/mobile/coding.png"
          alt="A person coding on a laptop"
          class="h-max w-full md:hidden"
        />
        <ServiceDescription
          title="Web Development"
          description="Prioritizing People in Web Development, we Utilize Technology to
        Enhance Human Experiences and Tackle Practical Challenges
        Head-On. As Your Committed Long-Term Collaborator, we Foster
        Authentic Collaboration Every Step of the Journey, Entirely
        Dedicated to Your Success."
        />
        <img
          src="/public/images/desktop/coding.png"
          alt="A person coding on a laptop"
          class="hidden h-max w-full md:block md:max-w-[30rem]"
        />
      </Service>
    </div>
  </Section>
</template>
