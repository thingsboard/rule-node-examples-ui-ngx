const fse = require('fs-extra');
const path = require('path');

let _projectRoot = null;

(async() => {
  await fse.move(sourcePackage(),
    targetPackage(),
    {overwrite: true});
})();

function projectRoot() {
  if (!_projectRoot) {
    _projectRoot = __dirname;
  }
  return _projectRoot;
}

function sourcePackage() {
  return path.join(projectRoot(), 'dist', 'custom-nodes-config', 'fesm2015', 'custom-nodes-config.js');
}

function targetPackage() {
  return path.join(projectRoot(), 'target', 'generated-resources', 'public', 'static', 'custom-nodes-config.js');
}
