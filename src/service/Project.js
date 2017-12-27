import axios from "axios";

export class Project {

    static async getAllProjects() {
        return await axios.get('http://localhost:5000/project');
    }

    static async insertNewProject(newProject) {
        return await axios.post(`http://localhost:5000/project`, newProject);
    }

    static async updateProjectById(id, newProjectValues) {
        return await axios.post(`http://localhost:5000/project/${id}`, newProjectValues);
    }

    static async deleteProjectById(id) {
        return await axios.delete(`http://localhost:5000/project/${id}`);
    }

}