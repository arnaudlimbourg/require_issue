# weird require issue

```
git clone
npm install -g httpster
npm install
# start automatic compilation of resources
npm start
# in another terminal start development server with PushState handling
httpster -s -p 9000
```

Navigate to localhost:9000


## The issue

When line 3 of js/actions/ServerActionCreators.js is commented out
object WebAPIutils line 7 in js/actions/SearchActionCreators.js is the
expected object.

When the code is executed though the object line 7 is empty.

Code is included

SearchActionCreators.js:7 Object {getAllItems: function, search: function}

Code is commented

 Object {}
SearchActionCreators.js:8 Uncaught TypeError: undefined is not a function

## File Structure

```
js
├── actions
│   ├── ApplicationActionCreators.js
│   ├── ItemActionCreators.js
│   ├── SearchActionCreators.js
│   └── ServerActionCreators.js
├── app.js
├── bundle.js
├── components
│   ├── App.react.js
│   ├── ItemList.react.js
│   ├── Search.react.js
│   ├── SearchInput.react.js
│   ├── SearchResults.react.js
│   └── SearchResultsItem.react.js
├── dispatcher
│   └── AppDispatcher.js
├── myrouter.js
├── routes.js
├── stores
│   ├── ItemStore.js
│   └── SearchStore.js
└── utils
    └── WebAPIUtils.js
```
