import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import DataTable from './DataTable'
import Api from './Utils/Api'
class App extends Component {
  state = {
    employeeList:[]
  }

 componentDidMount(){
Api.getEmployee().then(employee=>{
  this.setState({
    employeeList:employee.data.results
  })
})
 }


  render(){
    return (
    <>
    {console.log (this.state.employeeList)}
    <Header />
    <DataTable  employeeList={this.state.employeeList} />
    </>
  );

  }
  
}

export default App;
