const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const assetsPath = path.join(projectRoot, 'assets');
const publicPath = path.join(projectRoot, 'public');

const copyFolder = (subPath = '') => {
  const currentPath = path.join(assetsPath, subPath);
  const files = fs.readdirSync(currentPath).filter((item) => !item.startsWith('.'));
  for (const file of files) {
    const filePath = path.join(currentPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      copyFolder(path.join(subPath, file));
    } else {
      const destPath = path.join(publicPath, subPath);
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath);
      }
      fs.copyFileSync(filePath, path.join(publicPath, subPath, file));
    }
  }
};

copyFolder();
