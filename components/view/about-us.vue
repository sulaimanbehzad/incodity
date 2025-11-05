<template>
  <div class="about">
    <div
      class="about__info"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
    >
      <h1 class="about__title"> ABOUT Incodity </h1>
      <p class="about__desc">
        With a rich history rooted in top-tier tech companies and government
        sectors, our team brings a wealth of experience to the table. United by
        a common purpose, we strive to provide high-quality solutions uniquely
        tailored to meet our clients' needs.
      </p>
    </div>
    <timeline-tracker :item-list="timelineItems" />
  </div>
</template>

<script setup>
  const timelineItems = [
    // FIXME: move to constants
    {
      id: 1,
      iconName: "forest",
      title: "Journey",
      illustration: "travel",
      description:
        "Our journey began as a collective of seasoned developers, each bringing unique skills and expertise from diverse engineering backgrounds. We sought to create a company dedicated to quality and excellence. Over time, we've expanded our services, creating a strong network of talented engineers ready to face any challenge and bring your vision to life.",
    },
    {
      id: 2,
      iconName: "flag",
      title: "Mission",
      illustration: "mission",
      description:
        "At the heart of our mission is a commitment to delivering code that not only functions optimally but is also delivered punctually. We understand the importance of time in business and strive for excellence in every project, irrespective of its size.",
    },
    {
      id: 3,
      iconName: "glasses",
      title: "Vision",
      illustration: "vision",
      description:
        "Our vision extends beyond just delivering services. We aspire to become trusted partners for businesses of all sizes. Our aim is to provide innovative and reliable tech solutions that drive growth and efficiency, propelling your business towards success.",
    },
    {
      id: 4,
      iconName: "champion",
      title: "Values",
      illustration: "kindness",
      description:
        "Our core values are the foundation of our work and our relationships with clients and partners. Quality, reliability, innovation, and client satisfaction are not just words for us, but principles we live by, ensuring every project we undertake aligns with these values.",
    },
    {
      id: 5,
      iconName: "story",
      lineVisibility: false,
      title: "Story",
      illustration: "story",
      description:
        "We are more than just a team – we are a family of passionate engineers striving to make a difference in the digital world. United by a common goal, we came together from various engineering principles to build a company recognized for its unwavering commitment to quality. This is our story, and we invite you to become a part of it.",
    },
  ];
</script>

<style lang="scss" scoped>
  .about {
    @include flex(column);

    &__info {
      max-width: 768px;
      width: 100%;
      margin: 0 auto 8.6rem;
      text-align: center;
    }

    &__title {
      @include typography(bold-36);
      @include mq(small) {
        @include typography(bold-24);
      }
    }

    &__desc {
      @include typography(semi-bold-14);
      @include mq(small) {
        @include typography(semi-bold-12);
      }
      margin-top: 1.6rem;
    }
  }
</style>
