require(
  [
    'jquery',
    'react',
    'backbone',

    // test utilities
    'sinon',

    // component under test
    'components/Root.react'
  ],
  function ($, React, Backbone, sinon, Root) {

    // set up the stores the application will be using
    var mockProfile = new Backbone.Model({displayName: "testUser"});

    $(document).ready(function () {
      React.renderComponent(Root({
        profile: mockProfile,
        currentRoute: ["projects"]
      }), document.getElementById('application'));
    });

  });
