let mode = document.getElementById("light_mode");
let modetow = document.getElementById("night_mode");
let colorthem = document.querySelector(':root');


function NightMode(){
        mode.style.display = "none";
        modetow.style.display = "flex";
        colorthem.style.setProperty("--dark-them","#0a0013");
        colorthem.style.setProperty("--dark-them-tow","#ffffff");
        colorthem.style.setProperty("--dark-them-text","#F4D03F");
}
function LightMode(){
        modetow.style.display = "none";
        mode.style.display = "flex";
        colorthem.style.setProperty("--dark-them-text","#000000");
        colorthem.style.setProperty("--dark-them-tow","#fc621a");
        colorthem.style.setProperty("--dark-them","white");
}