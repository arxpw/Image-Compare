<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['update:modelValue']);

const imageData = ref(null);
const dropping = ref(false);

const allowDrop = e => {
  e.preventDefault();
  dropping.value = true;
};

const exitDrop = () => {
  dropping.value = false;
}

const updateModelVal = val => emit('update:modelValue', val);

const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});

const uploadFile = async e => {
  const file = e.target.files[0];
  const base64 = await toBase64(file);

  imageData.value = base64;
  updateModelVal(imageData.value);
}

const drop = async e => {
  e.preventDefault();

  dropping.value = false;

  if (e.dataTransfer.items) {
    const [item] = e.dataTransfer.items;
    const file = item.getAsFile();
    const base64 = await toBase64(file);

    imageData.value = base64;
    updateModelVal(imageData.value);
  }
}
</script>

<template>
  <div
    class="border text-blue-800 border-blue-600 p-4 rounded"
    :class="{ 'bg-blue-200': dropping }"
    @drop="drop"
    @dragover="allowDrop"
    @dragexit="exitDrop"
    @dragleave="exitDrop"
  >
    <input
      class="border border-blue-400 rounded-md p-3 w-full text-sm underline cursor-pointer"
      @change="uploadFile"
      type="file"
    />
    <p v-if="!imageData">Drag an image file into this box, or use the file picker.</p>
    <img class="border mt-3 rounded" draggable v-if="imageData" :src="imageData" />
  </div>
</template>
