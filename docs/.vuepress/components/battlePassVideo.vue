<template>
  <div style="margin-right: 3rem; margin-left: 3rem;">
        <div class="flex card ">
            <div class="">
                <!-- <video style="max-width: 44.2rem; margin-left: auto; margin-right: auto;" controls>
                     <source src="/battlepass.mp4" type="video/mp4" >
                     Your browser does not support HTML5 video.
                </video> -->
            </div>
            <div class="card-container">
                <h3>The Battle Pass</h3>
                <p class="color-light">The BlockForge Battle Pass NFT is an ERC721 Token that will be distributed via a public mint. Each Battle Pass NFT is unique, in that it will have a unique number on the front and a unique Minecraft skin on the back.
                </p>
                <div class="color-blue">
                    <h5><span class="color-blue">-</span> Access to Blockforge Minecraft Server</h5>
                    <h5><span class="color-blue">-</span> Earn $FORGE tokens while playing Minecraft</h5>
                    <h5><span class="color-blue">-</span> Rentable to anyone for aminimum of 7 days</h5>
                    <h5><span class="color-blue">-</span> Unique Minecraft skin</h5>
                    <h5><span class="color-blue">-</span> Enables Battle Mode</h5>
                </div>
            </div>
            <div class="card-container">
                <h3>The Battle Pass</h3>
                <p class="color-light">The BlockForge Battle Pass NFT is an ERC721 Token that will be distributed via a public mint. Each Battle Pass NFT is unique, in that it will have a unique number on the front and a unique Minecraft skin on the back.
                </p>
                <div class="color-blue">
                    <h5><span class="color-blue">-</span> Access to Blockforge Minecraft Server</h5>
                    <h5><span class="color-blue">-</span> Earn $FORGE tokens while playing Minecraft</h5>
                    <h5><span class="color-blue">-</span> Rentable to anyone for aminimum of 7 days</h5>
                    <h5><span class="color-blue">-</span> Unique Minecraft skin</h5>
                    <h5><span class="color-blue">-</span> Enables Battle Mode</h5>
                </div>
            </div>
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
    flex-direction: row;
}


.color-blue {
    color: #63B3ED;
}

.color-red {
    color: #F56565;
}

.color-light {
    color: #CBD5E0;
}

.border-top {
    border-top: 4px solid #91A0BA;
}

.card-list {
    background-color: none;
    margin: 0;
}

p {

    font-size: 14px;
    padding-bottom: 30px;
}

h3 {
   color: #EDF2F7;
   letter-spacing: .1rem;

}

h4 {
    color: #EDF2F7;
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    font-weight: 700;
    font-size: 18px;
}

h5 {
    color: #EDF2F7;
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    font-weight: 400;
}


</style>
