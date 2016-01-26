$(function() {
	(function() {
		var isEqualOne = function(context) {
			context = context || $(document);
			var $minus = context.find('.sc-minus');
			if ($('.sc-num-input').val() === '1' ) {
				$minus.hide();
			} else {
				$minus.show();
			}
		};
		var	bottomChange = function() {
			var $checkboxs = $('.sc-shirts :checked'),
				checkNum = $checkboxs.length,
				total = 0;
			$checkboxs.each(function(index, el) {
				var curTotal = $(this).parents('.sc-shirt').find('.sc-total').text();
				total += parseInt(curTotal);
			});
			$('.sc-bottom-num').text(checkNum);
			$('.sc-bottom-total').text(total);
			if (checkNum > 0) {
				$('.account').removeAttr('disabled')
					.addClass('sc-btn-active');
			} else {
				$('.account').attr('disabled', 'disabled')
					.removeClass('sc-btn-active');
			}
		};

		isEqualOne();

		$('.sc-num').on('click', '.glyphicon', function(event) {
			var target = event.target || event.srcElement,
				$target = $(target),
				$input = $target.siblings('.sc-num-input'),
				$parent = $target.parents('.sc-shirt'),
				price = $parent.find('.sc-price').text();
			if ($target.hasClass('sc-minus')) {
				$input.val(parseInt($input.val()) - 1);
			} else {
				$input.val(parseInt($input.val()) + 1);
			}
			isEqualOne($parent);
			$parent.find('.sc-total').text(parseInt($input.val()) * parseInt(price));

			if ($parent.find(':checked')) {
				bottomChange();
			}
		});

		$('.sc-shirts').on('input propertychange', '.sc-num-input', function(event) {
			var $input = $(this),
				$parent = $input.parents('.sc-shirt'),
				price = $parent.find('.sc-price').text();
			if ( this.value === '0' || this.value === '') {
				this.value = 1;
				isEqualOne($parent);
			}
			$parent.find('.sc-total').text(parseInt($input.val()) * parseInt(price));
		});

		$('.sc-shirts').on('keydown', '.sc-num-input', function(event) {	
			var keyCode = event.keyCode,
				$this = $(this);
			if (!((keyCode > 47 && keyCode < 58) || keyCode === 8 || (keyCode > 95 && keyCode < 106))) {
				event.preventDefault();
			}

		});

		$('.sc-shirt').on('click', ':checkbox', function(event) {
			bottomChange();
		});

		$('.allCheck').on('click', function(event) {
			$('.sc-shirt :checkbox').prop('checked', this.checked);
			bottomChange();
		});

		$('.sc-shirts').on('click', '.sc-op', function(event) {
			event.preventDefault();
			var $parent = $(this).parents('.sc-shirt');
			$parent.remove();
		});

		$('.sc-deleteAll').on('click', function(event) {
			event.preventDefault();
			var checked = $('.sc-shirts :checked').parents('.sc-shirt');
			checked.remove();
		});
	})();
});