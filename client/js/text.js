var text = function(options) {
	var self = this;
	self.options = options;
	// Show value and label?
	self.options.label = true;
	self.options.value = true;
};

extendObj(text, base);

text.prototype.render = function() {
	var self = this;
	self.control = $("<input id='" + self.options.path + "' type='text' />");
	self.control.addClass("data");
	if (self.options.data != undefined) {
		self.setValue(self.options.data);
	}
};

text.prototype.appendTo = function(container) {
	var self = this;
	self.control.appendTo(container);
};

text.prototype.value = function() {
	var self = this;
	return self.control.val();
};

text.prototype.setValue = function(data) {
	var self = this;
	self.control.val(data);
};

