import React, { useState } from 'react'

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  }
  return (
    <div className='contact-container flex justify-evenly mt-8 md:flex-col,justify-center'>
      <div className='contact-left mt-5 w-1/4 md:w-1/4'>
        <img src='https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?w=2000' alt='' />
      </div>
      <div className='contact-right flex-col mt-10'>
        <h1 className='text-xl mb-4' >Contact us</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" placeholder="Name" required className='text-xl border mb-4 p-2 w-96 ' />
          </div>
          <div className=' email border-slate-800'>
            <input type="email" placeholder="Email"  required className='text-xl border mb-4 p-2 w-96' />
          </div>
          <div>
            <textarea placeholder="Type your Message here..." required className='text-xl border mb-4 w-96 p-2'></textarea>
          </div>
          <button type="submit" className='text-xl border p-2 w-24 bg-slate-400'>Submit</button>
          {message && <span className='text-xl text-orange-800'>Thanks for contacting FoodVilla, We will reply ASAP.</span>}
        </form>
      </div>
    </div>
  )
}

export default Contact