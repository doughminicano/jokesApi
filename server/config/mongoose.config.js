const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/jokes', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(() => console.log("You in the Mainframe..."))
    .catch(err => console.log("ERROR! ABORT! MELTDOWN! DANGER! YOU MESSED UP! ERROR!", err))