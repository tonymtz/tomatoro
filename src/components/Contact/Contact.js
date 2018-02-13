import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <section className="contact text-center">
                <h1>Get in touch</h1>

                <div className="container">
                    <div className="col-100">
                        <p className="muted">
                            Tomatoro is an open source code project. You may play around with the code source and
                            apply it for your own projects.
                        </p>

                        <p>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/tonymtz/tomatoro">
                                Github</a>
                        </p>

                        <p>
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/_tonymtz">Contact
                                the Author</a>
                        </p>

                        <p>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScvGhHBkJE_3S05NtU10C7nt65rKNXU-UyBB393CYOAlR_gBQ/viewform"
                               target="_blank"
                               rel="noopener noreferrer">Leave your feedback</a>
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
