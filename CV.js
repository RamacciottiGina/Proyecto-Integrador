const columns=document.getElementsByClassName("columna");

for (let i=0; i<columns.length; i++){
columns[i].addEventListener('mouseover', ()=>{
    columns[i].classList.add("full");
});
columns[i].addEventListener('mouseout', ()=>{
    columns[i].classList.remove("full");
});

}


const icon= document.getElementsByClassName("ms-3");

for (let i=0; i<icon.length; i++){
    icon[i].addEventListener('mouseover', ()=>{
        icon[i].style.border=("1px solid rgb(73,71,188, 0.5)"); 
        icon[i].style.borderRadius="40%";   
        icon[i].style.transform="scale(150%)";
    });
    icon[i].addEventListener('mouseout', ()=>{
        icon[i].style="none"; 
    });
}