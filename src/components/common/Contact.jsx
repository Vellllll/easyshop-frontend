import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Contact(){
    const [ contact, setContact ] = useState({
        name: "",
        email: "",
        message: ""
    });

    // const handleForm = (event) => {
    //     const { name, value } = event.target;
    //     setContact((prevValue) => ({
    //         ...prevValue,
    //         [name]: value
    //     }));
    // }

    const handleForm = (event) => {
        const { name, value } = event.target;
        formik.setFieldValue(name, value);
        setContact((prevValue) => ({
            ...prevValue,
            [name]: value
        }));
    }

    let sendButton = document.getElementById("send_btn");
    let contactForm = document.getElementById("contact_form");
    const notify = () => toast("Submitted!");

    const onFormSubmit = (event) => {
        sendButton.innerHTML = "Sending....";
        let contactFormData = new FormData();
        contactFormData.append("name", contact.name);
        contactFormData.append("email", contact.email);
        contactFormData.append("message", contact.message);

        axios.post("http://127.0.0.1:8000/api/post-contact", contactFormData).then(function(response){
            if(response.status == 200 && response.data == 1){
                toast.success('Message sent!');
                sendButton.innerHTML = "Send";
                contactForm.reset();
            } else {
                toast.error('Error sending message!');
                sendButton.innerHTML = "Send";
                contactForm.reset();
            }
        }).catch(function(error){
            alert(error)
        });
        event.preventDefault();
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: ""
        },
        onSubmit: onFormSubmit,
        validationSchema: yup.object().shape({
            name: yup.string().required("Name is required!"),
            email: yup.string().required("E-mail is required!").email(),
            message: yup.string().required("Message is required!"),
        }),
    });



    return (
        <Container>
            <Row className="p-2">
                <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                    <Row className="text-center">
                        <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                            <Form className="onboardForm" onSubmit={formik.handleSubmit} id="contact_form">
                                <h4 className="section-title-login">CONTACT WITH US</h4>
                                <h6 className="section-sub-title">Please enter your mobile number!</h6>
                                <input name="name" type="text" className="form-control m-2" placeholder="Enter your name" onChange={handleForm} />
                                <p className="text-danger text-start ms-2">{formik.errors.name}</p>
                                <input name="email" type="email" className="form-control m-2" placeholder="Enter email" onChange={handleForm} />
                                <p className="text-danger text-start ms-2">{formik.errors.email}</p>
                                <textarea name="message" className="form-control m-2" placeholder="Enter your message" cols={3} rows={5} onChange={handleForm}></textarea>
                                <p className="text-danger text-start ms-2">{formik.errors.message}</p>
                                <Button className="btn btn-block m-2 site-btn-login" type="submit" id="send_btn">Send</Button>
                                <ToastContainer/>
                            </Form>
                        </Col>
                        <Col className="p-0 desktop m-0" md={6} lg={6} sm={6} xs={6}><br /><br />
                            <p className="section-title-contact">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptas maxime repellendus voluptatum voluptatem. Dolore quod repudiandae adipisci incidunt atque!</p>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.916926543942!2d-73.97516718430033!3d40.76385184237817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f0741ceda7%3A0x4fd23cddb7a3d144!2sApple%20Fifth%20Avenue!5e0!3m2!1sid!2sid!4v1679993606077!5m2!1sid!2sid" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;
