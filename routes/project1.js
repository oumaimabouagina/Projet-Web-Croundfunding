const router3 = require("express").Router();
const { creatProject, getProjectByIdd, getProjectByName1,getProjectByType1,getProjects, projectupdate,DeleteProject } = require("../controller/controlproject");
router3.post("/", creatProject);
router3.get("/:id", getProjectByIdd);
router3.get("/name/:name",getProjectByName1);
router3.get("/catego/:catego",getProjectByType1);
router3.get("/", getProjects);
router3.put('/:id', projectupdate);
router3.delete('/:id',  DeleteProject)
module.exports = router3;