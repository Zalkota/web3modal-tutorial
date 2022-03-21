<template>
  <div class = "Images">
    <div class="img1">
      <img src="/pot_1.jpg" alt="plot1" style="width:200px;height:201px;">
    </div>
    <div class="img1">
      <img src="/plot_2.jpg" alt="token_back" style="width:200px;height:201px;">
    </div>
    <div class="img1">
      <img src="/plot4.jpg" alt="token_back" style="width:200px;height:201px;">
    </div>
  </div>
</template>

<style>
.Images {
  display: flex;
}

.img1 {
  flex: 33.33%;
  padding: 10px;
  height: inherit;
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
}

@media screen and (max-width: 300px) {
  .img1 {
    width: 300px;
  }
}
</style>
