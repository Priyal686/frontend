import axios from "axios";
//const baseUrl = "http://localhost:9090/";
const baseUrl = "http://localhost:9080/api/homepage/";

class HomepageService {
  getNotice() {
    return axios.get(baseUrl + "getNotice");
  }
  getNoticeById(id) {
    return axios.get(baseUrl + "getNoticeById/" + id);
  }
  updateNotice(obj, id) {
    return axios.put(baseUrl + "updateNotice/" + id, obj);
  }
  addNotice(obj) {
    console.log("obj", obj);
    return axios.post(baseUrl + "addNotice", obj,
      {
        headers: {
          "Content-Type": "application/json",
        },
      });
   
  }
  deleteNotice(id) {
    return axios.delete(baseUrl + "deleteNotice/" + id);
  }

}
export default new HomepageService();
