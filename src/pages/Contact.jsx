import React from 'react'
import {useState} from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  //useState from all variables
  const [IsLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState({name: '',email: '',message: ''});

  //handling the variable changes 
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      'service_kelthtc',
      'template_kopv9x8',
      {
        from_name: form.name,
        to_name: "Brian",
        from_email: form.email,
        to_email: "brianodero7537@gmail.com",
        message: form.message
      },
      'dbL95hzuGrogAxStW'
    ).then(() => {
      setIsLoading(false);
      //clearing all the form conttent 
      setForm({name: '', email: '', message: ''});
  
    }).catch((error) => {
      setIsLoading(false);
      console.log(error);
  
    });
  };

  //handles fox movement on focusing on the input field 
  const handleFocus = () => {};
  const handleBlur = () => {};

  
  



  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>GET IN TOUCH</h1>

        <form className='w-full flex flex-col gap-7 mt-14'
        onSubmit={handleSubmit}>

          <label className='text-black-500 font-semibold'>Name
            <input
              type='text'
              name='name'//value that wil be collected
              className='input'
              placeholder='Enter Your Name'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className='text-black-500 font-semibold'>Email
            <input
              type='text'
              name='email'//value that wil be collected
              className='input'
              placeholder='Enter Your Email'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className='text-black-500 font-semibold'>Write your Message
            <textarea
              name='message'//value that wil be collected
              className='textarea'
              rows={3}
              placeholder='let Me Know How I can Help You'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button 
          className='btn' 
          type="submit"
          disabled={IsLoading}
          >
            {IsLoading? 'Sending......' : 'Press to send message'}
          </button>

  

        </form>
      </div>

    </section>
  )
}

export default Contact