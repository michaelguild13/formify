var Formify = ( function () {
  "use strict";

  var inputFactory = {
        submit: function (input) {},
        reset: function (input) {},
        button: function (input) {},
        radio: function (input) {},
        checkbox: function (input) {},
        range: function (input) {},
        number: function (input) {input.appendChild(createInput(input, 'number'));},
        url: function (input) {input.appendChild(createInput(input, 'url'));},
        date: function (input) {input.appendChild(createInput(input, 'date'));},
        email: function (input) {input.appendChild(createInput(input, 'email'));},
        tel: function (input) { input.appendChild(createInput(input, 'tel'));},
        text: function (input) { input.appendChild(createInput(input, 'text'));},
        textarea: function (input) { input.appendChild(createTextArea(input, 'textarea'));},
        contenteditable: function (input) { createTextArea(input);}
      };

  var Formify = {
    form: [],
    init: function () {
      let inputs = document.getElementsByClassName('formify'),
          i = inputs.length;

      while ( i-- ) {
        // add to form model
        //this.form.unshift(inputs[i]);
        let c = inputs[i].classList.length;
        while ( c-- ){
          inputFactory[inputs[i].classList[c]] && inputFactory[inputs[i].classList[c]](inputs[i]);
        }
      }
    },

    showForm: function () {
    },

    hideForm: function () {
    }
  };

function createInput( el, type ) {
  let input = document.createElement('input'),
    context = el.innerText;

  el.innerHTML = '<span>' + context + '</span>';
  input.type = type;
  input.value = context;
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
    input.addEventListener("change", function() {
      el.firstChild.innerHTML = input.value;
    }, false);
  } else {
    el.contentEditable = true;
  }
  return input;
}

  return Formify;
}());
