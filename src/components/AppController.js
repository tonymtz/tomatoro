const STORAGE_VAULT = 'myTomatoro';

const INITIAL_STATE = {
    userPrefs: {
        workLength: 60 * 25,
        shortBreakLength: 60 * 5,
        longBreakLength: 60 * 15
    },
    appState: {
        currentStep: 'workLength'
    }
};

export default function AppController(component) {
    return {
        getDefaultState: () => INITIAL_STATE,
        updateCurrentStep,
        updateUserPrefs,
        loadStateFromLocalStorage,
        saveStateToLocalStorage
    };

    function updateCurrentStep(currentStep) {
        component.setState({
            appState: { ...component.state.appState, currentStep }
        });
    }

    function updateUserPrefs({
                                 workLength = component.state.userPrefs.workLength,
                                 shortBreakLength = component.state.userPrefs.shortBreakLength,
                                 longBreakLength = component.state.userPrefs.longBreakLength
                             }) {
        component.setState({
            userPrefs: {
                workLength,
                shortBreakLength,
                longBreakLength
            }
        });
    }

    function loadStateFromLocalStorage() {
        const stringifiedState = global.localStorage.getItem(STORAGE_VAULT);
        const parsedState = JSON.parse(stringifiedState);
        component.setState({ ...parsedState });
    }

    function saveStateToLocalStorage() {
        global.localStorage.setItem(STORAGE_VAULT, JSON.stringify(component.state));
    }
}