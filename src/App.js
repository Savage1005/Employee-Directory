import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import DataTable from './DataTable'
import Api from './Utils/Api'
import SearchNames from './SearchNames'

class App extends Component {
  state = {
    employeeList:[],
    sortDirection: 1,
    searchName: "",
    originalList: []
  }

componentDidMount(){
Api.getEmployee().then(employee=>{
  this.setState({
    employeeList:employee.data.results,
    originalList:employee.data.results
  })
})
 }

 sorted = ()=>{
 
  const newEmployeeList=  this.state.employeeList.sort((a , b) => {
  if (this.state.sortDirection === 1){
    this.setState({sortDirection:0})
    return a.name.first.localeCompare(b.name.first)

  }else {
    this.setState({sortDirection: 1})
    return b.name.first.localeCompare(a.name.first)
  }
  })

  this.setState({employeeList: newEmployeeList})

}
handleChange=event=>{
        const {name,value}=event.target

        this.setState({
          [name]:value
        })

        console.log(value)
        const newEmployeeList=this.state.originalList.filter(employee=>{
          return employee.name.first.toLowerCase().includes(value.toLowerCase())
        })
        this.setState({employeeList:newEmployeeList})
}
render(){
    return (
    <>
    <div className= "container text-center bg-info text-light">
    {console.log (this.state.employeeList)}
    <Header />
    <SearchNames handleChange={this.handleChange} searchName={this.state.searchName}/>
    <DataTable  employeeList={this.state.employeeList} sorted ={this.sorted} />
    </div>
    </>
  );
 }
}

export default App;
