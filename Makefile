NODE_MODULES_PATH = ./node_modules
MOCHA = $(NODE_MODULES_PATH)/mocha/bin/mocha

test:
	$(MOCHA) --recursive --check-leaks --globals window -R spec test.js $(TESTARGS)