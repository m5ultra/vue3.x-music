<template>
  <div class="home">
    <m-header />
    <tab />
  </div>
</template>

<script>
import Header from 'components/Header/';
import Tab from 'components/Tab/';

export default {
  name: 'home',
  components: {
    'm-header': Header,
    Tab,
  },
};
</script>
