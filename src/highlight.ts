// src/highlight.js
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css'; // 你可以选择其他主题，例如 'prism-tomorrow.css'
import 'prismjs/components'; // 只导入你需要的语言
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';


export default {
  beforeMount(el) {
    const codeBlocks = el.querySelectorAll('code');
    codeBlocks.forEach((block) => {
      Prism.highlightElement(block);
    });
  },
  updated(el) {
    const codeBlocks = el.querySelectorAll('code');
    codeBlocks.forEach((block) => {
      Prism.highlightElement(block);
    });
  }
};
