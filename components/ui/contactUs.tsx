import React from 'react';
import { motion } from 'framer-motion';
// import emailjs from '@emailjs/browser'
import { Mail, Phone, MapPin, Send, Smartphone, Clock, SendHorizonal, Sparkle } from "lucide-react";

// Toast
import { Flip, ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/ReactToastify.css'
// Notification

// contact form
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { FadeUp } from '@/app/page';


const contactSchema = z.object({
//   name: z.string().min(2, `Name must be at least 2 characters`),
//   email: z.email("Invalid email address"),
//   subject: z.string().min(5, "Message must be at least 5 characters"),
//   message: z.string().min(5, "Message must be at least 5 characters")
})


// Framer-motion
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
}



const Contact = () => {

  const  {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  })


// const onSubmit = async (data) => {
//   try {
//     const result = await emailjs.send(
//       'service_qvc4f3i',
//       'template_jtac926',
//       data,
//       'dDJBQ2m3Fu5Ha8woq'
//     );

//     if (result.status === 200) {
//       toast.success("Message sent successfully!", {
//         icon: <SendHorizonal className="w-5 h-5 text-white" />,
//       });
//       setTimeout(() => {
//         toast.success("I will respond within 24 hours.", {
//           icon: <Clock className="w-5 h-5 text-white" />,
//         });
//       }, 2000)
//       reset();
//     } else {
//       toast.error("Something went wrong. Please try again later.");
//     }
//   } catch (error) {
//     toast.error("Something might be wrong... please contact me on What'sApp");
//   }
// };


  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: 'ashimgab@gmail.com',
      link: 'mailto:ashimgab@gmail.com?subject=Project%20Inquiry&body=Hello%20AshimDev%20team,%0D%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      details: '+234 703 718 9416',
      link: 'tel:+2347037189416',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      details: 'Federal Capital Territory (F.C.T) Abuja, NIGERIA',
      link: 'https://maps.app.goo.gl/bJk6Y2kds7EWLV9J8?g_st=awb '
    }
  ];

  return (
    <section id="contact" className="scroll-mt-20 pt-5 pb-20 bg-white/10">
      <div className="container mt-10 mx-auto px-6">
        <FadeUp className="text-center mb-20">
          <h2 className="text-4xl xl:text-6xl font-black" style={{ fontFamily: 'Poppins, sans-serif', color: '#222', letterSpacing: '-0.02em' }}>
            CONTACT
            <span className='gradient-text'> US</span>
          </h2>
          <div className="w-16 h-0.5 gradient-bg mx-auto mt-5" />
          <p className="text-gray-500 mt-5 max-w-md mx-auto leading-relaxed text-sm">
            Have questions about our furniture collection, delivery, or custom orders? We'd love to hear from you.
          </p>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8">We're Here to Help</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  variants={fadeInAnimationVariants}
                  initial='initial'
                  whileInView='animate'
                  viewport={{
                    once: false
                  }}
                  custom={index}
                  className="relative flex items-center space-x-4 p-4 bg-slate-100 rounded-lg hover:bg-blue-50 transition-colors duration-300 group"
                >
                  <div className="p-3 gradient-bg text-white rounded-lg transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">{info.title}</h4>
                    <p className="text-slate-600">{info.details}</p>
                  </div>
                </motion.a>
              ))}
            </div>
            
            <motion.div 
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: false
            }}
            className="p-6 gradient-bg rounded-lg text-white">
              <h4 className="text-xl font-bold mb-2 flex justify-start items-center gap-2"><Sparkle size={20} /> Need Help Choosing Furniture?</h4>
              <p className="mb-4">Our team is ready to help you find the perfect furniture for your home or office.</p>
              <div className="text-sm opacity-90">
                🚚 Fast delivery and customer support available
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div>
            <form 
            //   onSubmit={handleSubmit(onSubmit)}
              className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  variants={fadeInAnimationVariants}
                  initial='initial'
                  whileInView='animate'
                  viewport={{
                    once: false
                  }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    <strong>Name</strong>
                  </label>
                  <input
                    id={'name'}
                    {...register('name')}
                    type="text"
                    className={`w-full outline-0 px-4 py-3 border rounded-lg focus:ring-2 transition-colors duration-200 ${errors.name ? 'focus:ring-red-500 border-red-500' : 'focus:ring-emerald-500 focus:border-emerald-500 border-emerald-500'}`}
                    placeholder="Your full name"
                  /> 
                  {/* {errors.name && <p className='text-sm text-red-500 mt-1'>{errors.name.message}</p>} */}
                  
                </motion.div>
                <motion.div
                  variants={fadeInAnimationVariants}
                  initial='initial'
                  whileInView='animate'
                  viewport={{
                    once: false
                  }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    <strong>Email</strong>
                  </label>
                  <input
                    id={'email'}
                    {...register('email')}
                    type="email"
                    className={`w-full outline-0 px-4 py-3 border rounded-lg focus:ring-2 transition-colors duration-200 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'focus:ring-emerald-500 focus:border-emerald-500 border-emerald-500'}`}
                    placeholder="your@email.com"
                  />
                  {/* {errors.email && <p className='text-sm text-red-500 mt-1'>{errors.email.message}</p>} */}
                </motion.div>
              </div>
              
              <motion.div
                variants={fadeInAnimationVariants}
                initial='initial'
                whileInView='animate'
                viewport={{
                  once: false
                }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  <strong>Furniture Type</strong>
                </label>
                <input
                  id={'subject'}
                  {...register('subject')}
                  className={`w-full outline-0 px-4 py-3 border rounded-lg focus:ring-2 transition-colors duration-200 ${errors.subject ? 'border-red-500 focus:ring-red-500' : 'focus:ring-emerald-500 focus:border-emerald-500 border-emerald-500'}`}
                  placeholder="What's this about?"
                />
                {/* {errors.subject && <p className='text-sm text-red-500 mt-1'>{errors.subject.message}</p>} */}
              </motion.div>
              
              <motion.div
                variants={fadeInAnimationVariants}
                initial='initial'
                whileInView='animate'
                viewport={{
                  once: false
                }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  <strong>Message</strong>
                </label>
                <textarea
                  id={'message'}
                  {...register('message')}
                  rows={6}
                  className={`w-full outline-0 px-4 py-3 border rounded-lg focus:ring-2 transition-colors duration-200 ${errors.message ? 'focus:ring-red-500 border-red-500' : 'focus:ring-emerald-500 focus:border-emerald-500 border-emerald-500'}`}
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
                {/* {errors.message && <p className='text-sm text-red-500 mt-1'>{errors.message.message}</p>} */}
              </motion.div>
              
              <motion.button
                variants={fadeInAnimationVariants}
                initial='initial'
                whileInView='animate'
                viewport={{ once: false }}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 gradient-bg text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-400 disabled:hover:bg-blue-400"
              >
                <Send size={20} />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </motion.button>
              <ToastContainer
                  position="top-right"
                  autoClose={4000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
                  transition={Flip}
                />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;