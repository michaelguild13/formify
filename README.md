<p>Formify creates a vitual form model based on the formify class to make nodes "contenteditable".
Do single updates or whole page content updates via form submission though traditional or ajax methods.
Build the content view without having to do all the extra work of editable content. </p>

<p><a href="demo.html">Click here to Demo</a></p>

<ul>
<li>Will support json schema generation</li>
<li>third party tools like formvalidation.io</li>
<li>is very light weight with no dependancies only at 5k !</li>
</ul>

<p>Simply add the class .formify, data-formify="", and title:</p>

<ul>
<li>submit</li>
<li>reset</li>
<li>button</li>
<li>radio</li>
<li>checkbox</li>
<li>range</li>
<li>select</li>
<li>number</li>
<li>url</li>
<li>date</li>
<li>email</li>
<li>tel</li>
<li>text</li>
<li>textarea</li>
<li>contenteditable</li>
</ul>

<h1>
<a id="methods-" class="anchor" href="#methods-" aria-hidden="true"><span class="octicon octicon-link"></span></a>Methods: </h1>

<p><b>Formify.init()</b> - initalizes formify <br>
<b>Formify.showForm()</b> - shows all form inputs <br>
<b>Formify.hideForm()</b> - hides all form inputs <br>
<b>Formify.showContent()</b> - Shows all contenteditable content <br>
<b>Formify.hideContent()</b> - hides all contenteditable content <br><br>
<b>Formify.submitForm( method, action, callback )</b> - submits the virtual form <br>
Method: Defines which HTTP method to use when submitting the form. Can be GET (default) or POST. Use AJAX for Ajax sobmission. <br>
Action: The URI of a program that processes the information submitted via the form. <br>
Callback: Optional Callback method for custom submission.
</p>

<p>Formify will take any node and make a form element of it to create a vitual form and submit.
This makes it so you only need to create the view and the contenteditable sections can then just
be declaired.</p>
<p>All you have to do is add the class <b>"formify"</b> to whatever you want to turn into a form item. Set
  <b>data-formify</b> to an input type (ex: text, texarea, date, select, etc.). Also, formify uses the <b>"title"</b> attribute to set the input's name
  for submission.
</p>
<h2>Text Input</h2>
<pre>
  <code>
    &lt;span class="formify" data-formify="text" title="Name"&gt;Michael Guild&lt;/span&gt;
  </code>
</pre>
<h2>Select</h2>
<pre>
  <code>
    &lt;span class="formify" data-formify="select" title="department"&gt;Development&lt;/span&gt;
    &lt;datalist id="department"&gt;
    &lt;option value="Development"&gt;Development&lt;/option&gt;
    &lt;option value="HR"&gt;HR&lt;/option&gt;
    &lt;option value="Special Ops"&gt;Special Ops&lt;/option&gt;
    &lt;/datalist&gt;
  </code>
</pre>
<h2>Radio</h2>
<pre>
  <code>
    &lt;span class="formify" data-formify="radio" title="relationshipstatus"&gt;Single&lt;/span&gt;
    &lt;datalist id="relationshipstatus"&gt;
    &lt;option value="Single"&gt;Single&lt;/option&gt;
    &lt;option value="Taken"&gt;Taken&lt;/option&gt;
    &lt;option value="Dragon"&gt;Dragon&lt;/option&gt;
    &lt;/datalist&gt;
  </code>
</pre>
