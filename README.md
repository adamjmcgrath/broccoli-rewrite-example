```
$ npm install
$ node ./index.js

Expected:
dist/index.html
<script src="http://cdn.com/foo/script.js">
dist/section-1/index.html
<script src="http://cdn.com/bar/script.js">

Actual:
dist/index.html
<script src="http://cdn.com/foo/script.js">
dist/section-1/index.html
<script src="http://cdn.com/foo/script.js">
```
