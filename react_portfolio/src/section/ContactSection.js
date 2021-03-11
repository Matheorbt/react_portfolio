import React from 'react'
import './ContactSection.css'

function ContactSection() {
    const submitForm = () => {
        var templateParams = {
            firstname: document.querySelector(".contact-form-input contact-form-first-name").value,
            lastname: document.querySelector(".contact-form-input contact-form-last-name").value,
            message: document.querySelector(".contact-form-input-message").value,
            phone_number: document.querySelector(".contact-form-input contact-form-phone").value,
            mail: document.querySelector(".contact-form-input contact-form-mail").value,
        };

        window.emailjs.send("service_prfpwh6", "template_eame8yt", templateParams)
            .then(function (response) {
                console.log('Contact form send.', response.status, response.text);
            }, function (error) {
                window.alert("Erreur lors de l'envoi du formulaire veuillez reéssayer plus tard")
                console.log('Contact form sending encouter issue.', error);
            });
    }
    return (
        <React.Fragment>
            <div id="contact"></div>
            <div className="contact-main-wrapper">
                <h1 className="contact-hero-title">Contact</h1>
                <form className="contact-form">
                    <div className="contact-form-top-wrapper">
                        <div className="contact-form-first-name-wrap">
                            <label>Nom</label>
                            <input type="text" name="contact-form-input-first-name" className="contact-form-input contact-form-first-name"></input>
                        </div>
                        <div className="contact-form-first-last-name-wrap">
                            <label>Prénom</label>
                            <input type="text" name="contact-form-input-last-name" className="contact-form-input contact-form-last-name"></input>
                        </div>
                        <div className="contact-form-mail-wrap">
                            <label>Mail</label>
                            <input type="text" name="contact-form-input-mail" className="contact-form-input contact-form-mail"></input>
                        </div>
                        <div className="contact-form-phone-wrap">
                            <label>Téléphone</label>
                            <input type="text" name="contact-form-input-phone" className="contact-form-input contact-form-phone"></input>
                        </div>
                    </div>
                    <div className="contact-form-bottom-wrapper">
                        <label>Message</label>
                        <input type="text" name="contact-form-message" className="contact-form-input-message"></input>
                    </div>
                    <button type="button" className="contact-form-button" onClick={() => submitForm()}><span>Envoyer</span></button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default ContactSection
