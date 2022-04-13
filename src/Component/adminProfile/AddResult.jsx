import React from "react";
import AuthService from "../../Services/Authentication/AuthService";

class AddResult extends React.Component {
    //create constructor for below fields
    constructor(props) {
        super(props);
        //write astate for result
        //cls , subject,date,examId,rollNo,obt_marks,total,remark
        this.state = {
            cls: "",
            subject: "",
            date: "",
            examId: "",
            rollNo: "",
            obt_marks: "",
            total: "",
            remark: "",
            
        };

        //bind all the functions
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    //create onchange function
    onChange(e) {
        //set state with name and value of input field
        this.setState({ [e.target.name]: e.target.value });
    }

    //create onsubmit function
    onSubmit(e) {
        //prevent default behaviour of form
        e.preventDefault();
        //call authservice to add result
         //if empty then show error message
        if (
            this.state.cls === "" ||
            this.state.subject === "" ||
            this.state.date === "" ||
            this.state.examId === "" ||
            this.state.rollNo === "" ||
            this.state.obt_marks === "" ||
            this.state.total === "" ||
            this.state.remark === ""
        ) {
            alert("Please fill all the fields");
        } else {
            const result = {
                cls: this.state.cls,
                subject: this.state.subject,
                date: this.state.date,
                examId: this.state.examId,
                rollNo: this.state.rollNo,
                obt_marks: this.state.obt_marks,
                total: this.state.total,
                remark: this.state.remark,
            };
            console.log(result);
            //call authservice to add result
        AuthService.addResult(result)
            .then((result) => {
                console.log(result);
                //if result is added then show success message
                alert("Result added successfully");
                //if result is successfull then redirect to login page
               // this.props.history.push("/adminProfile");
            })
            .catch((err) => {
                console.log(err);
            }
        );
        



       
        
        }
    }

    render() {
        return(
        <>





<h2>Add Student Marks</h2>
   
      <form>
        <div className="form-group">
                        <input type="text" className="form-control" placeholder="cls"
                            name="cls"
                            value={this.state.cls}
                            onChange={this.onChange}

        
          />
                        <input type="text" className="form-control" placeholder="subject"
                        
                            name="subject"
                            value={this.state.subject}
                            onChange={this.onChange}
                        />
                        <input type="date" className="form-control" placeholder="date"
          
                            name="date"
                            value={this.state.date}
                            onChange={this.onChange}

                        />
                        <input type="text" className="form-control" placeholder="examId"
          
                            name="examId"
                            value={this.state.examId}
                            onChange={this.onChange}
                        />

                        <input type="text" className="form-control" placeholder="Roll No"

                            name="rollNo"
                            value={this.state.rollNo}
                            onChange={this.onChange}
                        />

                        <input type="text" className="form-control" placeholder="obt_marks"

                            name="obt_marks"
                            value={this.state.obt_marks}
                            onChange={this.onChange}
                        />
                        <input type="text" className="form-control" placeholder="total"

                            
                            name="total"
                            value={this.state.total}
                            onChange={this.onChange}
                            
                        />
                        <input type="text" className="form-control" placeholder="remark"
                        
                            name="remark"
                            value={this.state.remark}
                            onChange={this.onChange}

                        />

<button
            className="btn btn-primary"
            type="button"
            onClick={this.onSubmit}
          >
            Submit
          </button>
        </div>
                </form>
                </>
        )
    }
}


export default AddResult;