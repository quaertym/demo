import {
  module,
  test
} from 'qunit';
import startApp from '../helpers/start-app';
import Ember from 'ember';

var App;

module('Integration - Foo Tests', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Check route name', function(assert) {
  visit('/')
    .then(function() {
      assert.equal(currentURL(), '/');
    });
});
