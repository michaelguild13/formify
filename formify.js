var utils = require('./src/utils.js');

var defaults = {
  className: '',
  before: '',
  after: ''
};

var inputFactory = {
  submit: input => {},
  reset: input => {},
  button: input => {},
  img: input => { return (utils.createImg(input));},
  radio: input => { return utils.createRadio(input);},
  checkbox: input => { return (utils.createCheckbox(input));},
  range: input => { return (utils.createRange(input));},
  select: input => { return (utils.createSelect(input));},
  multiselect: input => { return (utils.createSelect(input, true));},
  number: input => { return (utils.createInput(input, 'number'));},
  url: input => { return (utils.createInput(input, 'url'));},
  date: input => { return (utils.createInput(input, 'date'));},
  email: input => { return (utils.createInput(input, 'email'));},
  tel: input => { return (utils.createInput(input, 'tel'));},
  file: input => { return (utils.createInput(input, 'file'));},
  text: input => { return (utils.createInput(input, 'text'));},
  textarea: input => { return (utils.createTextArea(input, 'textarea'));},
  contenteditable: input => { return utils.createTextArea(input);}
};

var Formify = {
  form: [],
  content: [],
  init: (opts) => {
    // Create options by extending defaults with the passed in arugments
    if ( opts && typeof opts === 'object' ) {
      Formify.options = utils.extendDefaults(defaults, opts);
    }

    let inputs = document.getElementsByClassName('formify'),
        i = inputs.length;

    while ( i-- ) {
      // add to form model
      let input = inputFactory[inputs[i].dataset.formify] && inputFactory[inputs[i].dataset.formify](inputs[i]);
      if ( input ) {
        input.className = Formify.options.className || '';

        // check if element is self closing
        if (inputs[i].innerText == '' && inputs[i].innerHTML == '') {
          inputs[i].parentElement.appendChild(input);
        } else {
          inputs[i].appendChild(input);
        }

        Formify.form.unshift(input);
        inputs[i].dataset.formify === 'contenteditable' || inputs[i].dataset.formify === 'img' ? '' : Formify.content.unshift(inputs[i].firstChild);
      }
    }
    Formify.hideForm();
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

  showContent: () => {
    let i = Formify.content.length;
    while ( i-- ) {
      Formify.content[i].style.display = 'inline';
    }
  },

  hideContent: () => {
    let i = Formify.content.length;
    while ( i-- ) {
      Formify.content[i].style.display = 'none';
    }
  },

  submitForm: (method, action, callback) => {
    let form = document.createElement('form'),
      i = Formify.form.length;

    while ( i-- ) {
      let input = document.createElement('input');
      input.type = 'hidden';
      input.value = Formify.form[i].value || Formify.form[i].getAttribute('value');
      input.name = Formify.form[i].name || Formify.form[i].getAttribute('name');
      form.appendChild(input);
    }

    form.setAttribute('method', method);
    form.setAttribute('action', action);

    callback ? callback() : form.onsubmit(event);
  }
};

global.Formify = Formify;
