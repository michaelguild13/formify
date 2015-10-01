var formify = function () {
  "use strict";
  // find formify
  // build virtual form for submit
  // create formify form
  // create copy of formify model
  // #TODO: return object

  var form = document.getElementById('formify');
  init(form);

  function init ( form ) {
    let i = form.length;

    while ( i-- ) {
      let input = form[i];
      input.setAttribute('style', 'display: none;');
      input.addEventListener('blur', hideInput);
      input.formifyContent = creatContext(input);
      if (input.type !== 'submit' && input.type !== 'reset' && input.type !== 'button' && input.type !== 'output') {
        input.parentNode
          .appendChild(input.formifyContent)
          .addEventListener('click', showInput);
      }
    }
  }

  function showForm () {
    let i = form.length;

    while ( i-- ) {
      form[i].setAttribute('style', 'display: block;');
    }
  }

  function showInput () {
    let i = this.parentNode.children.length;
    this.setAttribute('style', 'display: none;');

    while ( i-- ) {
      let child = this.parentNode.children[i];
      if ( child === this.formifyInput ) {
        child.setAttribute('style', 'display: block;');
        child.focus();
      } else if ( this.formifyInput.type === 'range') {
        form.querySelector('[for=' + this.formifyInput.id +']').setAttribute('style', 'display: block;');
      }
    }
  }

  function hideInput () {
    let val = this.value;

    this.setAttribute('style', 'display: none;');

    if ( this.type === 'range') {
      let output = form.querySelector('[for=' + this.id +']');
      output.setAttribute('style', 'display: none;');
    }

    this.formifyContent.setAttribute('style', 'display: block;');
    this.formifyContent.innerText = val;
  }

  function hideForm () {
    while ( i-- ) {
      form[i].setAttribute('style', 'display: block;');
    }
  }

  function creatContext (el) {
    let content = document.createElement('span');
    content.className = 'formify-input';
    content.innerText = el.value;
    content.formifyInput = el;
    return content;
  }
};
