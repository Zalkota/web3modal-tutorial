<template>
  <div class="container">
    <div class="timeline">
      <ul>
        <li>
          <div class="timeline-content">
            <h3 class="date">20th May, 2022</h3>
            <h1>Whitelisting</h1>
            <p>Whitelist open for general public to sign up.</p>
          </div>
        </li>
        <li>
          <div class="timeline-content">
            <h3 class="date">20th June, 2022</h3>
            <h1>Diamond Pass Mint</h1>
            <p>Initial Mint of 3000 Diamond BlockForge NFT passes</p>
          </div>
        </li>
        <li>
          <div class="timeline-content">
            <h3 class="date">22nd June, 2022</h3>
            <h1>$FORGE Token Release</h1>
            <p> Release of the Play-to-earn ERC-20 $FORGE Token. Users can claim their tokens generated in-game. </p>
          </div>
        </li>
        <li>
          <div class="timeline-content">
            <h3 class="date">20th August, 2012</h3>
            <h1>Territory Release</h1>
            <p> Staked BlockForge NFT holders will have access to purchase territories within the Minecraft Server</p>
          </div>
        </li>
        <li>
          <div class="timeline-content">
            <h3 class="date">20th September, 2022</h3>
            <h1>Gold Pass Mint</h1>
            <p> Secondary Mint of 3000 Gold BlockForge NFT passes </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  background-color: #ffeceb;
}
.timeline {
  width: 80%;
  height: auto;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.timeline ul {
  list-style: none;
}
.timeline ul li {
  padding: 20px;
  background-color: #bd9989;
  color: #2c3e50;
  border-radius: 10px;
  margin-bottom: 20px;
}
.timeline ul li:last-child {
  margin-bottom: 0;
}
.timeline-content h1 {
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  margin-bottom: 10px;
}
.timeline-content p {
  font-size: 16px;
  line-height: 30px;
  font-weight: 300;
}
.timeline-content .date {
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 10px;
  letter-spacing: 2px;
}
@media only screen and (min-width: 768px) {
  .timeline:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: gray;
  }
  .timeline ul li {
    width: 50%;
    position: relative;
    margin-bottom: 50px;
  }
  .timeline ul li:nth-child(odd) {
    float: left;
    clear: right;
    transform: translateX(-30px);
    border-radius: 20px 0px 20px 20px;
  }
  .timeline ul li:nth-child(even) {
    float: right;
    clear: left;
    transform: translateX(30px);
    border-radius: 0px 20px 20px 20px;
  }
  .timeline ul li::before {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: gray;
    top: 0px;
  }
  .timeline ul li:nth-child(odd)::before {
    transform: translate(50%, -50%);
    right: -21px;
  }
  .timeline ul li:nth-child(even)::before {
    transform: translate(-50%, -50%);
    left: -38px;
  }
  .timeline-content .date {
    position: absolute;
    top: -30px;
  }
  .timeline ul li:hover::before {
    background-color: aqua;
  }
}
</style>
