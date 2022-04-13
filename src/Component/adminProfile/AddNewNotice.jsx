import React from "react";
import { useEffect, useState } from "react";

import { Link, useHistory, useParams } from "react-router-dom";
import HomepageService from "../../Services/HomePageService";

//write a code to display notice form with id,title,description,date,user
//if the id is given then it will display the notice with that id

var NoticeAdd = () => {
    const [notice, setNotice] = useState([]);
    //if the id is given then it will display the notice with that id
    const { id } = useParams();
    const history = useHistory();
    useEffect(() => {
        console.log("id", id);
        if (id) {
            HomepageService.getNoticeById(id)
                .then((result) => {
                    console.log("result.data", result.data);
                    setNotice(result.data);
                })
                .catch((err) => {
                    console.log("err occured", err);
                });
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const obj = {};
        data.forEach((value, key) => {
            obj[key] = value;
        });
        if (id) {
            console.log("obj", obj);
            HomepageService.updateNotice(obj,id)
            .then((result) => {
                console.log("result.data", result.data);
                history.push("/admin/notice");
            })
            .catch((err) => {
                console.log("err occured", err);
            });
        } else {
            console.log("obj", obj);
            HomepageService.addNotice(JSON.stringify(obj))
            .then((result) => {
                console.log("result.data", result.data);
                history.push("/admin/notice");
            })
            .catch((err) => {
                console.log("err occured", err);
            });
        }
    };

    return (
        <>
           
                <div className="col-md-3" >
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>ID</label>
                            <input
                                type="text"
                                className="form-control"
                                name="id"
                                value={notice.id}
                                readOnly
                            />
                        </div>
                        <div className="form-group">
                            <label>Title</label>
                            <input
                                type="text"
                                className="form-control"
                                name="title"
                            value={notice.title}
                            onChange={(e) => {
                                setNotice({ ...notice, title: e.target.value });
                            }}
                            />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input
                                type="text"
                                className="form-control"
                                name="description"
                            value={notice.description}
                            onChange={(e) => {
                                setNotice({ ...notice, description: e.target.value });
                            }}
                            />
                        </div>
                        <div className="form-group">
                            <label>Date</label>
                            <input
                                type="text"
                                className="form-control"
                                name="date"
                            value={notice.date}
                            onChange={(e) => {
                                setNotice({ ...notice, date: e.target.value });
                            }}
                            />
                        </div>
                        <div className="form-group">    
                            <label>User</label>
                            <input
                                type="text"
                                className="form-control"
                                name="user"
                            value={notice.user}
                            onChange={(e) => {
                                setNotice({ ...notice, user: e.target.value });
                            }}
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            
        </>
    );
};


export default NoticeAdd;


                   

                            

                            

                            
        

    
    