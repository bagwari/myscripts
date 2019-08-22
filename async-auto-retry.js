
const {retry, auto} = require('async');
auto({
    get_data:  (callback) => {
        console.log('in get_data');     
        
        retry( {times: 2, interval: 2000}, 
                (cb)=>{
                    test().then(v=> {
                            cb(null, v);
                    }).catch(err=> cb(err, null))
                },
            (err, results) => {
                if(err) {
                    callback(err, null)
                } else{
                    callback(null, results)
                }
            })
    },
    write_file: ['get_data', (results, callback) =>{
        console.log('in write_file', JSON.stringify(results));
        
        callback(null, 'filename');
    }]
}, (err, results) =>{
    console.log('===========================');
    console.log('err = ', err);
    console.log('results = ', results);
});

function test(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('---wait 5---')
            reject('SOme error')
            //resolve('file data')
        },5000)
        
    })
       
}
