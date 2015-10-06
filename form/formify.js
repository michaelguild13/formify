var Formify = ( function () {
  "use strict";

  var form = document.getElementById('formify'),
      inputFactory = {
        submit: function () {},
        reset: function () {},
        button: function () {},
        output: function () {},
        radio: function () {},
        checkbox: function () {},
        range: function () {},
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
        inputFactory[input.type](input);
      }
    },

    showForm: function () {
      let i = form.length;
      while ( i-- ) {
        form[i].style.display = 'block';
      }
    },

    hideForm: function () {
      let i = form.length;
      while ( i-- ) {
        form[i].style.display = 'none'
      }
    }
  };

  function showInput () {
    this.style.display = 'none';
    this.formifyInput.style.display = 'blocK';
  }

  function showRange () {
    if ( this.formifyInput.type === 'range') {
      form.querySelector('[for=' + this.formifyInput.id +']').style.display = 'block';
    }
  }

  function hideInput () {
    let val = this.value;
    this.style.display = 'none';
    this.formifyContent.style.display = 'block';
    this.formifyContent.innerText = val || this.placeholder || 'Put Content Here';
  }

  function hideRange () {
    if ( this.type === 'range') {
      let output = form.querySelector('[for=' + this.id +']');
      output.setAttribute('style', 'display: none;');
    }
  }
  function createContext (el) {
    let content = document.createElement('span');
    content.className = 'formify-input';
    content.innerText = el.value;
    content.formifyInput = el;
    return content;
  }

  function inputInit (input) {
    input.style.display = 'none';
    input.formifyContent = createContext(input);
    input.addEventListener('blur', hideInput);
    input.parentNode
      .insertBefore(input.formifyContent, input.nextSibling)
      .addEventListener('click', showInput);
  }

  function multiInputInit (input) {

  }

  return Formify;
}());
