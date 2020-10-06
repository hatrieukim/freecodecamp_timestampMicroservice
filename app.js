const express = require('express');         
const app = express();

app.get('/date/:date', (req, res) => {
    const param = req.params.date;
    let date;
    if(param == 'today') date = new Date();  
    else date = new Date(param);
    res.json({'unix': date.getTime(), 'utc': date.toUTCString()});
})


app.listen(3000, () => {
    console.log('Server started hehe')
});