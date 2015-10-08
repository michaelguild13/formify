var utils = require('./src/utils.js');

var Formify = ( function () {
  "use strict";
  var defaults = {
    form: {
        method: 'ajax',
        action: 'http://url.com/'
    },
    input: {
      className: '',
      before: '',
      after: ''
    }
  };

  var inputFactory = {
        submit: function (input) {},
        reset: function (input) {},
        button: function (input) {},
        radio: function (input) {},
        checkbox: function (input) {},
        range: function (input) {},
        select: function (input) {},
        number: function (input) { return (utils.createInput(input, 'number'));},
        url: function (input) { return (utils.createInput(input, 'url'));},
        date: function (input) { return (utils.createInput(input, 'date'));},
        email: function (input) { return (utils.createInput(input, 'email'));},
        tel: function (input) { return (utils.createInput(input, 'tel'));},
        text: function (input) { return (utils.createInput(input, 'text'));},
        textarea: function (input) { return (utils.createTextArea(input, 'textarea'));},
        contenteditable: function (input) { return utils.createTextArea(input);}
      };

  var Formify = {
    form: [],
    init: function () {
      // Create options by extending defaults with the passed in arugments
      if ( arguments[0] && typeof arguments[0] === "object" ) {
        this.options = extendDefaults(defaults, arguments[0]);
      }

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
    },

    submitForm: function () {
      let form = document.createElement('form'),
        i = this.form.length;
      while ( i-- ) {
        let input = document.createElement('input');
        input.type = 'hidden';
        input.value = this.form[i].value;
        input.name = this.form[i].name;
        form.appendChild(input);
      }
      debugger;
    }
  };

  return Formify;
}());
