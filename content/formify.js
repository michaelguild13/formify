var Formify = ( function () {
  "use strict";

  var inputFactory = {
        submit: function (input) {},
        reset: function (input) {},
        button: function (input) {},
        radio: function (input) {},
        checkbox: function (input) {},
        range: function (input) {},
        select: function (input) {},
        number: function (input) { return (createInput(input, 'number'));},
        url: function (input) { return (createInput(input, 'url'));},
        date: function (input) { return (createInput(input, 'date'));},
        email: function (input) { return (createInput(input, 'email'));},
        tel: function (input) { return (createInput(input, 'tel'));},
        text: function (input) { return (createInput(input, 'text'));},
        textarea: function (input) { return (createTextArea(input, 'textarea'));},
        contenteditable: function (input) { return createTextArea(input);}
      };

  var Formify = {
    form: [],
    init: function () {
      let inputs = document.getElementsByClassName('formify'),
          i = inputs.length;

      while ( i-- ) {
        // add to form model

        let c = inputs[i].classList.length;
        while ( c-- ){
          let input = inputFactory[inputs[i].classList[c]] && inputFactory[inputs[i].classList[c]](inputs[i]);
          if ( input ) {
            inputs[i].appendChild(input);
            this.form.unshift(input);
          }
        }
      }
    },

    showForm: function () {
      let i = this.form.length;
      while ( i-- ) {
        this.form[i].style.display = 'block';
      }
    },

    hideForm: function () {
      let i = this.form.length;
      while ( i-- ) {
        this.form[i].style.display = 'none';
      }
    }
  };

function createInput( el, type ) {
  let input = document.createElement('input'),
    context = el.innerText;

  el.innerHTML = '<span>' + context + '</span>';
  input.type = type;
  input.value = context;
  input.name = el.title;
  input.addEventListener("change", function () {
    el.firstChild.innerText = input.value;
  }, false);

  return input;
}

function createTextArea( el, type ) {
  let input = '',
    context = el.innerHTML;

  if ( type === 'textarea') {
    input = document.createElement('textarea');
    el.innerHTML = '<span>' + context + '</span>';
    input.value = context;
    input.name = el.title;

    input.addEventListener("change", function() {
      el.firstChild.innerHTML = input.value;
    }, false);

  } else {

    input = document.createElement('input');
    input.type = 'hidden';
    input.name = el.title;
    el.contentEditable = true;
    el.lastChild.value = el.innerHTML;

    el.addEventListener("blur", function() {
      el.lastChild.value = el.innerHTML;
    }, false);
  }

  return input;
}

  return Formify;
}());
