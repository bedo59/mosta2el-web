<template>
  <div>
    <about />
    <chat />
   
  </div>
</template>

<script>
import about from "@/components/about.vue";
import Chat from '../components/chat.vue';
export default {
  name: "aboutus",
  components: {
    about,
    Chat,
  },
};
</script>

