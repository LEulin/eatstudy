// JavaScript Document
jQuery(function ($) {
	"use strict";

	$(document).on('ready', function () {

		if ($('.set_custom_images').length > 0) {
			if (typeof wp !== 'undefined' && wp.media && wp.media.editor) {
				$('.wrap').on('click', '.set_custom_images', function (e) {
					e.preventDefault();
					var button = $(this);
					var id = button.prev();
					wp.media.editor.send.attachment = function (props, attachment) {
						id.val(attachment.id);
					};
					wp.media.editor.open(button);
					return false;
				});
			}
		};
	});

});
