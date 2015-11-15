(function($) {
	$(function() {

		function isTouchDevice() {
			msGesture = window.navigator && window.navigator.msPointerEnabled && window.MSGesture, touchSupport = (("ontouchstart" in window ) || msGesture || window.DocumentTouch && document instanceof DocumentTouch);
			return touchSupport;
		}

		function arwF() {
			$('.arws').css({
				bottom : '60px',
				opacity : 0,
			});
			$('.arws').delay(500).animate({
				opacity : 0.5,
				bottom : '22px'
			});
		}

		//--
		function iniF() {
			isTouchDevice() ? $('.sec .lnks').addClass('mid') : $('.sec .lnks').addClass('rght');
			$(window).bind("load", function() {
				$('.ldr').remove();
				$('.bg').fadeOut(500);

				// Arws
				arwF();
				$('.arws .lft').click(function(e) {
					$.fn.pagepiling.moveSectionUp();
					e.preventDefault();
				});
				$('.arws .rght').click(function(e) {
					$.fn.pagepiling.moveSectionDown();
					e.preventDefault();
				});

				// Pagepilling
				$('#pagepiling').pagepiling({
					direction: 'horizontal',
					menu : '#menu',
					navigation : {
						'position' : 'right',
						'tooltips' : ['Maria Sharapova', 'Novak Djokovic','Ana Ivanovic','Kei Nishikori','Porsche Tennis Grand Prix']
					},
					afterRender : function() {
						$('#pp-nav').addClass('custom');
					},
					afterLoad : function(anchorLink, index) {
						if (index > 1) {
							$('#pp-nav').removeClass('custom');
						} else {
							$('#pp-nav').addClass('custom');
						}
						if(index == 1){
							$('.arws .lft').fadeOut();
						}else{
							$('.arws .lft').fadeIn();
						}
						if(index == 5){
							$('.arws .rght').fadeOut();
						}else{
							$('.arws .rght').fadeIn();
						}
					},
					onLeave : function(index, nextIndex, direction) {
						if (nextIndex == 5 && direction == 'right') {
							$('.scrl').delay(500).animate({
								opacity : 0,
								bottom : '-50px'
							});
						}
					}
				});

			});
		}

		//--
		$(document).ready(function(e) {
			iniF();
		});

	});
})(jQuery);
