export default function (React, PropTypes) {

    class StopButton extends React.Component {

        static propTypes = {
            onClick: PropTypes.func.isRequired
        };

        render() {
            return (
                <button className="stop-button" onClick={this.props.onClick}>
                    <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>icon-stop</title>
                        <rect x="1" y="1" width="22" height="22" rx="2"></rect>
                    </svg>
                </button>
            );
        }

    }

    return StopButton;

}
