	$(document).ready(function(){
		
		$('.product-photo').fancybox();
		
		$('.bxslider').bxSlider({
			auto: true,
			slideWidth: 940,
			mode: 'fade'
		});
		
		/*** Rubricator ***/
		$('#rubricator').bxSlider({
			
			slideWidth: 88,
			minSlides: 13,
			maxSlides: 13
		});
		
		$('.slider-rubricator').hover(function(){
			clearTimeout(window.timeOut);
			setTimeout(function() {
				$('.slider-rubricator .bx-prev').fadeIn(700);
				$('.slider-rubricator .bx-next').fadeIn(700);				
			}, 500);
			

		}, function(){
			
			window.timeOut = setTimeout(function() {
				$('.slider-rubricator .bx-prev').fadeOut(1500);
				$('.slider-rubricator .bx-next').fadeOut(1500);				
			}, 1000);
		});
		
		$('#rubricator > li').click(function() {
				
				window.thisLi = $(this).attr('id');
				
				$('#rubricator > li > .image > img').each(function(){
					if(window.thisLi != $(this).parent().parent().attr('id')) {
						//alert(window.thisLi + ' ' + $(this).parent().parent().attr('id'));
						$(this).show();
						$(this).attr('src', $(this).attr('rel'));
					} else {
						//alert('b');
					}
				});
				
				var menu_html = $(this).find('.submenu').html();
				var id = $(this).attr('id');
				var image = $(this).find('.image > img');
				var $this = $(this);
				
				if(window.last_id == id) {
					
					//alert('a');
					image.attr('src', image.attr('rel_hover'));
					window.last_id = '';
					$('#rubricator_sub').slideUp(400, function() { 
						
						$('#rubricator_sub').html('');
						$(this).removeClass('active'); 
						
					});
					
				} else {
					
					$('#rubricator > li').removeClass('active');
					$(this).addClass('active');
					
					if( $('#rubricator_sub').is(':visible') ) {
						image.attr('src', image.attr('rel_hover'));
						$('#rubricator_sub').slideUp(400, function(){
							$('#rubricator_sub').html(menu_html);
							$('#rubricator_sub').slideDown(400); 
						});
						window.last_id = id;
					} else {
						image.attr('src', image.attr('rel_hover'));
						$('#rubricator_sub').hide();
						$('#rubricator_sub').html(menu_html);
						$('#rubricator_sub').slideDown(400);
						window.last_id = id;
					}	

				}

		});
		
		$('#rubricator > li').hover(function() {
			var image = $(this).find('.image > img');
			if(!$(this).hasClass('active') ) {
				image.fadeOut(150, function() {
					$(this).attr('src', $(this).attr('rel_hover'));
					$(this).fadeIn(150);
				});
			}
		}, function(){
			var image = $(this).find('.image > img');
			if(!$(this).hasClass('active') ) {
				image.fadeOut(150, function() {
					$(this).attr('src', $(this).attr('rel'));
					$(this).fadeIn(150);
				});
			}
		});
		
		$('body').on('mouseover','.sub-col a',function(){
			var rel = $(this).attr('rel');
			$("#rubricator li.active span.image img").fadeOut('fast', function(){
				$("#rubricator li.active span.image img").attr('src', rel);
				$("#rubricator li.active span.image img").fadeIn('fast');
			});
		});		
		$('body').on('mouseout','.sub-col a',function(){
			var rel = $("#rubricator li.active span.image img").attr('rel_hover');
			$("#rubricator li.active span.image img").fadeOut('fast', function(){
				$("#rubricator li.active span.image img").attr('src', rel);
				$("#rubricator li.active span.image img").fadeIn('fast');
			});
		});
			
		$('.columns li.tab').click(function() {
			if(!$(this).hasClass('active')) {
				$(this).parent().parent().find('li.tab').removeClass('active');
				$(this).addClass('active');	
				var tabIndex = $(this).index();
				
				var $this = $(this);
				$(this).parent().parent().find('.tabs-content > li').stop().animate({"height":0},250, function(){
					$this.parent().parent().find('.tabs-content > li').removeClass('active');
					$this.parent().parent().find('.tabs-content > li:nth-child('+(tabIndex+1)+')').css({"height":"auto"});
					var k=$this.parent().parent().find('.tabs-content > li:nth-child('+(tabIndex+1)+')').outerHeight();
					$this.parent().parent().find('.tabs-content > li:nth-child('+(tabIndex+1)+')').css({"height":0}).stop().animate({"height":k},250);
					$this.parent().parent().find('.tabs-content > li:nth-child('+(tabIndex+1)+')').addClass('active');
				});
			}
		});
		
		
		$('.product-tabs li.tab').click(function() {
			if(!$(this).hasClass('active')) {
				$(this).parent().parent().find('li.tab').removeClass('active');
				$(this).addClass('active');	
				var tabIndex = $(this).index();
				
				$(this).parent().parent().find('.tabs-content > li').hide();
				$(this).parent().parent().find('.tabs-content > li').removeClass('active');
				$(this).parent().parent().find('.tabs-content > li:nth-child('+(tabIndex+1)+')').fadeIn(250);
				$(this).parent().parent().find('.tabs-content > li:nth-child('+(tabIndex+1)+')').addClass('active');
			}
		});
		
		
		$('.star-rating').hover(function(){
			$(this).find('img').attr('src', 'img/star-red.png');
		}, function(){
			if($(this).hasClass('star-yellow')) {
				$(this).find('img').attr('src', 'img/star-yellow.png');
			} else {
				$(this).find('img').attr('src', 'img/star-grey.png');
			}
		});
		
		$('.num-comments').click(function(){
			$('li.comments-tab').trigger('click');
		});
		
		$('.product-thumbs > li > img').hover(function(){
			$('.product-main-image').attr('src', $(this).attr('rel'));
		}, function(){
			var rel = $('.product-main-image').attr('rel');
			$('.product-main-image').attr('src', rel);
		});
		
		/*** Dropdown menu ***/
		// creating menu
		$('#yam-menu-top').superfish();
		// centering menu
		var menuWidth = $('.sf-menu').width();
		var menuMarginLeft = (1262-menuWidth)/2;
		$('.sf-menu').css('margin-left', menuMarginLeft);
		//centering bottom menu as well
		var menuWidth = $('#yam-menu-bottom').width();
		var menuMarginLeft = (1262-menuWidth)/2;
		$('#yam-menu-bottom').css('margin-left', menuMarginLeft);		
		
		// menu third level position fix
		var wapoMainWindowWidth = $(window).width();
		$('.sf-menu ul li').mouseover(function(){
			// checks if third level menu exist         
			var subMenuExist = $(this).find('ul').length;            
			if( subMenuExist > 0){
				var subMenuWidth = $(this).find('ul').width();
				var subMenuOffset = $(this).find('ul').parent().offset().left + subMenuWidth;
				// if sub menu is off screen, give new position
				if((subMenuOffset + subMenuWidth) > wapoMainWindowWidth){                  
					var newSubMenuPosition = subMenuWidth;
					$(this).find('ul').css({
						left: -newSubMenuPosition,
						top: '0',
					});
				}
			}
		 });		
	
	});