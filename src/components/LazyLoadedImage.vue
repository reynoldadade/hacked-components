<template>
  <!-- // you can pass all extra classes such as width and height by putting classes on the component when it is being used -->
  <figure v-lazyLoad class="image__wrapper">
    <slot>
      <ImageSpinner class="image__spinner" />
    </slot>

    <img :data-url="props.src" :alt="props.altText" class="image__item" />
  </figure>
</template>

<script setup lang="ts">
import ImageSpinner from "./ImageSpinner.vue";

export interface Props {
  src: string;
  altText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  src: "https://via.placeholder.com/150",
  altText: "A Lazy Loaded Image",
});
</script>

<style scoped lang="css">
.image__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.image__wrapper.loaded .image__item {
  visibility: visible;
  opacity: 1;
  border: 0;
}
.image__wrapper.loaded .image__spinner {
  display: none;
}
.image__item {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  transition: all 0.4s ease-in-out;
  opacity: 0;
  visibility: hidden;
}
</style>
