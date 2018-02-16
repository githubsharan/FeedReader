/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
    describe('RSS Feeds', function() {
      /* This is our first test - it tests to make sure that the
       * allFeeds variable has been defined and that it is not
       * empty.
       */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // This test loops through each feed and determines if the URL
                // defined and not empty.
        it('URL is defined and not empty', function() {
              allFeeds.forEach(function(feed) {
                  expect(feed.url).toBeDefined();
                  expect(feed.url.length).not.toBe(0);
              });
          });

          // This test looped through each feed and determines that each
          // feed has a name and not empty.
         it('name is defined and not empty', function() {
          allFeeds.forEach(function(feed) {
              expect(feed.name).toBeDefined();
              expect(typeof feed.name).toEqual('string');
              expect(feed.name.length).toBeGreaterThan(0);
          });
      });
    });


    // Menu test suite.
      describe('The menu', function() {

          // This test ensures the menu element is hidden by default.
          it('is hidden by default', function() {
              expect($('body').hasClass('menu-hidden')).toBe(true);
          });

          // This test validates proper functioning of the menuicon menu toggle.
          it('changes visibility when icon clicked', function() {
              var menuicon = $('.menu-icon-link');

              // This tests for menu display.
              menuicon.click();
              expect($('body').hasClass('menu-hidden')).toBe(false);

              // This tests for menu hide.
              menuicon.click();
              expect($('body').hasClass('menu-hidden')).toBe(true);
          });
      });

      // Initial entries test suite.
      describe('Initial Entries', function() {
           /* Ensure that when the loadFeed function is called and completes its work,
           * there is at least a single .entry element within the .feed container.
           */
           beforeEach(function(done) {
             loadFeed(0, done);
           });

           it('has at least one entry', function(done) {
             var listLength = $('.feed .entry').length;
             expect(listLength).not.toBe(0);
             done();
           });
      });

      describe('New Feed Selection', function() {

          // tests that new content is loaded by loadFeed().
          var feedOne;
          var feedTwo;

          beforeEach(function(done) {
              loadFeed(0, function() {
                  feedOne = $('.feed').html();
                  done();
              });
          });

          it('should change feed content after loading feed', function(done) {
              loadFeed(1, function() {
                  feedTwo = $('.feed').html();
                  expect(feedTwo).not.toEqual(feedOne);
                  done();
              });
          });
      });
}());
