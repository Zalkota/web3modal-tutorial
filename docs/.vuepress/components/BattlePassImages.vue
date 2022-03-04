<template>
  <div class = "Images">
    <div class="img">
      <img src="/diamond_frontside_rendered.jpg" alt="token_front" style="width:250px;height:250px;">
    </div>
    <div class="img">
      <img src="/diamond_backside_rendered.jpg" alt="token_back" style="width:250px;height:250px;">
    </div>
  </div>
</template>

<style>
.Images {
  display: flex;
}

.img {
  flex: 50%;
  padding: 50px;
  border:1px;
  border-radius: 10%;
}

@media screen and (max-width: 500px) {
  .img {
    width: 300px;
  }
}
</style>
