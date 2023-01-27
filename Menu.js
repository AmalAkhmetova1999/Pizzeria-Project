import React from "react";
 function MenuAdd(){
    return(
<section>
<div class="text col-md-12">
    <h1> Meny </h1>
</div>
<div class="topnav">
    <a href="index.html" style="font-size: 12pt;"> <b> Hem </b></a>
    <div class="topnav-right">
        <div class="big">
            <button><a href="index.html#kontakt"> <b> ÖPPETTIDER & KONTAKT
                    </b></a></button>
            <button class="btn little" onclick="seeMenu()"><a class="btn" href="#meny"> MENY
                </a></button>
            <button id="basketId"><img class="basket" src="basket.png" onclick="basket()"/></button>
        </div>
        <div class="hidden">
            <button class="btn little" onclick="seeLittleMenu()"><a class="btn" href="#meny"> MENY
                </a></button>
            <button><img class=" littleBasket" src="basket.png" onclick="basket()"/></button>
        </div>

    </div>

</div>

<img class="img-fluid header" src="pizz.jpg" alt="pizza Tyreso Stockholm"/>


</section>)}
export default MenuAdd