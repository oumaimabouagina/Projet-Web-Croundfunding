const con = require("../config/db");
module.exports = {
    creat: async(data, next) => {
        con.query(
            `insert into project(name,typeObject, description, object, datestart,datefinish,catego) values (?,?,?,?,?,?,?)`, [data.name, data.typeObject, data.description, data.object, data.datestart, data.datefinish,data.catego],
            (error, result, fields) => {
                if (error) throw error;
                next(result)
            }
        );
    },
    getProjectById: async(id, next) => {
        con.query(
            `select * from project where id=?`, [id],
            (error, result, fields) => {
                if (error) throw error;
                next(result[0]);
            }

        );
    },

    getProjectByName: async(name, next) => {
        
           let sql = `select * from project where name=?`
           con.query(sql, name,(error, result) => {
                if (error) throw error;
                next(result);
            }

        );
    },

    getProjectByType: async(catego, next) => {
        
        let sql = `select * from project where catego=?`
        con.query(sql, catego,(error, result) => {
             if (error) throw error;
             next(result);
         }

     );
 },
   
    getProject: async(next) => {
            let sql =   `select * from project`
            con.query(
                sql, (err, result) => {
                    if (err) throw err;
                    next(result)
            });

    },

    update: async(id, { name, typeObject, description, object, datestart, datefinish }, next) => {
        let sql = `update project SET name=?, typeObject=?, description=?, object=?, datestart=? , datefinish=? , catego=? where id=?`
        con.query(sql, [name, typeObject, description, object, datestart, datefinish, catego,id], (err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    deleted: async(id, next) => {
        let sql = `delete from project where id=${id}`
        con.query(sql, (err, result) => {
            if (err) throw err;
            next(result)
        })
    }
}