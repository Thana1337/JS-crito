import { Form, Formik, useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import Map from '../assets/img/map.png'

const MessageForm = () => {
    const [success, setSuccess] = useState(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const form = useFormik ({
        initialValues: {
            name:'',
            email:'',
            message:''
        },

        validationSchema: Yup.object ({
            name: Yup.string()
            .required("Please insert your name")
            .min(2,"Please insert your fullname"),
            email: Yup.string()
            .required("Please insert your email")
            .matches(emailRegex,"Please insert a valid email"),
            message: Yup.string()
            .required("Please insert your message")
        }),

        onSubmit: async (values, {resetForm})  => {
            const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform',{
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(values)
            })

            switch (result.status){
                case 200:
                    setSuccess(true);
                    resetForm({values:""})
                    setTimeout(() => {
                        setSuccess(false);
                      }, 2000);
                    break;
                default:
                        setSuccess(false)
                        break;
            }

        }

    })
        return (
            <div className="message-form">
            <div className="container">
                <h1>Leave us a message <br/>for any information.</h1>
                <div>
                    <form onSubmit={form.handleSubmit} noValidate>
                        <label htmlFor="name">{form.errors.name && form.touched.name ? form.errors.name : ""}</label>
                        <input id='name' className={form.errors.name && form.touched.name ? 'error' : ''} type="text" placeholder="Name*" name="name" value={form.values.name} onChange={form.handleChange}/>
                        <label htmlFor="email">{form.errors.email && form.touched.email ? form.errors.email : ""}</label>
                        <input className={form.errors.email && form.touched.email ? 'error' : ''} type="email" placeholder="Email*" name="email" value={form.values.email} onChange={form.handleChange}/>
                        <label htmlFor="message">{form.errors.message && form.touched.message ? form.errors.message : ""}</label>
                        <textarea className={form.errors.message && form.touched.message? 'error' : ''} cols="30" rows="10" placeholder="Your Message*" name="message" value={form.values.message} onChange={form.handleChange}></textarea>
                        <div className="btn-animation-div">
                            <button className={`button-animation ${success ? 'green' : ''}`} type='submit' > <span>{`${success ? 'Thank you' : 'Send Message'}`}<i className={`${success ? '' : 'fa-regular fa-arrow-up-right'}`}></i></span> </button>
                        </div>  
                    </form>
                </div>
            </div>

            <img src={Map} alt="location of crito headquarter"/>
            
        </div>
        )
}

export default MessageForm