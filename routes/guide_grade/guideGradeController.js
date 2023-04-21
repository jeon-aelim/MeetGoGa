const guideGradeService = require('./guideGradeService');

module.exports = {

    makeGrade : (req, res) => {
        const body = req.body;

        guideGradeService.makeGrade(body)
        .then(result => {
            let obj = {};
            if(result){
                obj['makeGrade'] = result;
                obj['suc'] = true;
                res.send(obj);
                console.log('makeGrade is succeed');
            }else{
                obj['suc'] = false;
                obj['err'] ='makeGrade is failed';
                res.send(obj);
            }
        })
    },

    
    reqGrade : (req, res) => {
        const gradeID = req.params.guide_grade_id;
        guideGradeService.reqGrade(gradeID)
        .then(result => {
            let obj = {};
            if(result) {
                obj['reqGrade'] = result;
                obj['suc'] = true;
                res.send(obj);
                console.log("reqGrade is succeed");
            } else {
                obj['suc'] = false;
                obj['err'] ="reqGrade is failed";
                res.send(obj);
            }
        })

    }
}