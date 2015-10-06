# formify
Formify creates a vitual form model based on the formify class to make nodes "contenteditable".
Do single updates or whole page content updates via form submission though traditional or ajax methods.

Simply add the class .formify with any of the following input types:
.submit
.reset
.button
.radio
.checkbox
.range
.select
.number
.url
.date
.email
.tel
.text
.textarea
.contenteditable

````ex:
<div class="formify input" title="firstname">John</div>
<div class="formify input" title="lastname">Smith</div>
<div class="formify textarea" title="status">This is my status</div>
<div class="formify contenteditable" title="about">John Smith is a <b>developer</b> in the DC area</div>
````
