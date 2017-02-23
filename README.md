# burgercolor
It's important that you follow this guide to get the right result!

## The markup
```html
// add this in the bottom, right before the </body> tag
<script src="burgercolor.js"></script>
<script>
	$(document).ready(function(){
		$('section').burgercolor({
			offset: 75
		});
	});
</script>
```
