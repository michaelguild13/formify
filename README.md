# formify
Formify creates a vitual form model based on the formify class to make nodes "contenteditable".
Do single updates or whole page content updates via form submission though traditional or ajax methods.
Build the content view without having to do all the extra work of editable content.

Simply add the class .formify, data-formify="<input type>", and title:
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

<h1>Methods: </h1>
<p>Formify.init() - initalizes formify <br>
Formify.showForm() - shows all form inputs <br>
Formify.hideForm() - hides all form inputs <br>
Formify.showContent() - Shows all contenteditable content <br>
Formify.hideContent() - hides all contenteditable content <br><br>
Formify.submitForm( method, action, callback ) - submits the virtual form <br>
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

<pre>
  <code class="language-html" data-lang="html">
    Text Input
    &lt;span class=&quot;formify&quot; data-formify=&quot;text&quot; title=&quot;Name&quot;&gt;Michael Guild&lt;/span&gt;

    Select
    &lt;span class=&quot;formify&quot; data-formify=&quot;select&quot; title=&quot;department&quot;&gt;Development&lt;/span&gt;
    &lt;datalist id=&quot;department&quot;&gt;
    &lt;option value=&quot;Development&quot;&gt;Development&lt;/option&gt;
    &lt;option value=&quot;HR&quot;&gt;HR&lt;/option&gt;
    &lt;option value=&quot;Special Ops&quot;&gt;Special Ops&lt;/option&gt;
    &lt;/datalist&gt;

    Radio
    &lt;span class=&quot;formify&quot; data-formify=&quot;radio&quot; title=&quot;relationshipstatus&quot;&gt;Single&lt;/span&gt;
    &lt;datalist id=&quot;relationshipstatus&quot;&gt;
    &lt;option value=&quot;Single&quot;&gt;Single&lt;/option&gt;
    &lt;option value=&quot;Taken&quot;&gt;Taken&lt;/option&gt;
    &lt;option value=&quot;Dragon&quot;&gt;Dragon&lt;/option&gt;
    &lt;/datalist&gt;
  </code>
</pre>
