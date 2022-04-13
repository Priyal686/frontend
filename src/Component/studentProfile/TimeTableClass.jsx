import React,{Component } from "react";
import AuthService from "../../Services/Authentication/AuthService";


class TimeTable extends React.Component{
    constructor(props){
       super(props);
       console.log("TimeTable constructor");
       this.state={
        ttable:[]
       }
    }
    //Whenever component get mouted this method will be called automatically
    //its lifecycle method chnage in state will rerender the component
    componentDidMount(){
      console.log("in TimeTable componentDidMount");
        AuthService.getTimeTable().then((response) => {
            console.log(this.state.ttable);
         this.setState({ttable:response.data})
        

      })
    }
    
   render(){
       console.log("in TimeTable render")
       return (<div>
           <div className="jumbotron">
      <div>
        <h2 className="text-center">Time Table</h2>

        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>DayandDate</th>
                <th>Module</th>
                <th>Faculty</th>
                <th>Venue</th>
                <th>Timing</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {this.state.ttable.map((day) => (
                <tr >
                  <td>{day.DayandDate}</td>
                  <td>{day.Module}</td>
                  <td>{day.Faculty}</td>
                  <td>{day.Venue}</td>
                  <td>{day.Timing}</td>
                  <td>{day.Description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
       </div>)
   }
}

export default TimeTable;
