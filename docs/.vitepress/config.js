import fs from 'fs';
import path from 'path';

export default {
  title: 'Jason\'s Unity Notes',
  description: '个人学习 unity 时记录的一些笔记。',
  base: '/unity-notes/',
  themeConfig: {
    sidebar: getSidebar(path.resolve('docs')),
  },
};

function getSidebar(base) {
  return fs.readdirSync(path.resolve('docs'))
    .filter(item => item[0] !== '.' && !item.endsWith('.md'))
    .map(directoryName => {
      return {
        text: normalizeMenuItemName(directoryName),
        items: fs.readdirSync(path.join(base, directoryName))
          .filter(item => item[0] !== '.' && item.endsWith('.md'))
          .map(docName => ({
            text: normalizeMenuItemName(docName.replace(/\.[^\.]+$/g, '')),
            link: `/${directoryName}/${docName.replace(/\.[^\.]+$/g, '')}`,
          })),
      };
    });
}

function normalizeMenuItemName(fileName) {
  return fileName.replace(/(^|-)(\w)/g, (_match, pre, char) => `${pre ? ' ' : ''}${char.toUpperCase()}`);
}
