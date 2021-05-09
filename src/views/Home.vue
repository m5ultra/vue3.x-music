<template>
  <div class="home">
    <m-header />
  </div>
</template>

<script>
import Header from '@/components/Header/';

export default {
  name: 'home',
  comments: {
    'm-header': Header,
  },
};
</script>
