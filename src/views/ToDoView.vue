<template>
  <div>
    <h1 class="text-2xl font-bold text-gray-700 mb-2">Project To-Do</h1>
    <p>The project is currently just a rough front-end implementation. (not yet clean!)</p>
    <hr class="my-7">
    <p class="mb-4">The following features are planned for this side-project.</p>
    <ul>
      <li>Backend, To be written in PHP with Symfony</li>
      <ul>
        <li>Authentication</li>
        <ul>
          <li>Register an account with <u>Google</u>, <u>GitHub</u> and <u>Email</u></li>
          <li>Login</li>
          <li>Logout</li>
          <li>Password Reset</li>
        </ul>
        <li>Create "Folder-level" image comparisons</li>
        <li>Image uploading</li>
        <li>Link sharing, share your image comparisons</li>
      </ul>
    </ul>
  </div>
</template>

<style scoped>
ul {
  @apply text-gray-700 pl-5;
  list-style:square;
}
</style>
