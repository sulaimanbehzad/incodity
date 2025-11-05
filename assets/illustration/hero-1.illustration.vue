<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="100%"
    viewBox="0 0 1920 1280"
    class="illustration-line"
  >
    <defs>
      <clipPath id="clip-path-homepage-4">
        <rect id="Frame" width="1920" height="1280" fill="#fff"></rect>
      </clipPath>
    </defs>
    <g id="stroke_homepage_intro" clip-path="url(#clip-path-homepage-4)">
      <path
        class="main_path path_with_animation"
        data-name="Path 4343"
        d="M3996.567,9111.964s64.994-164.806,450.317-359.789,730.889-230.944,927.3-412.247,236.243-450.511,82.41-438.149-118.887,220.333,39.832,248.605,279.814-26.18,434.232-390.281"
        transform="translate(-4040 -7801)"
        fill="none"
        stroke="currentColor"
        stroke-width="10"
      ></path>
    </g>
  </svg>
</template>

<style>
  .path_with_animation {
    stroke-dasharray: 3500;
    stroke-dashoffset: -3500;
    animation: dash_ani 3s ease forwards;
    animation-fill-mode: forwards;
  }

  @keyframes dash_ani {
    100% {
      stroke-dashoffset: 0;
    }
  }
</style>
