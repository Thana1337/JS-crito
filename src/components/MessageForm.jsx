import { Form, Formik, useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'

const MessageForm = () => {
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
            .email("Please insert a valid email"),
            email: Yup.string()
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
                    alert("yay")
                    resetForm({values:""})
                    break;
                case 400:
                    alert("no")
                    break;
            }

        }

    })
        return (
            <div className="message-form">
            <div className="container">
                <h1>Leave us a message <br/>for any information.</h1>
                <div>
                    <form  onSubmit={form.handleSubmit} noValidate>
                        <input className={form.errors.name ? "error" : ""} type="text" placeholder="Name*" name="name" value={form.values.name} onChange={form.handleChange}/>
                        <input className={form.errors.email ? "error" : ""} type="email" placeholder="Email*" name="email" value={form.values.email} onChange={form.handleChange}/>
                        <textarea className={form.errors.message ? "error" : ""} cols="30" rows="10" placeholder="Your Message*" name="message" value={form.values.message} onChange={form.handleChange}></textarea>
                        <div className="btn-animation-div">
                            <button className="buttonyellow-animation" type='submit' > <span>Send Message</span> </button>
                        </div>  
                    </form>
                </div>
            </div>

            <img src="asset/map.png" alt="location of crito headquarter"/>
            
        </div>
        )
}

export default MessageForm