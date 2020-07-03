import React  from 'react'

 function SearchNames (props){
     return (
         <>
           Search for Employee by name: <input type= "text" name="searchName" value={props.searchName} onChange={props.handleChange}/>
         </>
     )
 }


export default SearchNames