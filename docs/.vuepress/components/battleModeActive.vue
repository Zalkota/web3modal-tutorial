<template>
        <div class="flex" style="margin-top: 2rem;">
            <div class="card">
                <img src="/pot_1.jpg" alt="plot1" style=" display: block; margin-left: auto; margin-right: auto;">
                <div class="card-container">
                    <span class="header-3">Battle Mode: <span class="color-red">  <b>DISABLED</b> </span> </span> <br>
                    <span class="header-5"><span class="color-blue">-</span> $FORGE Tokens per hour: <span class="color-blue"> <b>ZERO</b> </span></span> <br>
                    <span class="header-5"><span class="color-blue">-</span> Owner can attack other battle mode enabled plots: <span class="color-blue"> <b>NO</b> </span></span> <br>
                    <span class="header-5"><span class="color-blue">-</span> Modifiable by owner: <span class="color-blue"> <b>YES</b> </span></span> <br>
                    <span class="header-5"><span class="color-blue">-</span> Modifiable by users in battle mode: <span class="color-blue"> <b>NO</b> </span></span>
                </div>
            </div>

            <div class="card">
                <img src="/plot_badge_2.jpg" alt="plot1" style=" display: block; margin-left: auto; margin-right: auto;">
                <div class="card-container">
                    <span class="header-3"> Battle Mode: <span class="color-blue">  <b>ENABLED</b> </span> </span> <br>
                    <span class="header-5"> <span class="color-blue">-</span> $FORGE Tokens per hour: <span class="color-blue"> <b>582</b> </span></span> <br>
                    <span class="header-5"><span class="color-blue">-</span> Owner can attack other battle mode enabled plots: <span class="color-blue"> <b>YES</b> </span></span> <br>
                    <span class="header-5"><span class="color-blue">-</span> Modifiable by owner: <span class="color-blue"> <b>YES</b> </span></span> <br>
                    <span class="header-5"><span class="color-blue">-</span> Modifiable by users in battle mode: <span class="color-blue"> <b>YES</b> </span></span> <br>
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
    color: #718096;
}

.border-top {
    border-top: 4px solid #91A0BA;
}


.header-3  {
   color: #EDF2F7;
   letter-spacing: .1rem;
   margin-top: 1rem;
   font-size: 1.25rem;
   font-weight: 700;
   font-family: 'Russo One';
}

.header-4 {
    color: #EDF2F7;
    font-weight: 700;
    font-family: 'Russo One';
    font-size: 1.25rem;
}

.header-5 {
    color: #EDF2F7;
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    font-weight: 400;
}

</style>
