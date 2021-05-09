<template>
  <div class="home">
    <m-header />
  </div>
</template>

<script>
import Header from 'components/Header/';

export default {
  name: 'home',
  components: {
    'm-header': Header,
  },
};
</script>
