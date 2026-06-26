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