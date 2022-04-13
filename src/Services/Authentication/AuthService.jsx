import axios from "axios";
import httpClient from "../http-common";
const baseUrl2 = "http://localhost:9080/api/signin";
const baseUrl1 = "http://localhost:9080/student/";
const baseUrl3 = "http://localhost:9080/teacher/";
const baseUrl4 = "http://localhost:9080/admin/";
const baseUrl = "http://localhost:9070/api/homepage/";
const baseUrl5 = "http://localhost:9080/";
const baseUrl9 = "http://localhost:9080/api/";
const baseUrl90 = "http://localhost:9090/";
const baseUrl8 = "http://localhost:9080/api/timetable/";
const baseUrl10 = "http://localhost:9080/api/marks/getparticular/DAC/1/8";
const baseUrl11 = "http://localhost:9080/api/marks/getall/DAC/1/java";
const baseUrl12 = "http://localhost:9080/api/marks/getAllExam";
const baseUrl13 = "http://localhost:9080/api/marks/addExam";
const baseUrl14 = "http://localhost:9080/api/marks/addmarks";
const baseUrl15 = "http://localhost:9080/api/marks/getparticular/";

class AuthService {
  // login(user) {
  //   return httpClient.post('', user);
  // }

  login(user) {
    return axios.post(baseUrl2, user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  //write signup
  signup(user) {
    return axios.post(baseUrl9 + "signup", user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  // login(user) {
  //   return axios.post(
  //     baseUrl,
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body:{
  //         email:"akash@gmail.com",
  //         password:"1234567"
  //     },

  //     }
  //   );
  // }
  // login(user) {

  //   // body: JSON.stringify({ username, password })
  //   const email = user.email;
  //   console.log(email);
  //   const  password= user.password;
  //   return axios.post(
  //     baseUrl ,
  //     // { user },
  //     {
  //      // credentials: 'include',
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email, password }),
  //     }
  //   );
  // }

  getTimeTable() {
    return axios.get(baseUrl8 + "getall");
  }

  getMyAllResults() {
    console.log("getMyAllResults");
    return axios.get(baseUrl10);
  }
  getMyAllResults(cls,examId,rollNo) {
    console.log("getMyAllResults");
    return axios.get(baseUrl15+cls+"/"+examId+"/"+rollNo);
  }
  getMyAllResultsadmin() {
    console.log("getMyAllResults");
    return axios.get(baseUrl11);
  }
  getAllExam() {
    console.log("getAllExam");
    return axios.get(baseUrl12);
  }
  addExam(exam) {
    console.log("addExam");
    return axios.post(baseUrl13, exam);
  }

  addResult(result) {
    console.log("addResult");
    return axios.post(baseUrl14, result);
  }

  getMyAllSubjects() {
    return axios.get(baseUrl + "getMyAllSubjects");
  }
  getStudentAsperCourseAndBatch(course, batch) {
    var tocken = JSON.parse(localStorage.getItem("User_info"));
    return axios.get(
      baseUrl90 + "getStudentAsperCourseAndBatch" //+ "/" + course + "/" + batch
      ,
      {
        headers: {
          "Content-Type": "application/json",
         // Authorization: "Bearer " + tocken.jwt,
        },
      }
    );
  }

  getStudentAsperCourse(course) {
    var tocken = JSON.parse(localStorage.getItem("User_info"));
    return axios.get(
      baseUrl9 + "getStudentAsperCourseAndBatch" + "/" + course,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + tocken.jwt,
        },
      }
    );
  }
  getProfileByID(id) {
    return axios.get(baseUrl + "getProfileByID/");
  }

  updateProfile(std) {
    console.log(localStorage.getItem("User_info"));
    console.log(JSON.parse(localStorage.getItem("User_info")));
    var tocken = JSON.parse(localStorage.getItem("User_info"));
    console.log(tocken.jwt);

    return axios.post(baseUrl1 + std.email + "/profile", std, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + tocken.jwt,
      },
    });
  }

  updateProfileTeacher(std) {
    console.log(localStorage.getItem("User_info"));
    console.log(JSON.parse(localStorage.getItem("User_info")));
    var tocken = JSON.parse(localStorage.getItem("User_info"));
    console.log(tocken.jwt);

    return axios.post(baseUrl3 + std.email + "/profile", std, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + tocken.jwt,
      },
    });
  }
  updateProfileAdmin(std) {
    console.log(localStorage.getItem("User_info"));
    console.log(JSON.parse(localStorage.getItem("User_info")));
    var tocken = JSON.parse(localStorage.getItem("User_info"));
    console.log(tocken.jwt);

    return axios.post(baseUrl4 + std.email + "/profile", std, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + tocken.jwt,
      },
    });
  }
}
export default new AuthService();
