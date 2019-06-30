import { components, defineComponents } from './components/componentManager';

function init() {
  defineComponents();
}

const PsMarkup = {
  components,
  init,
};

(function() {
  document.addEventListener('DOMContentLoaded', init);
})()

export default PsMarkup;