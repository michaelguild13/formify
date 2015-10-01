var formify = function () {
  "use strict";
  // find formify
  // build virtual form for submit
  // create formify form
  // create copy of formify model
  var form = document.getElementById('formify');
  var i = form.length;

  while ( i-- ) {
    var input = form[i];
    input.setAttribute('style', 'display: none;');

    if (input.type !== 'submit' && input.type !== 'reset' && input.type !== 'button' && input.type !== 'output') {
      input.parentNode.appendChild(creatContext(input))
        .addEventListener('click', showInputs);
    }
  }

  function showInputs () {
    console.log(this);
    var i = this.parentNode.children.length
    this.setAttribute('style', 'display: none;');

    while ( i-- ) {
      var child = this.parentNode.children[i];
      if ( child.className !== 'formify-input' ) {
        child.setAttribute('style', 'display: block;');
        child.tagName === 'INPUT' || child.tagName === 'TEXTAREA' ? child.focus():'';
      }
    }
  }

  function hideInputs () {

  }

  function creatContext (el) {
    var content = document.createElement('span');
    content.className = 'formify-input';
    content.innerText = el.value;
    return content;
  }
};
