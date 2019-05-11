const STORAGE_VAULT = 'myTomatoro';

const INITIAL_STATE = {
    userPrefs: {
        workLength: 60 * 25,
        shortBreakLength: 60 * 5,
        longBreakLength: 60 * 15
    },
    appState: {
        currentStep: 'workLength',
        tomatorosCount: 0
    }
};

export default function AppController(component) {
    return {
        getDefaultState: () => INITIAL_STATE,
        updateCurrentStep,
        updateTomatorosCount,
        updateUserPrefs,
        loadStateFromLocalStorage,
        saveStateToLocalStorage
    };

    function updateCurrentStep(currentStep) {
        component.setState({
            appState: { ...component.state.appState, currentStep }
        });
    }

    function updateTomatorosCount(tomatorosCount) {
        component.setState({
            appState: { ...component.state.appState, tomatorosCount }
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

        if (parsedState) {
            component.setState({
                userPrefs: {
                    ...component.state.userPrefs,
                    ...parsedState.userPrefs
                }
            });
        }
    }

    function saveStateToLocalStorage() {
        global.localStorage.setItem(STORAGE_VAULT, JSON.stringify(component.state));
    }
}
