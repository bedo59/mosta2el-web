<template>
  <div>
    <products />
    <chat />
    
  </div>
</template>

<script>
import products from "@/components/products.vue";
import Chat from '../components/chat.vue';
export default {
 
  components: {
    products,
    Chat,
  },
};
</script>

