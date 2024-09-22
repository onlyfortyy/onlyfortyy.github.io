$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;
    var pwd=document.getElementById("pwd").value;
		//修改密码请改此处
    if(userName=="唐玉莹" &&  pwd=="tangyuying"){
			event.preventDefault();
			$('form').fadeOut(500);
			$('.wrapper').addClass('form-success');
			setTimeout(function(){location.href="../pc/名片/index.html";},2000);
		}
	else{
		alert("Wrong Password");
	}
});
