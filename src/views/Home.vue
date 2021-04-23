<template>
  <div>
    <house />
    <chat />
  </div>
</template>

<script>
import house from "@/components/house.vue";
import Chat from '../components/chat.vue';
export default {
  name: "home",
  components: {
    house,
    Chat,
  },
};
</script>

<style>
#click {
  display: none;
}
label {
  
  position: fixed;
  bottom: 0px;
  left: 50px;
  padding: 5px;
  width: 5px;
  position: fixed;
 left:    50px;
  bottom: 0px;
  height: 55px;
  width: 55px;
  background: -webkit-linear-gradient(left, #a445b2, #fa4299);
  text-align: center;
  line-height: 55px;
  border-radius: 50px;
  font-size: 30px;
  color: #fff;
  cursor: pointer;
}
label i {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.4s ease;
}
label i.fas {
  opacity: 0;
  pointer-events: none;
}
#click:checked ~ label i.fas {
  opacity: 1;
  pointer-events: auto;
  transform: translate(-50%, -50%) rotate(180deg);
}
#click:checked ~ label i.fab {
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, -50%) rotate(180deg);
}
.wrapper {
  position: absolute;
  right: 30px;
  bottom: 0px;
  max-width: 400px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
#click:checked ~ .wrapper {
  opacity: 1;
  bottom: 85px;
  pointer-events: auto;
}

</style>
