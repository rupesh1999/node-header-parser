const express = require('express');
let port = 3000;
let app = express();

app.get("/" , (req , res) => {
    var object = {
        IpAddress: req.rawHeaders[1],
        language: req.rawHeaders[15],
        software: req.rawHeaders[9]
    }
    console.log(req);
    res.send(object);
});

app.listen(port , () => {
    console.log(`server started at port ${port}`);
})