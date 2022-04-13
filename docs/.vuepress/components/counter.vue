<template>
  <div class="container">
    <div class="timeline">
      <ul>
          <li style="background-color: #2d3748;">
            <div class="timeline-content">
              <h3 class="date">1st April, 2022</h3>
              <h1>Start Earning Tokens</h1>
              <p>Earn $FORGE tokens while playing on the BlockForge Minecraft Server. <a href="https://blockforgenft.xyz/about">Link your account</a> and view your balance on the BlockForge Dashboard.</p>
            </div>
          </li>
        <li style="background-color: #2d3748;">
          <div class="timeline-content">
            <h3 class="date">20th May, 2022</h3>
            <h1>Whitelist Signup Starts</h1>
            <p>Sign up for the <a href="https://blockforgenft.xyz/whitelist">whitelist here</a>. There are currently 2,500 whitelist spots available, with 3 different tiers of pricing.</p>
          </div>
        </li>
        <li style="background-color: #2d3748;">
          <div class="timeline-content">
            <h3 class="date">20th June, 2022</h3>
            <h1>Diamond Battle Pass Mint</h1>
            <p>5,000 Diamond Battle Passes NFT passes will be available for mint. After mint, a battle pass will be required to earn $FORGE tokens and join on the BlockForge Minecraft server. </p>
          </div>
        </li>
        <li style="background-color: #2d3748;">
          <div class="timeline-content">
            <h3 class="date">22nd June, 2022</h3>
            <h1>Redeem $FORGE Token</h1>
            <p>$FORGE tokens will become redeemable for owners of the Diamond Battle Pass. <a href="https://blockforgenft.xyz/about">Link your Minecraft account</a> and start accruing today. </p>
          </div>
        </li>
        <li style="background-color: #2d3748;">
          <div class="timeline-content">
            <h3 class="date">20th August, 2012</h3>
            <h1>Claim In-Game Plots</h1>
            <p>Claim 100x100 block plots of land on the Blockforge Minecraft server using $FORGE tokens. Diamond blocks located on the land, while in battle mode, will genereate additional $FORGE tokens for the owner.</p>
          </div>
        </li>
        <li style="background-color: #2d3748;">
          <div class="timeline-content">
            <h3 class="date">TBD</h3>
            <h1>Duel Arena Release</h1>
            <p>Wager $FORGE tokens and battle against other users in a player vs player coliseum located on the BlockForge Minecraft server.</p>
          </div>
        </li>
        <li style="background-color: #2d3748;">
          <div class="timeline-content">
            <h3 class="date">TBD</h3>
            <h1>Gold Battle Pass Mint</h1>
            <p>2,500 Gold Battle Passes NFT passes will be available for mint. Earn $FORGE tokens based on the amount of Gold Blocks on your plots. </p>
          </div>
        </li>
        <li style="background-color: #2d3748;">
          <div class="timeline-content">
            <h3 class="date">TBD</h3>
            <h1>New Worlds Release</h1>
            <p>We plan to release additional islands and server sharding.</p>
          </div>
        </li>
        <li style="background-color: #2d3748;">
          <div class="timeline-content">
            <h3 class="date">TBD</h3>
            <h1>We Want to Hear What YOU want!</h1>
            <p>Let us know in the BlockForge Discord what you would like added to the BlockForge Metaverse.</p>
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
  width: 150%;
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
  text-align: left;
}
.timeline ul li {
  padding: 20px;
  background-color: #bd9989;
  color: #2c3e50;
  margin-bottom: 20px;
}
.timeline ul li:last-child {
  margin-bottom: 0;
}
.timeline-content h1 {
  font-weight: 1000;
  font-size: 10px;
  line-height: 30px;
  margin-bottom: 10px;
  text-align: left;
  color:#fff;
}
.timeline-content p {
  font-size: 14px;
  line-height: 30px;
  font-weight: 300;
  color: #fff;
}

.timeline-content a {
  font-size: 16px;
  line-height: 30px;
  font-weight: 700;
  color: #63B3ED;
}

.timeline-content .date {
  font-size: 16px;
  color: #63B3ED;
  padding-top: 0;
  font-weight: 500;
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
  .timeline-content date {
  }
  .timeline ul li:hover::before {
    background-color: aqua;
  }
}
</style>
