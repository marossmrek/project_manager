const {Base} = require('../config/database');

class Project extends Base {

    static async findById(id) {
        return await this.query().where({id: id}).limit(1).first();
    }

    static async insertProject(newProject) {
        return await this.query().insert(newProject);
    }

}

module.exports.Project = Project;