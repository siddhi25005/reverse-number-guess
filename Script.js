let text=document.querySelector(".text");
let button=document.querySelector("button")
let hint=document.querySelector("h1");
let no=Math.floor(Math.random()*999)+1;;
let d;
let score=document.querySelector(".score");
let r=0;
hint.innerText=`Reverse No. Is ${no}`;
button.addEventListener("click",()=>{
    while(no!=0) {
        d=no%10;
        r=r*10+d;
        no=Math.floor(no/10);
    }
    if(r===Number(text.value)){
        score.innerText=`U Guessed Correct`;
        score.style.backgroundColor="green";
    }
    else {
        score.innerText=`Try again`;
        score.style.backgroundColor="red";
    }
})
