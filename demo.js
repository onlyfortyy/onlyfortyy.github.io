var timer;
var per = 0;
timer = setInterval(function(){
    $('.bar').css('width',per + '%');
    per += 1;
    if(per>100){
        $('.pageloading').addClass('complete');
        clearInterval(timer);
    }
},30)