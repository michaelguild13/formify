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
  }
};

module.exports = utils;
