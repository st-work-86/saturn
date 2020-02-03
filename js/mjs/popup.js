(function($) {
	$.fn.simplePopupAdvanced = function() {
		// выравнивание по центру
		$.fn.center = function() {
			var popupMarginLeft = -this.width()/2;
			return this.css('margin-left', popupMarginLeft);
		};
		// общая функция скрытия
		function hide() {
			$('.popup-body, .popup').fadeOut(300, 0);
		}
		// закрытие по клавише Esc
		$('body').keyup(function(e) {
			if (e.keyCode == 27) {
				hide();
			}
		});
		// закрытие по фону и по крестику
		$('.popup-body, .popup-close').click(function() {
			hide();
			return false;
		});
		return this.each(function() {
			$(this).click(function() {
				var popupID = $(this).attr('rel');
				$(".popup-body").fadeTo(300, 0.2); 
				$("#"+popupID+".popup").center().fadeTo(300, 1);
				return false;		
			});
		});
	};
})(jQuery);

$(function() {
	$(".popup-anch-adv a").simplePopupAdvanced();
});