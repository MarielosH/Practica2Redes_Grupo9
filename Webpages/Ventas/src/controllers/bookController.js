const controller = {};

controller.list = (req,res)=>{

    res.render("home");
    //res.send("desde el controlador")
}

module.exports = controller;