var utils = require('./src/utils.js');

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
  submit: input => {},
  reset: input => {},
  button: input => {},
  radio: input => {},
  checkbox: input => {},
  range: input => {},
  select: input => {},
  number: input => { return (utils.createInput(input, 'number'));},
  url: input => { return (utils.createInput(input, 'url'));},
  date: input => { return (utils.createInput(input, 'date'));},
  email: input => { return (utils.createInput(input, 'email'));},
  tel: input => { return (utils.createInput(input, 'tel'));},
  text: input => { return (utils.createInput(input, 'text'));},
  textarea: input => { return (utils.createTextArea(input, 'textarea'));},
  contenteditable: input => { return utils.createTextArea(input);}
};

var Formify = {
  form: [],
  init: (opts) => {
    // Create options by extending defaults with the passed in arugments
    if ( opts && typeof opts === 'object' ) {
      Formify.options = utils.extendDefaults(defaults, opts);
    }
    debugger;

    let inputs = document.getElementsByClassName('formify'),
        i = inputs.length;
    while ( i-- ) {
      // add to form model
      let c = inputs[i].classList.length;
      while ( c-- ){
        let input = inputFactory[inputs[i].classList[c]] && inputFactory[inputs[i].classList[c]](inputs[i]);
        if ( input ) {
          inputs[i].appendChild(input);
          Formify.form.unshift(input);
        }
      }
    }
  },

  showForm: () => {
    let i = Formify.form.length;
    while ( i-- ) {
      Formify.form[i].style.display = 'block';
    }
  },

  hideForm: () => {
    let i = Formify.form.length;
    while ( i-- ) {
      Formify.form[i].style.display = 'none';
    }
  },

  submitForm: () => {
    let form = document.createElement('form'),
      i = Formify.form.length;
    while ( i-- ) {
      let input = document.createElement('input');
      input.type = 'hidden';
      input.value = Formify.form[i].value;
      input.name = Formify.form[i].name;
      form.appendChild(input);
    }
    debugger;
  }
};

global.Formify = Formify;
