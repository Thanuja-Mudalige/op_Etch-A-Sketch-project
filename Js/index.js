let maincontainer=document.querySelector('.main');

function makegrid(size=16){
maincontainer.replaceChildren();
maincontainer.style.setProperty('--size', size); 
for(let i=0;i<size;i++){
    for(let j=0;j<size;j++){
        let divsingle = document.createElement("div");
        maincontainer.appendChild(divsingle);
         divsingle.textContent = `${i},${j}`;
    }
}
listnerattach();
}
makegrid();

function listnerattach(){
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
}

document.querySelector('.changesize').addEventListener('click',()=>{
    let canvassize=prompt('How many number of squares per side?');
    if(canvassize>100){
        alert('Enter a number less than or equal to 100');
    }
    else{
    makegrid(canvassize);
    }
})

