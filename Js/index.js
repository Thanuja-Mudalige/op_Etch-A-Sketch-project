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
    (div)=>{div.addEventListener('mouseenter',(e)=>{
        let count = Number(e.target.dataset.hits || 0);
        count++;
        e.target.dataset.hits = count;
        if(count==1){
            div.classList.add('hover');}
        else if(count==2){
            div.classList.remove('hover');
            div.classList.add('hoverleveltwo');
        }
        else{
            div.classList.remove('hover','hoverleveltwo');
            div.classList.add('hoverlevelthree');
        }
}
)
}
)