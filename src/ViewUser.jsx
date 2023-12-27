import React from 'react'
import { useSelector } from 'react-redux'

function ViewUser() {


  const selectedUser = useSelector((state) => state.app.selectedUser)

  return (
    <div className='container-fluid view-container'>
      <div className='col-lg-4 view-cart'>
        <h3 className='heading'>Name :
          <span className='span-content ml-2'>{selectedUser.username}</span>
        </h3>

        <h5 className='heading-content'>Email Id :
          <span className='span-email-content ml-4'> {selectedUser.email}</span>
        </h5>

        <h5 className='heading-content'>Address :
          <span className='span-content'> {` ${selectedUser.address.street}, ${selectedUser.address.suite}, ${selectedUser.address.city}, ${selectedUser.address.zipcode}`}</span>
        </h5>
        <h5 className='heading-content'>Phone Number :
          <span className='span-content'>{selectedUser.phone}</span>
        </h5>

        <h5 className='heading-content'>Website :
          <span className='span-content'> {selectedUser.website}</span>
        </h5>

        <h5 className='heading-content'>Company Name :
          <span className='span-content'> {selectedUser.company.name}</span>
        </h5>

        <h5 className='heading-content'>Catch phrase :
          <span className='span-content'> {selectedUser.company.catchPhrase}</span>
        </h5>

        <h5 className='heading-content'>BS :
          <span className='span-content'>{selectedUser.company.bs}</span>
        </h5>
      </div>
    </div>
  )
}

export default ViewUser