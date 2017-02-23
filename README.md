# burgercolor
It's important that you follow this guide to get the right result!

## The markup
```html
// add this in the bottom, right before the </body> tag
<script src="burgercolor.js"></script>
<script>
	$(document).ready(function(){
		$('section').burgercolor({ // the element you want to detect the background color of
			offset: 75 // the offset (default 0)
		});
	});
</script>
```
## Important
