import React from 'react'
import Steps from '../../component/Steps'
import Trending from '../../component/Trending'

const CreateFairLaunch = () => {
  const steps = [
    {
      h1: "Verify Token",
      p:"Enter the token address and verify"
    },
    {
      h1: "DeFi Fairlaunch Info",
      p:"Enter the fairlaunch information that you want to raise , that should be enter all details about your pool"
    },
    {
      h1: "Add Additional Info",
      p:"Let people know who you are"
    },
    {
      h1: "Finish",
      p:"Review your information"
    },
  ]
  return (
    <div>
  <div className='flex items-start mt-20 w-full'>
  <Trending/>
     <div className='w-full  pb-2'>
     <Steps steps={steps}/>
     </div>
  </div>
 
     <div className=' w-full flex items-center justify-center pt-4'>
<p className=' text-center text-sr  w-3/4 font-light'>Disclaimer: The information provided shall not in any way constitute a recommendation as to whether you should invest in any product discussed. We accept no liability for any loss occasioned to any person acting or refraining from action as a result of any material provided or published.</p>
     </div>
    </div>
  )
}

export default CreateFairLaunch