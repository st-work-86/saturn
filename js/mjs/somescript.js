$(document).ready(function(){
	/* каталог раскрытие товара */
	$('.catalog .text .tovar').hover(function(){
		var autoHeight;
		autoHeight=$(this).find('.tovhidden').css({height:"auto"}).outerHeight();
		$(this).find('.tovhidden').css({height:260});
		$(this).find('.tovhidden').stop().animate({height:autoHeight},200);
		$(this).find('.tovhidden').css({"background":"#f4f4f4", "z-index":"10"});
	},
	function(){
		$(this).find('.tovhidden').stop().animate({height:260},100,function(){
			$(this).css({"background":"none","z-index":"0"});
		});
	});
	/* каталог раскрытие товара End */
	
	
	/* нижний слайдер показать слайдер */
	var k=false;
	$('.showslider').click(function(){
		if (k==false)
		{
			$('.noneslider').stop().animate({height:260},300);
			k=true;
		}
		else
		{
			$('.noneslider').stop().animate({height:0},300);
			k=false;
		}
		
		return false;
	});
	
	/* нижний слайдер раскрытие товара */
		$('.forbotslide .botslider_bx .hidden').hover(function(){
			var autoHeight;
			autoHeight=$(this).css({height:"auto"}).outerHeight();
			$(this).css({height:140});
			$(this).stop().animate({height:autoHeight},200);
			$(this).css({"border":"3px solid #e9e9e9"});
		},
		function(){
			$(this).stop().animate({height:140},200,function(){
				$(this).css({"border":"3px solid #ffffff"});
			});
		});
	
	$('.collectionslide .collectionslider_bx .hidden').hover(function(){
		$(this).css({"border":"3px solid #b9e8fb"});
	},
	function(){
		$(this).css({"border":"3px solid #ffffff"});
	});
	/* нижний слайдер раскрытие товара End */	
	
	/* service табулятор */
	$('.fortabs .mytabs').click(function() {
		if(!$(this).hasClass('active')) {
			$(this).parent().parent().find('.fortabs .mytabs').removeClass('active');
			$(this).addClass('active');    
			var tabIndex = $(this).index();

			$(this).parent().parent().find('.mytabcontent > .text').hide();
			$(this).parent().parent().find('.mytabcontent > .text').removeClass('active');
			$(this).parent().parent().find('.mytabcontent > .text:nth-child('+(tabIndex+1)+')').fadeIn(250);
			$(this).parent().parent().find('.mytabcontent > .text:nth-child('+(tabIndex+1)+')').addClass('active');
	}
	});
	/* service табулятор End */
});