## Embeddable Appreciate Button for Behance

![Cover image - Behance button](http://i.imgur.com/CsYQ6G7.png)

**It doesn't work anymore. :)**

Behance doesn't have an embeddable "like" button, unlike Facebook or Twitter. So, I made one.

Try appreciating this project from the demo page [here](http://whoeverest.github.com/behance/behance-button-demo.html).

It's a hackish proof-of-concept more then anything, so feel free to try it out, but don't expect it to work forever; eventually Behance will fix the thing that makes the button work.

You can find the jQuery plugin [here](https://github.com/whoeverest/behance/blob/gh-pages/behance-button-jquery-plugin.js).

### Install

To add the Behance button to your page, you need to do the following steps:

1. If you don't have it already, add jQuery to your page:

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
```

2. Download the [Behance plugin](https://raw.github.com/whoeverest/behance/gh-pages/behance-button-jquery-plugin.js) and add it _below_ the jQuery script:

```html
<script src="behance-button-jquery-plugin.js"></script>
```

3. Create a `<div id="behance-button"></div>` element somewhere in your page (you can use another ID, just remember it)

4. Wait for the `document.ready` event and make the `div` a Behance button

```javascript
$(function() {
    $('#behance-button').behanceButton('1234567'); // replace `1234567` with your actual project's ID
})
```

### Example

```html
<html>
<head>
    <link href="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.0/css/bootstrap-combined.min.css" rel="stylesheet">
    <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
    <script src="behance-button-jquery-plugin.js"></script>
    <script type="text/javascript">
    $(function() {
        $('#appreciate_button').behanceButton('7321861');
    })
    </script>
    <title>Appreciate button demo page</title>
</head>
<body>
    <div class="row">
        <div class="span8 offset4">
            <h1>Appreciate button demo page</h1>
            <p>With some project description here.</p>
            <img src="http://i.imgur.com/NSWTu43.png" style="border: 2px solid silver; width: 100%;">
            <h1></h1>
            <div id="appreciate_button" style="margin-left: auto; margin-right: auto;"></div>
        </div>
    </div>
</body>
</html>
```

This is the source of the [demo page](http://whoeverest.github.com/behance/behance-button-demo.html).
