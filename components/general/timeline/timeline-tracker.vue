<template>
  <ul>
    <li v-for="(timelineItem, index) in itemList" :key="timelineItem.id">
      <timeline-tracker-item
        :tracker-line="timelineItem.lineVisibility"
        :icon-name="timelineItem.iconName"
      >
        <template #after>
          <div
            class="card"
            :data-aos="`fade-${index % 2 == 0 ? 'left' : 'right'}`"
          >
            <div class="card__details">
              <h3 class="card__title">{{ timelineItem.title }}</h3>
              <p class="card__desc">
                {{ timelineItem.description }}
              </p>
            </div>
            <component
              :is="illustrationMap[timelineItem.illustration]"
              class="card__thumbnail"
            />
          </div>
        </template>
      </timeline-tracker-item>
    </li>
  </ul>
</template>

<script setup>
  import TravelIllustration from "@/assets/illustration/travel.illustration.vue";
  import VisionIllustration from "@/assets/illustration/vision.illustration.vue";
  import StoryIllustration from "@/assets/illustration/story.illustration.vue";
  import KindnessIllustration from "@/assets/illustration/kindness.illustration.vue";
  import MissionIllustration from "@/assets/illustration/mission.illustration.vue";

  const illustrationMap = {
    travel: TravelIllustration,
    vision: VisionIllustration,
    story: StoryIllustration,
    kindness: KindnessIllustration,
    mission: MissionIllustration,
  };

  defineProps({
    itemList: {
      type: Array,
      required: true,
    },
  });
</script>

<style lang="scss" scoped>
  .card {
    @include flex;
    border-radius: $border-radius-8x;
    background-color: var(--color-background-main);
    padding: 2.4rem;
    border: 0.2rem solid var(--color-background-divider);
    overflow: hidden;

    &__details {
      width: 66.6666%;
      z-index: 1;
    }

    &__title {
      @include typography(bold-24);
    }

    &__desc {
      @include typography(regular-14);
      margin-top: 0.8rem;
      color: var(--color-text-type-4);
    }

    &__thumbnail {
      align-self: stretch;
      align-self: stretch;
      transform: translate(25%, 25%) scale(1.7);
      margin: 0 0.4rem;
      width: 100%;
      height: 100%;
      max-width: 180px;
      max-height: 180px;
    }

    @include mq(medium) {
      &__thumbnail {
        display: none;
      }

      &__details {
        width: 100%;
      }
    }
  }
</style>

