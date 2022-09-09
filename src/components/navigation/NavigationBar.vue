<template>
  <div class="container mx-auto my-2">
    <nav class="text-white flex space-x-2">
      <RouterLink class="nav-item" to="/">Compare 2 Images</RouterLink>
      <RouterLink class="nav-item" to="/about">About</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
  .nav-item {
    @apply px-4 py-3 text-sm font-medium bg-gray-600 hover:bg-gray-700 rounded-md border border-gray-700;
  }
  .router-link-active {
    @apply bg-gray-800;
  }
</style>