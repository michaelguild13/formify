var Formify = ( function () {
  "use strict";
  // find formify
  // build virtual form for submit
  // create formify form
  // create copy of formify model
  // #TODO: return object
  var form = document.getElementById('formify');
  var inputFactory = {
    submit: function () {},
    reset: function () {},
    button: function () {},
    output: function () {},
    radio: function () {},
    checkbox: function () {},
    range: inputInit,
    number: inputInit,
    url: inputInit,
    date: inputInit,
    email: inputInit,
    tel: inputInit,
    text: inputInit,
    textarea: inputInit
  };

  var Formify = {
    init: function () {
      let i = form.length;

      while ( i-- ) {
        let input = form[i];
        input.setAttribute('style', 'display: none;');
        input.addEventListener('blur', hideInput);
        input.formifyContent = creatContext(input);
        inputFactory[input.type](input);
        // if (input.type !== 'submit' && input.type !== 'reset' && input.type !== 'button' && input.type !== 'output') {
        //   input.parentNode
        //     .insertBefore(input.formifyContent, input.nextSibling)
        //     .addEventListener('click', showInput);
        // }
      }
    },

    showForm: function () {
      let i = form.length;

      while ( i-- ) {
        form[i].setAttribute('style', 'display: block;');
      }
    },

    hideForm: function () {
      let i = form.length;
      while ( i-- ) {
        form[i].setAttribute('style', 'display: none;');
      }
    }
  };

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
    this.formifyContent.innerText = val || this.placeholder || 'Put Content Here';
  }

  function creatContext (el) {
    let content = document.createElement('span');
    content.className = 'formify-input';
    content.innerText = el.value;
    content.formifyInput = el;
    return content;
  }

  function inputInit (input) {
    input.parentNode
      .insertBefore(input.formifyContent, input.nextSibling)
      .addEventListener('click', showInput);
  }

  return Formify;
}());
