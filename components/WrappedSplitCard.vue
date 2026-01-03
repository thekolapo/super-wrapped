<!-- components/WrappedCardSplit.vue -->
<template>
  <article
    class="wrapped-card wrapped-card--split"
    :class="`wrapped-card--${variant}`"
  >
    <div class="wrapped-card__copy">
      <span v-if="label" class="wrapped-card__label u-text-xs">{{
        label
      }}</span>
      <h2 class="u-text-h1 wrapped-card__animated-text">{{ heading }}</h2>
      <p class="wrapped-card__body wrapped-card__animated-text">{{ body }}</p>
      <button
        class="wrapped-card__button c-button"
        :class="buttonClass"
        @click="$emit('button-click')"
      >
        {{ buttonText }}
      </button>
    </div>
    <slot name="illustration">
      <svg
        class="wrapped-card__illustration"
        :class="illustrationClass"
        width="418"
        height="487"
        viewBox="0 0 418 487"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <circle
          cx="265.827"
          cy="433.646"
          r="35.4725"
          transform="rotate(33.5788 265.827 433.646)"
          fill="#232323"
        />
        <ellipse
          class="circle"
          cx="256.879"
          cy="429.172"
          rx="35.4725"
          ry="35.4724"
          transform="rotate(33.5788 256.879 429.172)"
          fill="#EF91F7"
        />
        <circle
          cx="364.827"
          cy="435.646"
          r="35.4725"
          transform="rotate(33.5788 364.827 435.646)"
          fill="#232323"
        />
        <ellipse
          class="circle"
          cx="355.879"
          cy="431.172"
          rx="35.4725"
          ry="35.4724"
          transform="rotate(33.5788 355.879 431.172)"
          fill="#7FD1FE"
        />
        <circle
          cx="265.827"
          cy="346.646"
          r="35.4725"
          transform="rotate(33.5788 265.827 346.646)"
          fill="#232323"
        />
        <ellipse
          class="circle"
          cx="256.879"
          cy="342.172"
          rx="35.4725"
          ry="35.4724"
          transform="rotate(33.5788 256.879 342.172)"
          fill="#7FD1FE"
        />
        <circle
          cx="364.827"
          cy="348.646"
          r="35.4725"
          transform="rotate(33.5788 364.827 348.646)"
          fill="#232323"
        />
        <ellipse
          class="circle"
          cx="355.879"
          cy="344.172"
          rx="35.4725"
          ry="35.4724"
          transform="rotate(33.5788 355.879 344.172)"
          fill="#FFD2E1"
        />
        <circle
          cx="265.827"
          cy="246.646"
          r="35.4725"
          transform="rotate(33.5788 265.827 246.646)"
          fill="#232323"
        />
        <ellipse
          class="circle"
          cx="256.879"
          cy="242.172"
          rx="35.4725"
          ry="35.4724"
          transform="rotate(33.5788 256.879 242.172)"
          fill="#F7F0E5"
        />
        <circle
          cx="364.827"
          cy="248.646"
          r="35.4725"
          transform="rotate(33.5788 364.827 248.646)"
          fill="#232323"
        />
        <ellipse
          cx="355.879"
          cy="244.172"
          rx="35.4725"
          ry="35.4724"
          transform="rotate(33.5788 355.879 244.172)"
          fill="#7FD1FE"
        />
        <circle
          cx="265.827"
          cy="152.646"
          r="35.4725"
          transform="rotate(33.5788 265.827 152.646)"
          fill="#232323"
        />
        <ellipse
          class="circle"
          cx="256.879"
          cy="148.172"
          rx="35.4725"
          ry="35.4724"
          transform="rotate(33.5788 256.879 148.172)"
          fill="#7FD1FE"
        />
        <circle
          cx="364.827"
          cy="154.646"
          r="35.4725"
          transform="rotate(33.5788 364.827 154.646)"
          fill="#232323"
        />
        <ellipse
          class="circle"
          cx="355.879"
          cy="150.172"
          rx="35.4725"
          ry="35.4724"
          transform="rotate(33.5788 355.879 150.172)"
          fill="#7FD1FE"
        />
        <circle
          cx="262.827"
          cy="53.6462"
          r="35.4725"
          transform="rotate(33.5788 262.827 53.6462)"
          fill="#232323"
        />
        <ellipse
          class="circle"
          cx="253.879"
          cy="49.1723"
          rx="35.4725"
          ry="35.4724"
          transform="rotate(33.5788 253.879 49.1723)"
          fill="#7FD1FE"
        />
        <circle
          cx="361.827"
          cy="55.6462"
          r="35.4725"
          transform="rotate(33.5788 361.827 55.6462)"
          fill="#232323"
        />
        <ellipse
          class="circle"
          cx="352.879"
          cy="51.1723"
          rx="35.4725"
          ry="35.4724"
          transform="rotate(33.5788 352.879 51.1723)"
          fill="#7FD1FE"
        />
        <circle
          cx="65.8283"
          cy="434.646"
          r="35.4725"
          transform="rotate(33.5788 65.8283 434.646)"
          fill="#232323"
        />
        <ellipse
          cx="56.8797"
          cy="430.172"
          rx="35.4725"
          ry="35.4724"
          transform="rotate(33.5788 56.8797 430.172)"
          fill="#7FD1FE"
        />
        <circle
          cx="164.827"
          cy="436.646"
          r="35.4725"
          transform="rotate(33.5788 164.827 436.646)"
          fill="#232323"
        />
        <ellipse
          cx="155.879"
          cy="432.172"
          rx="35.4725"
          ry="35.4724"
          transform="rotate(33.5788 155.879 432.172)"
          fill="#7FD1FE"
        />
        <circle
          cx="61.8283"
          cy="347.646"
          r="35.4725"
          transform="rotate(33.5788 61.8283 347.646)"
          fill="#232323"
        />
        <ellipse
          class="circle"
          cx="52.8797"
          cy="343.172"
          rx="35.4725"
          ry="35.4724"
          transform="rotate(33.5788 52.8797 343.172)"
          fill="#7FD1FE"
        />
        <circle
          cx="160.827"
          cy="349.646"
          r="35.4725"
          transform="rotate(33.5788 160.827 349.646)"
          fill="#232323"
        />
        <ellipse
          class="circle"
          cx="151.879"
          cy="345.172"
          rx="35.4725"
          ry="35.4724"
          transform="rotate(33.5788 151.879 345.172)"
          fill="#7FD1FE"
        />
        <circle
          cx="61.8283"
          cy="247.646"
          r="35.4725"
          transform="rotate(33.5788 61.8283 247.646)"
          fill="#232323"
        />
        <ellipse
          class="circle"
          cx="52.8797"
          cy="243.172"
          rx="35.4725"
          ry="35.4724"
          transform="rotate(33.5788 52.8797 243.172)"
          fill="#7FD1FE"
        />
        <circle
          cx="160.827"
          cy="249.646"
          r="35.4725"
          transform="rotate(33.5788 160.827 249.646)"
          fill="#232323"
        />
        <ellipse
          class="circle"
          cx="151.879"
          cy="245.172"
          rx="35.4725"
          ry="35.4724"
          transform="rotate(33.5788 151.879 245.172)"
          fill="#7FD1FE"
        />
        <circle
          cx="61.8283"
          cy="153.646"
          r="35.4725"
          transform="rotate(33.5788 61.8283 153.646)"
          fill="#232323"
        />
        <ellipse
          class="circle"
          cx="52.8797"
          cy="149.172"
          rx="35.4725"
          ry="35.4724"
          transform="rotate(33.5788 52.8797 149.172)"
          fill="#7FD1FE"
        />
        <circle
          cx="160.827"
          cy="155.646"
          r="35.4725"
          transform="rotate(33.5788 160.827 155.646)"
          fill="#232323"
        />
        <ellipse
          class="circle"
          cx="151.879"
          cy="151.172"
          rx="35.4725"
          ry="35.4724"
          transform="rotate(33.5788 151.879 151.172)"
          fill="#FF824D"
        />
        <circle
          cx="58.8283"
          cy="54.6462"
          r="35.4725"
          transform="rotate(33.5788 58.8283 54.6462)"
          fill="#232323"
        />
        <ellipse
          class="circle"
          cx="49.8797"
          cy="50.1723"
          rx="35.4725"
          ry="35.4724"
          transform="rotate(33.5788 49.8797 50.1723)"
          fill="#EF91F7"
        />
        <circle
          cx="157.827"
          cy="56.6462"
          r="35.4725"
          transform="rotate(33.5788 157.827 56.6462)"
          fill="#232323"
        />
        <ellipse
          class="circle"
          cx="148.879"
          cy="52.1723"
          rx="35.4725"
          ry="35.4724"
          transform="rotate(33.5788 148.879 52.1723)"
          fill="#7FD1FE"
        />
      </svg>
    </slot>
  </article>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    required: true,
    validator: (value) => ["blue", "cream", "pink"].includes(value),
  },
  label: String,
  heading: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
  buttonClass: String,
  illustrationClass: String,
});

defineEmits(["button-click"]);
</script>
