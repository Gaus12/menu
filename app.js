const upload = require('express-fileupload');
const express = require('express'),
        fs = require('fs'),
        app = express();
app.use(upload());
app.post('/upload',function(req, res) {
    const file = req.files.file;
    const filename = file.name;
    file.mv(__dirname+'/uploads/'+filename,(err)=>{
        if(err){
        res.send(err)}
        else{
            res.send("Success");
        }
    })

	
})
	app.get('/:filename', function (req, res) {
        console.log(req.params.filename);
        var filePath = "/uploads/" + req.params.filename+".pdf";

        fs.readFile(__dirname + filePath , function (err,data){
            res.contentType("application/pdf");
            console.log(data);
            res.send(data);
        });
    });
const port = process.env.PORT || 3000
    app.listen(port, function(){
        console.log('Listening on 3000');
    });