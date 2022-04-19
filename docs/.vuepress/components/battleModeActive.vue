<template>
    <div class="">
        <div class="flex" style="margin-top: 2rem;">
            <div class="card">
                <img src="/pot_1.jpg" alt="plot1" style=" display: block; margin-left: auto; margin-right: auto;">
                <div class="card-container">
                    <h3 class="header-3">Battle Mode: <span class="color-red">  <b>DISABLED</b> </span> </h3>
                    <h5 class="header-5">$FORGE Tokens per hour: <span class="color-blue"> <b>ZERO</b> </span></h5>
                    <!-- <h5>Vulnerable to Attack: <span class="color-blue"> <b>NO</b> </span></h5> -->
                    <h5 class="header-5">Owner can attack other battle mode enabled plots: <span class="color-blue"> <b>NO</b> </span></h5>
                    <h5 class="header-5">Modifiable by owner: <span class="color-blue"> <b>YES</b> </span></h5>
                    <h5 class="header-5">Modifiable by users in battle mode: <span class="color-blue"> <b>NO</b> </span></h5>
                </div>
            </div>

            <div class="card">
                <img src="/plot_badge_2.jpg" alt="plot1" style=" display: block; margin-left: auto; margin-right: auto;">
                <div class="card-container">
                    <h3 class="header-3">Battle Mode: <span class="color-blue">  <b>ENABLED</b> </span> </h3>
                    <h5 class="header-5">$FORGE Tokens per hour: <span class="color-blue"> <b>582</b> </span></h5>
                    <!-- <h5>Vulnerable to Attack: <span class="color-blue"> <b>YES</b> </span></h5> -->
                    <h5 class="header-5">Owner can attack other battle mode enabled plots: <span class="color-blue"> <b>YES</b> </span></h5>
                    <h5 class="header-5">Modifiable by owner: <span class="color-blue"> <b>YES</b> </span></h5>
                    <h5 class="header-5">Modifiable by users in battle mode: <span class="color-blue"> <b>YES</b> </span></h5>
                </div>
            </div>

        </div>
    </div>


</template>

<style>

.card {
  /* Add shadows to create the "card" effect */
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
    flex-direction: row
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

p {

    font-size: 14px;
    padding-bottom: 30px;
}

.header-3  {
   color: #EDF2F7;
   letter-spacing: .1rem;
   margin-top: 1rem;

}

.header-4 {
    color: #EDF2F7;
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    font-weight: 700;
    font-size: 18px;
}

.header-5 {
    color: #EDF2F7;
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    font-weight: 400;
}

</style>
