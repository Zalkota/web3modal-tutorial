<template>
  <div style="margin-right: 3rem; margin-left: 3rem;">
        <div class="flex"  style="margin-top: 3rem;">
            <div class="">
                <video style="display: block; max-width: 44.2rem; max-width: 612px;" controls>
                     <source src="/battlepass.mp4" type="video/mp4" >
                     Your browser does not support HTML5 video.
                </video>
                <div class="color-light" style="text-align: center; display: block; margin-left: auto; margin-right: auto;">
                    <h5>The beta version of the Diamond Battle Pass NFT.</h5>
                </div>
            </div>
            <!-- <div class="card-container">
                <h3></h3>

                <div class="color-blue">
                    <h5><span class="color-blue">-</span> Access to Blockforge Minecraft Server</h5>
                    <h5><span class="color-blue">-</span> Earn $FORGE tokens while playing Minecraft</h5>
                    <h5><span class="color-blue">-</span> Rentable to anyone for aminimum of 7 days</h5>
                    <h5><span class="color-blue">-</span> Unique Minecraft skin</h5>
                    <h5><span class="color-blue">-</span> Enables Battle Mode</h5>
                </div>
            </div> -->
        </div>
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

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 1rem;
  background-color: #2D3748;

}


/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.card-container {
  padding: 4px 1.25rem 10px;
}

.flex {
    display: flex;
    flex-direction: column;
}


.color-blue {
    color: #63B3ED;
}

.color-red {
    color: #F56565;
}

.color-light {
    color: #718096;
}

.border-top {
    border-top: 4px solid #91A0BA;
}

.card-list {
    background-color: none;
    margin: 0;
}




</style>
