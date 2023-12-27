import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUserFromList, setUserList, viewUserList } from './Redux/redux'
import { Link } from 'react-router-dom'


function UserList() {

//used redux method so dispath the action here

    const dispatch = useDispatch()

    const data = useSelector((state) => state.app)

//getting data from api to diaplay on table here get - read method is used

    const getData = async () => {
        try {
            const apiData = await axios.get("https://jsonplaceholder.typicode.com/users")
            dispatch(setUserList(apiData.data))
        } catch (error) {
            console.log(error)

        }
    }


    useEffect(() => {
        if (data.userLists.length === 0) {
            getData()
        }

    }, [])

//dispatch the action here for handle delete button

const handleDeleteUser=((userId)=>{
    dispatch(deleteUserFromList(userId))
})

//dispatch the action here for handle view button
const handleViewUser=((userId)=>{
    dispatch(viewUserList(userId))
})

    return ( <div className='container '>
        <div className='row'>
            <div className='col-lg d-flex justify-content-start'>
                <h3 className='text mt-4'>User Datas</h3>
            </div>
        <div className='col-lg d-flex justify-content-end'>
    <Link to={"/create-user"}><button className='btn btn-primary mt-4'>Create User</button></Link>
</div>
</div>
        <div className='row'>
        <div className='col  '>
        <table className="table table-striped mt-2 mb-5 p-3">
 <thead>
    <tr >
      <th scope="col">No.</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"> Address</th>
      <th scope="col"> Phone No.</th>
      <th scope="col"> Website</th>
      <th scope="col"> Company Name</th>
      <th scope="col"> Catch Phrase</th>
      <th scope="col"> BS</th>
      <th scope="col"> Action</th>
    </tr>

  </thead>
  <tbody> 
  {data.userLists.map((item)=>{
       return  <tr key={item.id} >

    <td>
 {item.id}
    </td>
    <td>
    {item.username}
        </td>
        <td>
        {item.email}
        </td>
        <td>
        {` ${item.address.street}, ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}`}
        </td>
        <td>
        {item.phone}
        </td>
        <td>
        {item.website}
        </td>
        <td>
        {item.company.name}
        </td>  
        <td>
        {item.company.catchPhrase}
        </td> 
        <td>
        {item.company.bs}
        </td> 
<td>
    <Link to="/view-user" onClick={()=>{handleViewUser(item.id)}}><button className='btn btn-info mt-4'>View</button></Link>
</td>
<td>
    <Link to={`/edit-user/${item.id}`}><button className='btn btn-warning mt-4'>Edit</button></Link>
</td>
<td>
    <Link to="/"><button className='btn btn-danger mt-4' onClick={()=>{handleDeleteUser(item.id)}}>Delete</button></Link>
</td>

</tr>
  }) }
 </tbody>
   

</table>
</div>

</div>
</div>
    )
}

export default UserList