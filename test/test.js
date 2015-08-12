var test = require('tape')
var touch = require('touch')
var hasChanged = require('../')
var fs = require('fs')

test("can determine if the file should be changed",function(t){
  t.plan(4)

  var start = Date.now()

  var later;

  function example(){
    hasChanged(__dirname+'/a',__dirname+'/b',function(err,changed){
      t.equals(changed, true, ' b was created or changed after a was created') 
    })

    hasChanged(__dirname+'/b',__dirname+'/a',function(err,changed){
      t.equals(changed, false, "b's change is more recent than a's change.")
    })

    hasChanged(__dirname+'/a',start,function(err,changed){
      t.equals(changed, false, 'the start time is before a was changed') 
    })

    hasChanged(__dirname+'/a',later,function(err,changed){
      t.equals(changed, true, 'the later time is after a was created so a should change') 
    })

  }

  setTimeout(function(){  
    touch(__dirname+'/a',function(){
      setTimeout(function(){
        touch(__dirname+'/b',function(){
          example()
        })

        later = Date.now()

      },1000)
    })
  },1000)
})

