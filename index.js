
var fs = require('fs')
module.exports = hasChangedSince

function hasChangedSince(file,fileOrTime,cb){

  var fileTime, cmpTime

  function done(){
    if(fileTime && cmpTime) {
      cb(false,fileTime < cmpTime)
    }
  } 
  
  fs.stat(file,function(err,stat){
    if(err) return cb(err,true)

    fileTime = Date.parse((stat||{}).mtime||0)


    done()
  })

  if(typeof fileOrTime === 'number') return (cmpTime = fileOrTime)
  
  fs.stat(fileOrTime,function(err,stat){
    if(err) return cb(err)
    cmpTime = Date.parse((stat||{}).mtime||0)
    done()
  }) 

}


