function valid(){
	window.o=true;
		$('.zakaz input[type="text"]').each(function(){
			if ($(this).val().length==0)
			{
				o=false;
				$(this).addClass('errorform');
			}
		});
		
		$('.zakaz input[type="email"]').each(function(){
			if ($(this).val().length==0)
			{
				o=false;
				$(this).addClass('errorform');
			}
		});
		
		$('.zakaz .slct').each(function(){
			if ($(this).text().length==0)
			{
				o=false;
				$(this).parent().addClass('errorform');
			}
		});
		
}

$(document).ready(function(){

	$(".slct").click(function(){
		var autoHeight, height, value, text;
		
		height=$(this).outerHeight();
		if ($(this).parent().hasClass("active"))
		{
			height=$(this).outerHeight();
			$(this).parent().animate().stop().animate({height:height},200,function(){
				$(this).css({"z-index":0});
			});
			$(this).parent().removeClass("active");
		}
		else
		{
			autoHeight = $(this).parent().css('height', 'auto').height();
			$(this).parent().css('height', height);
			$(this).parent().animate().stop().animate({height:autoHeight},200);
			$(this).parent().addClass("active");
			$(this).parent().css({"z-index":5});
			
			$(this).parent().find(".items li a").click(function(){
				$(this).parent().parent().find("a").removeClass("active");
				
				$(this).addClass("active");
				
				text = $(this).html();
				value = $(this).attr("rel");
				
				$(this).parent().parent().parent().find(".slct").html(text);
				$(this).parent().parent().parent().find("input").val(value);
				
				$(this).parent().parent().parent().animate().stop().animate({height:height},200, function(){
					$(this).css({"z-index":0});
				});
				$(this).parent().parent().parent().removeClass("active");
				
				return false;
			});
		}
	});
	
	/* каталог checkbox */
	$('.catalog .checckbox .check').click(function(){
		if ( $(this).find('input').attr('checked')=="checked")
			{
				// и удаляем атрибут checked (делаем чекбокс не отмеченным)
				$(this).find('input').removeAttr('checked');
				$(this).removeClass('active');
			}
			// если же чекбокс не отмечен, то
			else
			{
				// добавляем атрибут checked чекбоксу
				$(this).addClass('active');
				$(this).find('input').attr('checked', true);
			}
	});
	
	/* корзина radio */
	$('.zakaz .radio').click(function(){
		$('.zakaz .radio.active').removeClass('active');
		$('.zakaz .radio').removeClass('errorradio');
		$(this).addClass('active');
		
		$(this).parent().find('input').val($(this).attr('rel'));
		return false;
	});
	
	/* корзина валидация формы */
	$('.zakm input').blur(function(){
		if ($(this).val().length==0) $(this).removeClass('okform').addClass('errorform');
		else
			$(this).removeClass('errorform').addClass('okform');
	});
	
	$('.zakm .drop .items a').click(function(){
		$(this).parent().parent().parent().addClass('okform');
		$(this).parent().parent().parent().removeClass('errorform');
	});
	
	$('.zakm .drop a.slct').click(function(){
		if ($(this).parent().hasClass('active')==false) $(this).parent().addClass('errorform');
	});
	
	$('.zakm input[type="submit"]').click(function(){
		var o=true;
		$('.zakm input[type="text"]').each(function(){
			if ($(this).val().length==0)
			{
				o=false;
				$(this).addClass('errorform');
			}
		});
		
		$('.zakm input[type="email"]').each(function(){
			if ($(this).val().length==0)
			{
				o=false;
				$(this).addClass('errorform');
			}
		});
		
		$('.zakm .slct').each(function(){
			if ($(this).text().length==0)
			{
				o=false;
				$(this).parent().addClass('errorform');
			}
		});
		
		if ($(this).parent().parent().find('.radio').hasClass('active')==false)
		{
			o=false;
			$(this).parent().parent().find('.radio').addClass('errorradio');
		}
		
		if (o==false) return false;
	});
	
	$('.zakm .ochistit').click(function(){
		$('.zakm input[type="text"]').val("").removeClass('errorform').removeClass('okform');
		$('.zakm input[type="email"]').val("").removeClass('errorform').removeClass('okform');
		$('.zakm .slct').text("").parent().removeClass('errorform').removeClass('okform');
		$('.zakm textarea').val("");
		$('.zakm .radio').removeClass('active').removeClass('errorradio');
		$('.zakm .radiobutton input').val("");
	});
	
	/* - ------------------------- - */
	
	$('.zakpop input').blur(function(){
		if ($(this).val().length==0) $(this).removeClass('okform').addClass('errorform');
		else
			$(this).removeClass('errorform').addClass('okform');
	});
	
	$('.zakpop .drop .items a').click(function(){
		$(this).parent().parent().parent().addClass('okform');
		$(this).parent().parent().parent().removeClass('errorform');
	});
	
	$('.zakpop .drop a.slct').click(function(){
		if ($(this).parent().hasClass('active')==false) $(this).parent().addClass('errorform');
	});
	
	$('.zakpop input[type="submit"]').click(function(){
		window.o=true;
		$('.zakpop input[type="text"]').each(function(){
			if ($(this).val().length==0)
			{
				o=false;
				$(this).addClass('errorform');
			}
		});
		
		$('.zakpop input[type="email"]').each(function(){
			if ($(this).val().length==0)
			{
				o=false;
				$(this).addClass('errorform');
			}
		});
		
		$('.zakpop .slct').each(function(){
			if ($(this).text().length==0)
			{
				o=false;
				$(this).parent().addClass('errorform');
			}
		});
		
		if ($(this).parent().parent().find('.radio').hasClass('active')==false)
		{
			o=false;
			$(this).parent().parent().find('.radio').addClass('errorradio');
		}
		
		if (window.o==false) return false;
	});
	
	$('.zakpop .ochistit').click(function(){
		$('.zakpop input[type="text"]').val("").removeClass('errorform').removeClass('okform');
		$('.zakpop input[type="email"]').val("").removeClass('errorform').removeClass('okform');
		$('.zakpop .slct').text("").parent().removeClass('errorform').removeClass('okform');
		$('.zakpop textarea').val("");
		$('.zakpop .radio').removeClass('active');
		$('.zakpop .radiobutton input').val("");
	});
	
	/* корзина валидация формы End */
	
});