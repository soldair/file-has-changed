# file-should-change
check to see if a file has changed since another file has been changed. useful for refreshing cache files.


## EXAMPLE


```js

var shouldChange = require('file-should-change')

// all.json gets updated at an interval

// week.json it the last week of changes which i need to update each time all.json gets updated

shouldChange('week.json','all.json',function(err,shouldChange){
  
})

// you can also pass a unixtimestamp in ms as a number instead of another file.

shouldChange('week.json',number timestamp ,function(err,shouldChange){
  
})


```
