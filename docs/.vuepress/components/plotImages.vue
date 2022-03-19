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
  padding: 5px;
}

@media screen and (max-width: 300px) {
  .img1 {
    width: 300px;
  }
}
</style>
