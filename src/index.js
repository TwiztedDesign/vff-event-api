if(!window.vff) throw new Error('VFF is not defined');
let vff = window.vff;

const EXTENSION_NAME = 'eventApi',
      EVENT          = 'taco-event-query';


vff[EXTENSION_NAME] = {

    all : (cb) => {
        query('', cb);
    }
};

function query(q, cb){
    vff.request(EVENT, {
        query : q
    }, function(res){
        cb(res);
    });
}

