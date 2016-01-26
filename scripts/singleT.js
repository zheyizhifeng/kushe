$(function() {
	//元素fixed，scroll到一定高度停止
	(function() {
		var $shot = $('.tshirtShot');
		var shirtHeight = $('.tshirt').height();
		$(document).scroll(function() {
			var scrollT = $('body').scrollTop();
			if (scrollT >= shirtHeight - 130) {
				$shot[0].style.position = 'absolute';
				$shot[0].style.top = shirtHeight - 200 + 'px';
				$shot[0].style.left = '215px';
			} else {
				$shot[0].style.position = 'fixed';
				$shot[0].style.top = '91px';
				$shot[0].style.left = '315px';
			}
		});
	})();

	//缩略图对应
	$('.tshirtShot a').click(function() {
		$(this).parent().addClass('curShot')
			.siblings().removeClass('curShot');
		$('.sin-wrap-img img')[0].src = $(this).children('img')[0].src;
		return false;
	});
	//分享按钮
	$('#btn-share').mouseover(function() {
		$(this).children('.link').show();
	}).mouseout(function() {
		$(this).children('.link').hide();
	});
	
	//评论区：移动评论区出现回复字样
	$('.other-comment').mouseover(function(event) {
			if(typeof $(this).children('.response')[0] != 'object') {
				$(this).append('<span class="response">回复</span>');
			}
			$(this).children('.response').show();
			$('.response').click(function() {
				$('#mycomment').focus();
				$('#mycomment')[0].scrollIntoView(false);
			});
	}).mouseout(function(event) {
		$(this).children('.response').hide();
	});
});