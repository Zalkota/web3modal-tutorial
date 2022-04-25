<template>
  <div class = "castle-image-container">
    <div class="castle-image">
      <img src="/castle.png" alt="Castle" style="width:740px;height:463px;">
    </div>
  </div>
</template>

<style>
.castle-image-container {
  display: flex;
}

.castle-image {
  flex: 50%;
  padding: 2px;
  border:1px;
  border-radius: 2%;
  margin-bottom: 0;
  width: auto;
  align: center;
}

@media screen and (max-width: 500px) {
  .castle-image {
    width: 300px;
  }
}
</style>
