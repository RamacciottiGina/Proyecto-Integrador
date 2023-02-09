const columns=document.getElementsByClassName("columna");

for (let i=0; i<columns.length; i++){
columns[i].addEventListener('mouseover', ()=>{
    columns[i].classList.add("full");
});
columns[i].addEventListener('mouseout', ()=>{
    columns[i].classList.remove("full");
});

}






        