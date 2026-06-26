let maincontainer=document.querySelector('.main');

function makegrid(){
for(let i=0;i<16;i++){
    for(let j=0;j<16;j++){
        let divsingle = document.createElement("div");
        maincontainer.appendChild(divsingle);
         divsingle.textContent = `${i},${j}`;
    }
}
}
makegrid();

let divs=document.querySelectorAll('.main div');
divs.forEach(
    (div)=>{div.addEventListener('mouseenter',()=>{
            div.classList.add('hover')
}
)
}
)