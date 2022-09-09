
<script setup>
import { ref, computed } from 'vue';
import ImageDropper from '@/components/inputs/ImageDropper.vue';

const imageOne = ref(null);
const imageTwo = ref(null);

const hasImages = computed(() => imageOne.value && imageTwo.value);
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <ImageDropper v-model="imageOne" class="grid-item" />
    <ImageDropper v-model="imageTwo" class="grid-item" />
  </div>
  <div class="mt-4 grid-item">
    <p class="text-red-600" v-if="!hasImages">Once both images are selected above, you can compare them here.</p>
    <template v-if="hasImages">
      <img-comparison-slider>
        <img slot="first" :src="imageOne" />
        <img slot="second" :src="imageTwo" />
        <svg slot="handle" xmlns="http://www.w3.org/2000/svg" width="100" viewBox="-8 -3 16 6">
          <path stroke="#777" d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2" stroke-width="1" fill="#fff" vector-effect="non-scaling-stroke"></path>
        </svg>
      </img-comparison-slider>
    </template>
  </div>
</template>

<style scoped>
.overlaid-images {
  @apply absolute;
}
.grid-item {
  @apply border-2 border-gray-400 rounded-md p-4;
}
</style>
