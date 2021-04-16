<template>
<div>
    <about />
     <a class="fixedButton" href="/messages">
      <div class="roundedFixedBtn"><img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"></div>
    </a>
</div>
</template>

<script>
import about from "@/components/about.vue";
export default {
    name: "aboutus",
    components: {
 about,
  }
}
</script>

<style>
.fixedButton {
  position: fixed;
  bottom: 0px;
  right: 0px;
  padding: 20px;
}
.roundedFixedBtn {
  height: 60px;
  line-height: 80px;
  width: 60px;
  font-size: 1em;
   font-weight:small;
  border-radius: 50%;
  background-color: #17a2b8;
  color: white;
  text-align: center;
  cursor: pointer;
}
</style>
