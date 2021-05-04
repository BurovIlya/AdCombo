var activeCard;

function togglify(card) {
   var header = card.children[0];
   var content = card.children[1];
   header.classList.toggle('active');
   content .classList.toggle('hide'); 
}

document.addEventListener('click', function(event) {
    
    var target = event.target;
    var toggleCard = target.closest('.toggle-card');
    
    if ( !toggleCard ) { return; }
    
    if ( !activeCard ) {
        togglify(toggleCard);
        activeCard = toggleCard;
    }
    
    else if ( toggleCard == activeCard ) {
        togglify(toggleCard);
        activeCard = null;
    }
    
    else {
       togglify(activeCard);
       togglify(toggleCard); 
       
       activeCard = toggleCard;
    }
    
    
    
    
});