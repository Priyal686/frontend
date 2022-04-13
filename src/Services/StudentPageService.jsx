import axios from "axios";
//const baseUrl = "http://localhost:9090/";
const baseUrl = "http://localhost:9090/student/";
class StudentPageService {
    getAttendance() {
        return axios.get(baseUrl + "getAttendance");
        //write the sample data which will come from server and return
        // const data = [
        //     {
        //         Date: "123",
        //         Attendance: "present",
        //     },
        // ];
        // return data;

    }
  }
  export default new StudentPageService();