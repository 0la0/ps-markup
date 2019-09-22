import { components, defineComponents } from './components/componentManager';
import sampleBank, { loadDefaultSamples } from './services/audio/sampleBank';
import { previewSample } from './services/audio/Sampler';

function init() {
  defineComponents();
  loadDefaultSamples();
}

const PsMarkup = {
  components,
  init,
  addSample: sampleBank.addSample.bind(sampleBank),
  removeSample: sampleBank.removeSample.bind(sampleBank),
  renameSample: sampleBank.renameSample.bind(sampleBank),
  getSampleNames: sampleBank.getNonDefaultSampleKeys.bind(sampleBank),
  previewSample,
};

(function() {
  document.addEventListener('DOMContentLoaded', init);
})()

export default PsMarkup;