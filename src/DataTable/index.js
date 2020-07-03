import React from 'react'
import moment from 'moment'








function DataTable(props){
  
    return (
   <table className ="table responsive">
  <thead>
    <tr>
      <th>Image</th>
      <th type="button" onClick={props.sorted}>Name</th>
      <th>Phone</th>
      <th>Email</th>
      <th>DOB</th>
    </tr>
  </thead>
  <tbody>
      {props.employeeList.length>0? props.employeeList.map(employee=>{
          return(
            <tr>
            <td><img src={employee.picture.thumbnail} alt="employee"/></td>
            <td>{employee.name.first+" "+employee.name.last}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
            <td>{moment(employee.dob.date,"YYYY-MM-DD").format("MM-DD-YYYY")}</td>
        </tr>
          )
      }) : "" }
  
  </tbody>
  </table>

    
    )
}


export default DataTable