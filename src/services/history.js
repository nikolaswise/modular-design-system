const createHistory = window.History.createBrowserHistory


const history = createHistory({
  basename: '/',
});

export default history;
