CONCURRENTLY=./node_modules/.bin/concurrently
ESLINT=./node_modules/.bin/eslint
NODEMON=./node_modules/.bin/nodemon
TSC=./node_modules/.bin/tsc
WAIT_ON=./node_modules/.bin/wait-on

APP_JS=./dist/app.js
RUN_TESTS_JS=./dist/client/run-tests.js

run_dev_environment:
	make ts_clean
	$(CONCURRENTLY) "make eslint_watch" "make ts_watch" "make tests_watch"

eslint:
	$(ESLINT) "src/**"

eslint_watch:
	$(NODEMON) --ext js,ts,tsx ./src/ --exec "make eslint"

serve:
	$(WAIT_ON) -l $(APP_JS)
	node $(APP_JS)

serve_watch:
	$(NODEMON) --watch ./dist/ --exec "make serve"

tests_run:
	$(WAIT_ON) -l $(RUN_TESTS_JS)
	node $(RUN_TESTS_JS)

tests_watch:
	$(NODEMON) --watch ./dist/ --exec "make tests_run"

ts_build:
	$(TSC) --pretty

ts_clean:
	rm -r ./dist/* || true

ts_watch:
	$(NODEMON) --ext js,ts,tsx --watch ./src/ --exec "make ts_clean ts_build"
