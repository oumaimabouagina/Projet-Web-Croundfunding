const projectModule= { creat, getProjectById, getProjectByName,getProjectByType,getProject, update, deleted } = require("../model/project");
module.exports = {
    creatProject: (req, res) => {
        projectModule.creat(req.body, message =>{res.json({success : true, message})})
    },
    getProjectByIdd: (req, res) => {
        const id = req.params.id;
        projectModule.getProjectById(id, (result, err) => {
            if (err) {
                console.log("there is no")
                return;
            }
            res.json(result)
        })
    },
    getProjectByName1: (req, res) => {
       /* const name = req.params.name;
        projectModule.getProjectByName(name, (result, err) => {
            if (err) {
                console.log("there is no")
                return;
            }
            res.json(result)
        })*/
        projectModule.getProjectByName(req.params.name, result =>{res.json(result)})
    },

    getProjectByType1: (req, res) => {
        /* const name = req.params.name;
         projectModule.getProjectByName(name, (result, err) => {
             if (err) {
                 console.log("there is no")
                 return;
             }
             res.json(result)
         })*/
         projectModule.getProjectByType(req.params.catego, result =>{res.json(result)})
     },
    /*getProjects: (req, res) => {
        getProject((err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.status(200).json({
                message: "getting all projects",
                data: result
            });
        });
    }*/
    getProjects: (req, res) => {
        projectModule.getProject((result) => { res.json({ success: true, result }) })
    },

    projectupdate: (req, res) => {
        //if (!req.userid)
        //  return res.status(400).json({ success: false, message: "Access denied, please login." })
        projectModule.update(req.params.id, req.body, result => { res.json({ success: true, result }) })
    },

    DeleteProject: (req, res) => {
        /// if (!req.userid)
         //   return res.status(400).json({ success: false, message: "Access denied, please login." })
         projectModule.deleted(req.params.id, result => { res.json({ success: true, result }) })
     }


}