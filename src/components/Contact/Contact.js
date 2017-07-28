import './Contact.css';

export default function (React) {
    class Contact extends React.Component {
        render() {
            return (
                <section className="contact text-center">
                    <h1>Contact the Author</h1>

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
                        </div>
                    </div>
                </section>
            );
        }
    }

    return Contact;
}
