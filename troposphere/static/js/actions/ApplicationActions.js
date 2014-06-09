define(
  [
    'dispatchers/AppDispatcher',
    'constants/ApplicationConstants'
  ],
  function (AppDispatcher, ApplicationConstants) {

    var ApplicationActions = {
      constants: {
        fetchDetail: 'application_fetch_detail',
        fetchAll: 'application_fetch_all',
        search: 'application_search'
      },

      fetch: function (appId) {
        AppDispatcher.handleRouteAction({
          actionType: this.constants.fetchDetail,
          id: appId
        });
      },

      fetchAll: function () {
        AppDispatcher.handleRouteAction({
          actionType: this.constants.fetchAll
        });
      },

      search: function (query) {
        AppDispatcher.handleRouteAction({
          actionType: this.constants.search,
          query: query
        });
      },

      toggleFavorited: function (application) {
        AppDispatcher.handleRouteAction({
          actionType: ApplicationConstants.APPLICATION_TOGGLE_FAVORITED,
          application: application
        });
      }
    };

    return ApplicationActions;
  });
