const imgService = require('./imgService');

module.exports = {

    img: (req,res)=> {
        const body = req.body;
        const image = req.file;
        const imageUrl = image.path;

        imgService.img(body, imageUrl)
        .then(result => {
            let obj = {};
            if(result){
                obj['img'] = result;
                obj['suc'] = true;
                res.send(obj);
                console.log('img is succeed');
            }else{
                obj['suc'] = false;
                obj['err'] ='img is failed';
                res.send(obj);
            }
        })
    }
}