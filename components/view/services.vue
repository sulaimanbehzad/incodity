<template>
  <div class="services" id="services">
    <div
      class="details"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <h1 class="details__title">Services</h1>
      <p class="details__desc">
        Our team of skilled developers crafts tailored solutions that align with
        your unique goals, ensuring efficiency, effectiveness, and growth.
      </p>
    </div>
    <section
      class="tab-view"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <div class="tab-view__tabs tabs">
        <button
          v-for="tab in tabContentList"
          :key="tab.id"
          class="tabs__btn"
          :class="{ tabs__btn_active: tab.id === activeTab.id }"
          @click="activeTab = tab"
        >
          <base-icon class="tabs__icon" :icon-name="tab.iconName" />
          <span>
            {{ tab.title }}
          </span>
        </button>
      </div>
      <div
        class="tab-view__view view"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <base-icon
          class="view__thumbnail"
          :key="activeTab.iconName"
          :icon-name="activeTab.iconName"
        />
        <base-icon
          :key="activeTab.iconName"
          :icon-name="activeTab.iconName"
          class="view__watermark"
        />
        <h3 class="view__title"> {{ activeTab.title }} </h3>
        <!-- <p class="view__desc">
          {{ activeTab.description }}
        </p> -->
        <ul class="view__desc">
          <li
            class="view__desc-item"
            v-for="(text, index) in activeTab.description"
            :key="index"
          >
            <span class="view__desc-icon">
              <base-icon icon-name="label" />
            </span>
            <span>{{ text }}</span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
  const tabContentList = [
    {
      id: 1,
      iconName: "solution",
      title: "Custom Application Development",
      description: [
        "Craft tailored software solutions that seamlessly align with your unique needs.",
        "Transform your business processes with innovative and reliable software applications.",
        "Harness the expertise of our skilled developers to create customized solutions that drive your success.",
        "Leverage our agile development methodologies to deliver high-quality software solutions on time and within budget.",
        "Empower your team with robust and user-friendly software applications that enhance productivity and efficiency.",
      ],
    },
    {
      id: 2,
      iconName: "secure",
      title: "Secure User Experience",
      description: [
        "Ensure the security of your website with our comprehensive security testing services.",
        "We conduct thorough assessments to identify vulnerabilities and weaknesses in your web applications.",
        "Our experts perform penetration testing, vulnerability scanning, and code review to ensure your website's security.",
        "Gain confidence in the protection of your sensitive data and safeguard your online presence.",
      ],
    },
    {
      id: 3,
      iconName: "people-group",
      title: "Automation",
      description: [
        "Automate repetitive tasks and streamline your business processes with our automation solutions.",
        "Reduce costs and improve efficiency by automating manual processes and workflows.",
        "Elevate your business operations with intelligent automation solutions that drive productivity and growth.",
        "Empower your team to focus on higher-value tasks by automating routine and time-consuming activities.",
        "Experience the transformative impact of automation that streamlines operations and optimizes resource utilization.",
      ],
    },
    {
      id: 4,
      iconName: "troubleshoot",
      title: "Testing and Quality Assurance",
      description: [
        "Leverage our comprehensive testing and quality assurance services, including functional and performance testing automation.",
        "Our experts develop custom solutions to ensure the quality, reliability, and security of your applications, giving you peace of mind.",
      ],
    },
    {
      id: 5,
      iconName: "shape-line",
      title: "UI/UX Design",
      description: [
        "Create user-centered and engaging interfaces that enhance user experience and satisfaction.",
        "Design intuitive and visually appealing interfaces that align with your brand identity.",
        "Craft user interfaces that are easy to navigate and accessible to a diverse range of users.",
        "Transform your digital presence with user-friendly and aesthetically pleasing interfaces.",
        "Empower your users with intuitive and seamless interactions through exceptional UI/UX design.",
      ],
    },
    {
      id: 6,
      iconName: "cloud",
      title: "Cloud Solutions",
      description: [
        "Harness the power of cloud computing to scale your business and optimize IT infrastructure.",
        "Migrate your applications and data to the cloud for enhanced accessibility, security, and scalability.",
        "Leverage cloud-based solutions to reduce costs, improve performance, and gain a competitive edge.",
        "Partner with our cloud experts to implement and manage cloud solutions that align with your business goals.",
        "Embrace the future of technology with cloud solutions that drive innovation and growth.",
      ],
    },
    {
      id: 7,
      iconName: "robot",
      title: "AI Solutions",
      description: [
        "Dev Fusion empowers businesses to harness the transformative power of AI with a comprehensive suite of AI solutions tailored to address specific business challenges and unlock new opportunities.",
        "Our AI experts leverage the latest advancements in AI algorithms and machine learning techniques to develop custom AI solutions that seamlessly integrate with your existing data infrastructure and business processes.",
        "Whether you seek to uncover hidden patterns and insights from your data, enhance customer engagement, optimize asset performance, mitigate fraud risks, streamline supply chains, automate repetitive tasks, or drive sales and marketing effectiveness, Dev Fusion's AI solutions deliver tangible results.",
      ],
    },
  ];

  const activeTab = ref(tabContentList[0]);
</script>

<style lang="scss" scoped>
  .services {
    &__details {
      max-width: 768px;
      width: 100%;
      margin: 0 auto;
    }
  }

  .details {
    text-align: center;

    &__title {
      @include typography(bold-36);
    }

    &__desc {
      @include typography(semi-bold-14);
      margin-top: 2.4rem;
    }
  }

  .tab-view {
    &__tabs {
      margin: 4.8rem 0 1.2rem;
    }
  }

  .tabs {
    @include flex($wrap: wrap, $align: stretch);
    gap: 0.8rem;

    &__btn {
      @include flex($dir: column, $align: center);
      @include typography(bold-16);
      background-color: var(--color-background-dark);
      padding: 2.4rem;
      flex-basis: calc(25% - 0.8rem);
      flex-grow: 1;
      border-radius: $border-radius-8x;
      user-select: none;
      border: 2px solid transparent;
      transition: {
        duration: 0.25s;
        property: border-color, background-color;
        timing-function: ease-out;
      }

      &_active {
        background-color: transparent;
        border-color: var(--color-background-divider);
      }
    }

    &__icon {
      margin-bottom: 1.2rem;
      --base-icon-size: 4.8rem;
    }
  }

  .view {
    // FIXME: use design system colors
    background-color: #dfdff265;
    border-radius: $border-radius-8x;
    padding: 2.4rem;
    position: relative;
    overflow: hidden;

    &__thumbnail {
      --base-icon-size: 6.4rem;
      margin-bottom: 1.2rem;
      // FIXME: use design system colors
      color: #388e3c;
      background-color: #c8e6c9;
      padding: 1.2rem;
      border-radius: $border-radius-8x;
      transition: transform 0.25s ease-out;

      &:hover {
        transform: scale(1.1) rotate(10deg);
      }
    }

    &__watermark {
      --base-icon-size: 4.8rem;
      position: absolute;
      opacity: 0.1;
      transform: scale(5.5) rotate(-135deg);
      z-index: -1;
      right: 0;
      top: 0;
    }

    &__title {
      @include typography(bold-20);
    }

    &__desc {
      margin-top: 2.4rem;
    }

    &__desc-item {
      @include typography(regular-14);
      @include flex($align: center, $justify: flex-start);
      margin-top: 1.2rem;
      gap: space(8);
      transition: gap 0.25s ease-out;

      &:hover {
        gap: space(12);
      }
    }

    &__desc-icon {
      color: #388e3c;
      width: 2rem;
      height: 2rem;
    }
  }
</style>

