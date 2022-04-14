const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log('database connect successfully');
    })
    .catch((err)=>{
        console.log(err);
    })