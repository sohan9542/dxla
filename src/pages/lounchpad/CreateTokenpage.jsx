import React from 'react'
import CreateToken from '../../component/CreateToken'
import Trending from '../../component/Trending'

const CreateTokenpage = () => {
  return (
    <div className=' w-full lg:p-4'>
    
      <div className='  flex items-start'>
        <Trending/>
     <div className=' w-full'>
     <CreateToken/>
     </div>
      </div>
    
    </div>
  )
}

export default CreateTokenpage