...
# Project Overview

This project tests the ability to use a testing suite, like Jasmine, to validate the code. It uses a Feed Reader App and writes test spec in Jasmine.


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!

## Steps to run application

To start the app, open index.html in your browser.
The tests were written in the feedreader.js file.
Upon load, Jasmine should appear in a bar at the bottom. The spec bar should be green, meaning that all the tests have passed.
If a spec does not pass, Jamsmine will inform the user which spec does not pass.

## The tests:

* tests to make sure that the allFeeds variable has been defined and that it is not empty.
* loops through each feed and determines if the URL is defined and not empty.
* loops through each feed and determines that each feed has a name and not empty.
* ensures the menu element is hidden by default.
* validates proper functioning of the hamburger menu toggle.
* tests that there is at least one entry in feed.
* tests that new content is loaded by loadFeed().

## Reference

http://jasmine.github.io/2.0/introduction.html
https://www.udacity.com/course/viewer#!/c-ud549-nd/l-3769099021/m-3868728773 (video course)
