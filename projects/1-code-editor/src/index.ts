import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';

import './style.styl';

monaco.editor.create(document.querySelector('.app'), {
  value: [
    'function sayHello() {',
    '\tconsole.log("Hello world!");',
    '}'
  ].join('\n'),
  language: 'javascript',
  theme: 'vs-dark'
});
