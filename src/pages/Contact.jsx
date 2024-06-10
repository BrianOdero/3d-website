import React, { Suspense } from 'react'
import {useState} from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'
import fox, { Fox } from '../models/fox'
import Loader from '../components/Loader'

const Contact = () => {
  //useState from all variables
  const [IsLoading, setIsLoading] = useState(false)
  const [CurrentAnimation, setCurrentAnimation] = useState('idle')
  const [form, setForm] = useState({name: '',email: '',message: ''});

  //handling the variable changes 
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');
    
    //email API
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

      setTimeout(() => {
        setCurrentAnimation('idle');
        setForm({name: '', email: '', message: ''});
        }, [1000]);
    
    }).catch((error) => {
      setIsLoading(false);
      console.log(error);
      setCurrentAnimation('sad');
  
    });
  };

  //handles fox movement on focusing on the input field(additional animations)
  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');

  
  



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
      
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas camera={{position: [0,0,5],fov: 75,near:0.1,far:1000}}>
            <directionalLight intensity={2.5} position={[0,0,1]}/>
            <Suspense fallback={<Loader/>}>
            <ambientLight intensity={0.5}/>
            
              <Fox
                currentAnimation={CurrentAnimation}
                position={[0.5,0.35,0]}
                rotation={[12.6,-0.6,0]} 
                scale={[0.5,0.5,0.5]}/>

            </Suspense>
        </Canvas>
      </div>

    </section>
  )
}

export default Contact