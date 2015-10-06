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
        text: function (input) { console.log(input);},
        textarea: function () {}
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


  return Formify;
}());
