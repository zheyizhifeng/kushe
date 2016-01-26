$(function() {
	(function() {
		$('.rg-btn-step2').click(function(event) {
			$('.rg-step2').hide();
			$('.statu-num').addClass('pg-done');
			$('.statu-line').addClass('pg-done');
			$('.rg-step3').show();
			return false;
		});

		$('.step3').on('click', '.thumbnail', function(event) {
			if (this.dataset.toggle === undefined || this.dataset.toggle === 'yes') {
				$(this).addClass('rg-selected');
				this.dataset.toggle = 'no';
			} else {
				$(this).removeClass('rg-selected');
				this.dataset.toggle = 'yes';
			}
		});
	})();
});