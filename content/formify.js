var Formify = ( function () {
  "use strict";

  var inputFactory = {
        submit: function () {},
        reset: function () {},
        button: function () {},
        output: function () {},
        radio: function () {},
        checkbox: function () {},
        range: function () {},
        number: function () {},
        url: function () {},
        date: function () {},
        email: function () {},
        tel: function () {},
        text: function (input) { debugger; console.log('poop');},
        textarea: function () {}
      };

  var Formify = {
    form: [],
    init: function () {
      let inputs = document.getElementsByClassName('formify'),
          i = inputs.length;

      while ( i-- ) {
        // add to form model
        this.form.unshift(inputs[i]);
        let c = inputs[i].classList.length;
        while ( c-- ){
          //Create Inputs using input factory
          inputFactory[inputs[i].classList[i]] && inputFactory[inputs[i].classList[i]](inputs[i]);
        }
      }
    },

    showForm: function () {
    },

    hideForm: function () {
    }
  };


  return Formify;
}());
