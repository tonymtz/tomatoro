import './HowItWorks.css';

export default function (React) {
    class HowItWorks extends React.Component {
        render() {
            return (
                <section className="how-it-works text-center">
                    <h1>How to be more productive</h1>

                    <div className="container">
                        <div className="col-33">
                            <img src="svg/graphic-set-time.svg" alt="graphic-set-time"/>
                            <h2>Set the Time</h2>
                        </div>

                        <div className="col-33">
                            <img src="svg/graphic-take-break.svg" alt="graphic-take-break"/>
                            <h2>Take a Break</h2>
                        </div>

                        <div className="col-33">
                            <img src="svg/graphic-repeat.svg" alt="graphic-repeat"/>
                            <h2>Repeat</h2>
                        </div>

                        <div className="col-100">
                            <p className="muted">
                                The Pomodoro Technique will help you power through distractions, hyper-focus, and get
                                things done in short bursts, while taking frequent breaks to get some air and relax.
                            </p>

                            <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank"
                               rel="noopener noreferrer">Read more about Pomodoro</a>
                        </div>
                    </div>
                </section>
            );
        }
    }

    return HowItWorks;
}
