<template>
  <div class = "Images">
    <div class="img">
      <img src="/castle.png" alt="Castle" style="width:740px;height:463px;">
    </div>
  </div>
</template>

<style>
.Images {
  display: flex;
}

.img {
  flex: 50%;
  padding: 2px;
  border:1px;
  border-radius: 2%;
  margin-bottom: 0;
  width: auto;
  align: center;
}

@media screen and (max-width: 500px) {
  .img {
    width: 300px;
  }
}
</style>
