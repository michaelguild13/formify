var utils = {
  extendDefaults: (defaults, opts) => {
    for ( var k in opts ) {
      if ( opts[k] && defaults[k] && typeof opts[k] === 'object') {
        defaults[k] = utils.extendDefaults(defaults[k], opts[k]);
      } else {
        defaults[k] = opts[k] || defaults[k];
      }
    }
    return defaults;
  },

  createInput: ( el, type ) => {
    let input = document.createElement('input'),
      context = el.innerText;

    el.innerHTML = '<span>' + context + '</span>';
    input.type = type;
    input.value = context;
    input.name = el.title;
    input.addEventListener("change", () => {
      el.firstChild.innerText = input.value;
    }, false);

    return input;
  },

  createTextArea: ( el, type ) => {
    let input = '',
      context = el.innerHTML;

    if ( type === 'textarea') {
      input = document.createElement('textarea');
      el.innerHTML = '<span>' + context + '</span>';
      input.value = context;
      input.name = el.title;
      input.style.width = '100%';
      input.addEventListener("change", () => {
        el.firstChild.innerHTML = input.value;
      }, false);
    } else {
      input = document.createElement('input');
      input.type = 'hidden';
      input.name = el.title;
      input.value = el.innerHTML;
      el.contentEditable = true;
      el.addEventListener("blur", () => {
        el.lastChild.value = el.innerHTML;
      }, false);
    }
    return input;
  },

  createSelect: ( el, type ) => {
    let input = document.createElement('select'),
      options = document.getElementById(el.title) || {options:{}},
      count = options.options.length,
      context = el.innerText;

    el.innerHTML = '<span>' + context + '</span>';
    input.name = el.title;

    while ( count-- ) {
      context === options.options[0].value ? options.options[0].selected = true : '';
      input.appendChild(options.options[count]);
    }

    input.addEventListener("change", () => {
      el.firstChild.innerText = input.value;
    }, false);

    return input;
  },

  createCheckbox: ( el, type ) => {
    let input = document.createElement('input'),
      label = document.createElement('label'),
      context = el.innerText;

    el.innerHTML = '<span>' + context + '</span>';
    input.type = type;
    input.value = context;
    input.name = el.title;
    input.setAttribute('checked', true);
    label.setAttribute('for', el.title);
    label.appendChild(input);
    label.innerHTML += context;
    label.addEventListener("change", () => {
      event.target.checked === true ? el.firstChild.innerText = input.value : el.firstChild.innerText = '';
    }, false);
    return label;
  },

  createRadio: ( el, type ) => {
    let radios = document.createElement('div'),
      options = document.getElementById(el.title) || {options:{}},
      count = options.options.length,
      context = el.innerText;
    el.innerHTML = '<span>' + context + '</span>';

    while ( count-- ){
      let input = document.createElement('input'),
       label = document.createElement('label');
      input.type = type;
      input.value = options.options[count].value;
      input.name = el.title;
      input.value === context ? input.setAttribute('checked', true) : input.setAttribute('checked', false);
      label.appendChild(input);
      label.innerHTML += options.options[count].value;
      radios.appendChild(label);
    }
    radios.addEventListener("change", () => {
      el.firstChild.innerText = event.target.value;
    }, false);

    return radios;
  },

};

module.exports = utils;
