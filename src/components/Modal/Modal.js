import './Modal.css';

export default function (React, PropTypes, pomodoroStore, pomodoroActions) {

    class Modal extends React.Component {

        static defaultProps = {
            isSettingsModalOpen: false
        };

        static propTypes = {
            isSettingsModalOpen: PropTypes.bool.isRequired
        };

        updateBody = () => {
            // TODO bad
            let bodyElement = document.getElementsByTagName('body')[0];

            if (this.props.isSettingsModalOpen) {
                bodyElement.className = 'blurry';
            } else {
                bodyElement.className = '';
            }
        };

        onCloseButtonClick = () => {
            pomodoroActions.toggleSettingsModal();
        };

        render() {
            this.updateBody();

            return (
                <div id="modal" className={this.props.isSettingsModalOpen ? '' : 'hidden'}>
                    <header>
                        <h1>Edit timelapses</h1>
                        <button
                            className="close"
                            onClick={this.onCloseButtonClick}
                            aria-label="close">
                            X
                        </button>
                    </header>

                    {this.props.children}

                    <div className="col-100 control">
                        <button onClick={this.onCloseButtonClick}> Close
                        </button>
                    </div>
                </div>
            );
        }
    }

    return Modal;
}
