import React from "react";
import { Accordion, Card, ListGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import HomepageService from "../../Services/HomePageService";
import { Link } from "react-router-dom";

var NoticeCard = () => {
  const [notice, setNotice] = useState([]);

  useEffect(() => {
    HomepageService.getNotice()
      .then((result) => {
        console.log("result.data", result.data);
        setNotice(result.data);
      })
      .catch((err) => {
        console.log("err occured", err);
      });
  }, []);

  //write a code to delete the notice with id
  const handleDelete = (id) => {
    HomepageService.deleteNotice(id)
      .then((result) => {
        console.log("result.data", result.data);
        setNotice(result.data);
      })
      .catch((err) => {
        console.log("err occured", err);
      });
  };

  return (
    <>
      {/* add a code to disply notice in table with id,title,description,date 
      with edit and delete button and also add a new notice button 
      with a form to add new notice 
      and form to edit notice
      with proper validation 
      and also add a search button to search notice by title
      and also add a search button to search notice by date
      and also add a search button to search notice by description
      and also add a search button to search notice by id
      and with proper grid system 

      */}
      <div className="row mt-4">
        <div className="col-md-3">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Date</th>
                <th>User</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {notice.map((notice) => (
                <tr>
                  <td>{notice.id}</td>
                  <td>{notice.title}</td>
                  <td>{notice.description}</td>
                  <td>{notice.date}</td>
                  <td>{notice.user}</td>
                  <td>
                  <Link className="btn btn-info" to={`/notice/edit/${notice.id}`}>Update</Link>
                  </td>
                  <td>
                  <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(notice.id);
                  }}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/notice/add">
            <div className="text-right">
              <button type="button" name="btn" className="btn btn-primary">
                {" "}
                Add New Notice
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default NoticeCard;
