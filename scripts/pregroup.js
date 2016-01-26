$(function() {
	$('.pre-tabs').on('click', '.col-md-1', function(event) {
		var tab = this.className.match(/pre-tab-[a-z]*\b/)[0],
			list = tab.replace('-tab', '');
		$(this).addClass('pre-curtab')
			.siblings().removeClass('pre-curtab')
			.end().append($('.out-tri'))
				.append($('.in-tri'));
		$('.' + list).addClass('pre-list-cur')
			.siblings('.pre-list').removeClass('pre-list-cur');
	});

	$('.pre-list').on('click', '.pre-join', function(event) {
		var $num = $('.pre-joined-num'),
			num = parseInt($num.text().match(/(\d)*/)[0]);
		if (this.dataset.toggle === undefined || this.dataset.toggle === 'no') {
			this.innerHTML = '<span class=\"glyphicon glyphicon-ok\"></span> 已加入';
			this.dataset.toggle = 'yes';
			num++;
		} else {
			this.innerHTML = '+加入小组';
			this.dataset.toggle = 'no';
			num--;
		}
		$num.text(num + '个小组');
	});
});