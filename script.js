const cardsArray=[
    {
        name:'hippo',
        icon:'<i class="fa-solid fa-hippo"></i>'
    }, 
    {
        name:'dog',
        icon:'<i class="fa-solid fa-dog"></i>'
    },
    {
        name:'fish',
        icon:'<i class="fa-solid fa-fish"></i>'
    },
    {
        name:'dragon',
        icon:'<i class="fa-solid fa-dragon"></i>'
    },
    {
        name:'spider',
        icon:'<i class="fa-solid fa-spider"></i>'
    },
    {
        name:'cow',
        icon:'<i class="fa-solid fa-cow"></i>'
    },
    {
        name:'hippo',
        icon:'<i class="fa-solid fa-hippo"></i>'
    }, 
    {
        name:'dog',
        icon:'<i class="fa-solid fa-dog"></i>'
    },
    {
        name:'fish',
        icon:'<i class="fa-solid fa-fish"></i>'
    },
    {
        name:'dragon',
        icon:'<i class="fa-solid fa-dragon"></i>'
    },
    {
        name:'spider',
        icon:'<i class="fa-solid fa-spider"></i>'
    },
    {
        name:'cow',
        icon:'<i class="fa-solid fa-cow"></i>'
    }
    
];
  let flippedCard=[];

 shuffleCards();
 const gameBoard=document.getElementById('gameBoard');
 displayCards();

 function shuffleCards(){
    for(let i=cardsArray.length-1;i>=0;i--){
        const randIndex=Math.floor(Math.random()*(i+1));
        [cardsArray[i],cardsArray[randIndex]]= [cardsArray[randIndex],cardsArray[i]];
    }
 }

 function displayCards(){
    cardsArray.forEach((curr,index,arr)=>{
        const card=document.createElement('div');
        card.setAttribute('id',index);
        card.classList.add('cardBack');
        card.classList.add('active');
        gameBoard.append(card);
        card.addEventListener('click',flipCard);

    })
 }

 function flipCard(){
    if(flippedCard.length < 2){

    
        let cardId=this.getAttribute('id');
        flippedCard.push(this);
        this.classList.remove('cardBack');
        this.innerHTML=cardsArray[cardId].icon;

        if(flippedCard.length==2){
            setTimeout(checkMatch,1000);
        }  

    } 

 }

 function checkMatch(){
    const cardId1=flippedCard[0].getAttribute('id');
    const cardId2=flippedCard[1].getAttribute('id');
    
 }