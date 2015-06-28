var AssetRewrite = require('broccoli-asset-rewrite');
var fs = require('fs');


var files = [
  'dist/index.html',
  'dist/section-1/index.html'
];

var myAssetMap = {
  'script.js': 'foo/script.js',
  'section-1/script.js': 'bar/script.js'
}

var assetRewrite = new AssetRewrite({}, {
  assetMap: myAssetMap,
  prepend: 'http://cdn.com/'}
);

var out = '';
for (var i = 0; i < files.length; i++) {
  var filePath = files[i];
  assetRewrite.canProcessFile(filePath);
  out += filePath + '\n' + assetRewrite.processString(fs.readFileSync(filePath).toString(), filePath);
}

console.log('Expected:\n' +
  'dist/index.html\n' +
  '<script src="http://cdn.com/foo/script.js">\n' +
  'dist/section-1/index.html\n' +
  '<script src="http://cdn.com/bar/script.js">\n'
)
console.log('Actual:\n' + out)
