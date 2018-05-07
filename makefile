all: lib/index.js

lib:
	mkdir -p lib

lib/%.js: src/%.js lib
	node_modules/.bin/babel --presets es2015 $< -o $@

