const columns=document.getElementsByClassName("columna");

for (let i=0; i<columns.length; i++){
columns[i].addEventListener('mouseover', ()=>{
    columns[i].classList.add("full");
    columns[i].style.transiton="5s";
    columns[i].style.borderRadius="10%";
});
columns[i].addEventListener('mouseout', ()=>{
    columns[i].style.borderRadius='0';
    columns[i].classList.remove("full");
});
}

const icon= document.getElementsByClassName("ms-3");

for (let i=0; i<icon.length; i++){
    icon[i].addEventListener('mouseover', ()=>{
        icon[i].style.transform="scale(180%)"; 
    });
    icon[i].addEventListener('mouseout', ()=>{
        icon[i].style="none"; 
    });
}

for (let i=0; i<icon.length; i++){
    icon[i].addEventListener('click',()=>{
        window.alert("Gracias por visitar mi CV, seras dirigido a un canal de contacto directo en una nueva pestaña.");
    })
}

const navElem = document.getElementsByClassName('nav-item');

for (let i=0; i<navElem.length; i++){
    navElem[i].addEventListener('mouseover', ()=>{
    navElem[i].style.background= "linear-gradient(180deg, rgba(197,205,213,0.2) 23%, rgba(156,161,166,0.12) 55%, rgba(197,205,213,0.2) 80%";
     navElem[i].style.boxShadow="0px 0px 5px 0px #aaa"; 
    // navElem[i].style.textShadow="10px 1px 1px rgba(26,53,79,0.3)"
});
    navElem[i].addEventListener('mouseout', ()=>{
        navElem[i].style="none"; 
    });
}