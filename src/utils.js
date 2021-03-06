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
    input.value = type == 'file' ? '' : context;
    input.placeholder = context;
    input.name = el.title;
    input.addEventListener("input", () => {
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
      input.addEventListener("input", () => {
        el.firstChild.innerHTML = input.value;
      }, false);
    } else {
      input = document.createElement('input');
      input.type = 'hidden';
      input.name = el.title;
      input.value = el.innerHTML;
      el.contentEditable = true;
      el.addEventListener("input", () => {
        el.lastChild.value = el.innerHTML;
      }, false);
    }
    return input;
  },

  createSelect: ( el, multiple ) => {
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

    if (multiple) {
      input.multiple = true;
      input.addEventListener("input", () => {
        let selected = event.target.selectedOptions,
          count = event.target.selectedOptions.length,
          value = '';

        while ( count-- ) {
          value += event.target.selectedOptions[count].value + ' ';
        }

        el.firstChild.innerText = value;
      }, false);
    } else {
      input.addEventListener("input", () => {
        el.firstChild.innerText = event.target.value;
      }, false);
    }

    return input;
  },

  createCheckbox: ( el ) => {
    let input = document.createElement('input'),
      label = document.createElement('label'),
      context = el.innerText;

    el.innerHTML = '<span>' + context + '</span>';
    input.type = 'checkbox';
    input.value = context;
    input.name = el.title;
    input.setAttribute('checked', true);
    label.setAttribute('for', el.title);
    label.setAttribute('name', el.title);
    label.setAttribute('value', context);
    label.appendChild(input);
    label.innerHTML += context;
    label.addEventListener("change", () => {
      if ( event.target.checked === true ) {
        label.setAttribute('value', input.value);
        el.firstChild.innerText = input.value;
      } else {
        label.setAttribute('value', '');
        el.firstChild.innerText = '';
      }
    }, false);
    return label;
  },

  createRadio: ( el ) => {
    let radios = document.createElement('div'),
      options = document.getElementById(el.title) || {options:{}},
      count = options.options.length,
      context = el.innerText;
    el.innerHTML = '<span>' + context + '</span>';

    while ( count-- ){
      let input = document.createElement('input'),
       label = document.createElement('label');
      input.type = 'radio';
      input.value = options.options[count].value;
      input.name = el.title;
      input.value === context ? input.setAttribute('checked', true) : input.setAttribute('checked', false);
      label.appendChild(input);
      label.innerHTML += options.options[count].value;
      radios.appendChild(label);
    }

    radios.setAttribute('name', el.title);
    radios.setAttribute('value',context);

    radios.addEventListener("change", () => {
      radios.setAttribute('value', event.target.value);
      el.firstChild.innerText = event.target.value;
    }, false);

    return radios;
  },

  createRange: ( el ) => {
    let range = document.createElement('div'),
      input = document.createElement('input'),
      output = document.createElement('output'),
      context = el.innerText;

    el.innerHTML = '<span>' + context + '</span>';
    input.type = 'range';
    input.value = output.innerText = context;
    input.name = el.title;

    range.appendChild(input);
    range.appendChild(output);
    range.setAttribute('name', el.title);
    range.setAttribute('value',context);

    range.addEventListener("input", () => {
      range.setAttribute('value',event.target.value);
      el.firstChild.innerText = output.innerText = event.target.value;
    }, false);

    return range;
  },

  createImg: ( el, type ) => {
    let input = document.createElement('input'),
      context = el.innerText;

    input.type = 'file';
    input.name = el.title;
    input.accept = 'image/*';
    el.parentElement.addEventListener("change", () => {
      let reader = new FileReader();
      reader.onload = function (e) {
        el.src = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }, false);

    return input;
  },

};

module.exports = utils;
