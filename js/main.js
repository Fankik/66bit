$(document).ready(()=>{
    
    $('body').keypress((event)=>{
        if(event.key.match(/[a-z а-я]/i)){
            $('.container').append('<p style="display: none;">'+event.key+'</p>');
            $('.container p').fadeIn(3000);
        }
    });

});