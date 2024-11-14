for(var i=0;i<=9;i++){

    
    $('.order').eq(i).click(function() {
        $('#main').fadeout().fadein();
    })
}

$('.navigator').click(function() {
    window.location.href = 'about.html';
})