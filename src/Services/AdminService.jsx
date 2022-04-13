import axios from "axios";
//const baseUrl = "http://localhost:9090/";
const baseUrl = "http://localhost:9080/api/homepage/";
const baseUrl5 = "http://localhost:9090/";
const baseUrl8 = "http://localhost:9080/api/timetable/";
const baseUrl9 = "http://localhost:9080/api/mark/";

class AdminService {
  getAll() {
    return "";
  }

  create(data) {
    return "";
  }

  get(id) {
    return "";
  }

  update(data) {
    return "";
  }

  remove(id) {
    return "";
  }
  removetimetable(id) {
    return axios.delete(baseUrl8 + "deletetimetable/" + id);

  }
  addtimetable(data) {
    return axios.post(baseUrl8 + "addTimeTable", data);
  }
  gettimetable(id) {
    return axios.get(baseUrl8 + "getbyid/" + id);
  }






}
export default new AdminService();
