<template>
  <div
    class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { LockClosedIcon } from '@heroicons/vue/solid';

  export default defineComponent({
    name: 'Auth',
    components: {
      LockClosedIcon,
    },
  });
</script>
