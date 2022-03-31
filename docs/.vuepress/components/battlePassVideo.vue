<template>
  <div class = "Images">
        <video style="max-width: 24rem; display: block; margin-left: auto; margin-right: auto; margin-bottom: 2rem; margin-top: 2rem;" controls>
             <source src="/battlepass.mp4" type="video/mp4" >
             Your browser does not support HTML5 video.
        </video>
  </div>
</template>

<style>
.Images {
  display: flex;
}

.img1 {
  flex: 100%;
  padding: 5px;
}

@media screen and (max-width: 300px) {
  .img1 {
    width: 300px;
  }
}
</style>
