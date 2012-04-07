# Grunt "init:jquery" example

This is example output generated by the "grunt init:jquery" task.

_Note: this repository was generated dynamically using grunt v0.3.8. Instead of
reporting issues here, please report any issues with this repository as
[grunt issues][issues]. Instead of watching or forking this repository,
watch [grunt][grunt] and use the grunt [init task][init]._

## Project Creation Transcript
The following is a transcript of the session in which this project and
repository were created. This is not actually a part of the [grunt][grunt]
"init:jquery" template, this session transcript was added afterwards. The
text after the `$` are the commands that were executed, and everything else is
program output. If you want to see the repository exactly as it was created by
grunt, view [the previous commit][prev].

Want to learn more? Check [grunt][grunt] out.

[grunt]: https://github.com/cowboy/grunt
[issues]: https://github.com/cowboy/grunt/issues
[init]: https://github.com/cowboy/grunt/blob/master/docs/task_init.md
[expect]: https://github.com/cowboy/grunt/blob/master/dev/init.exp
[prev]: https://github.com/cowboy/grunt-jquery-example/tree/HEAD~1

Note that this entire build process is automated by a rather complex [expect
script][expect], which is used to automate grunt in order to facilitate the
creation of this and other [init task][init] example repositories.

```
$ mkdir grunt-jquery-example && cd grunt-jquery-example

$ git init
git remote add origin git@github.com:cowboy/grunt-jquery-example.git
Initialized empty Git repository in /private/tmp/grunt-jquery-example/.git/

$ git remote add origin git@github.com:cowboy/grunt-jquery-example.git

$ grunt init:jquery
Running "init:jquery" (init) task
This task will create one or more files in the current directory, based on the
environment and the answers to a few questions. Note that answering "?" to any
question will show question-specific help and answering "none" to most questions
will leave its value blank.

"jquery" template notes:
Project name must start with "jquery." and should be a unique ID not already
in use at plugins.jquery.com. Project title should be a human-readable title,
and doesn't need to contain the word "jQuery", although it may. For example, a
plugin titled "Awesome Plugin" might have the name "jquery.awesome-plugin".

Please answer the following:
[?] Project name (jquery.grunt-jquery-example) jquery.grunt-example
[?] Project title (jQuery Grunt Example) Grunt jQuery Example Plugin
[?] Description (The best jQuery plugin ever.) This is example output generated by the "grunt init:jquery" task.
[?] Version (0.1.0) 
[?] Project git repository (git://github.com/cowboy/grunt-jquery-example.git) 
[?] Project homepage (https://github.com/cowboy/grunt-jquery-example) 
[?] Project issues tracker (https://github.com/cowboy/grunt-jquery-example/issues) 
[?] Licenses (MIT GPL) 
[?] Author name ("Cowboy" Ben Alman) 
[?] Author email (none) 
[?] Author url (http://benalman.com/) 
[?] Required jQuery version (~1.5) 
[?] Do you need to make any changes to the above before continuing? (y/N) 

Writing grunt.js...OK
Writing libs/jquery/jquery.js...OK
Writing libs/qunit/qunit.css...OK
Writing libs/qunit/qunit.js...OK
Writing README.md...OK
Writing src/jquery.grunt-example.js...OK
Writing test/jquery.grunt-example.html...OK
Writing test/jquery.grunt-example_test.js...OK
Writing LICENSE-MIT...OK
Writing LICENSE-GPL...OK

Initialized from template "jquery".

Done, without errors.

$ tree
.
├── LICENSE-GPL
├── LICENSE-MIT
├── README.md
├── grunt.js
├── libs
│   ├── jquery
│   │   └── jquery.js
│   └── qunit
│       ├── qunit.css
│       └── qunit.js
├── package.json
├── src
│   └── jquery.grunt-example.js
└── test
    ├── jquery.grunt-example.html
    └── jquery.grunt-example_test.js

5 directories, 11 files

$ grunt
Running "lint:files" (lint) task
Lint free.

Running "qunit:files" (qunit) task
Testing jquery.grunt-example.html....OK
>> 4 assertions passed (25ms)

Running "concat:dist" (concat) task
File "dist/jquery.grunt-example.js" created.

Running "min:dist" (min) task
File "dist/jquery.grunt-example.min.js" created.
Uncompressed size: 524 bytes.
Compressed size: 269 bytes gzipped (380 bytes minified).

Done, without errors.

$ tree
.
├── LICENSE-GPL
├── LICENSE-MIT
├── README.md
├── dist
│   ├── jquery.grunt-example.js
│   └── jquery.grunt-example.min.js
├── grunt.js
├── libs
│   ├── jquery
│   │   └── jquery.js
│   └── qunit
│       ├── qunit.css
│       └── qunit.js
├── package.json
├── src
│   └── jquery.grunt-example.js
└── test
    ├── jquery.grunt-example.html
    └── jquery.grunt-example_test.js

6 directories, 13 files

$ git add .

$ git commit -m 'Committing example "grunt init:jquery" task output.'
[master (root-commit) 5da8c5c] Committing example "grunt init:jquery" task output.
 13 files changed, 11867 insertions(+), 0 deletions(-)
 create mode 100644 LICENSE-GPL
 create mode 100644 LICENSE-MIT
 create mode 100644 README.md
 create mode 100644 dist/jquery.grunt-example.js
 create mode 100644 dist/jquery.grunt-example.min.js
 create mode 100644 grunt.js
 create mode 100644 libs/jquery/jquery.js
 create mode 100644 libs/qunit/qunit.css
 create mode 100644 libs/qunit/qunit.js
 create mode 100644 package.json
 create mode 100644 src/jquery.grunt-example.js
 create mode 100644 test/jquery.grunt-example.html
 create mode 100644 test/jquery.grunt-example_test.js

```

## License
Copyright (c) 2012 "Cowboy" Ben Alman  
Licensed under the MIT license.
