import React, { useState, useRef, Suspense } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber';

import Loader from '../components/Loader'

import Spongebob from '../models/Spongebob'
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('Breathing Idle');

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('Standing Jump');

    console.log(import.meta.env.
      VITE_APP_EMAILJS_SERVICE_ID)

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name:"Jae",
        from_email: form.email,
        to_email:'jaejackson18jj@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      showAlert({ show: true, text: 'Message sent successfully!', type: 'success' });
      
      setTimeout(() => {
          hideAlert();
          setCurrentAnimation('Breathing Idle');
          setForm({ name: '', email: '', message: '' });
        }, 3000);

      setForm({ name: '', email: '', message: '' });
    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation('Breathing Idle');
      console.log(error);
      showAlert({ show: true, text: "I didn't receive your message. Try again?", type: 'danger' });
    });
  };

  const handleFocus = () => setCurrentAnimation('Walking');
  const handleBlur = () => setCurrentAnimation('Breathing Idle');


  return (
    <section className="relative flex lg:flex-row flex-col
    max-container">
      {alert?.show && <Alert {...alert} />}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch!</h1>

        <form 
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}>

{/* Form for Name */}
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              ></input>
          </label>
{/* Form for Email */}
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="john@email.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              ></input>
          </label>
{/* Form for Message */}
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Let me know how I can help you!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              ></textarea>
          </label>
          <button
          type="submit"
          className="btn"
          disable={isLoading}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
            {isLoading ? 'Sending...' : 'Send Message!'}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px]
       h-[350px]">


        <Canvas
          camera={{ 
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight 
          intensity={13.5} 
          position={[0, 0, 1]} />

          <Suspense fallback={<Loader />}>
            <Spongebob 
              currentAnimation={currentAnimation}
              position={[0.5, -3, 0]}
              rotation={[12.6, -0.5, 0]}
              scale={[4, 4, 4]}
            />
          </Suspense>

        </Canvas>

      </div>
    </section>
  )
}

export default Contact