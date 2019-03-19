import React from 'react';

const AppContext = React.createContext({});

export const AppContextProvider = AppContext.Provider;

export function withAppContext(Component) {
    return function WrapperComponent(props) {
        return (
            <AppContext.Consumer>
                { context => <Component { ...props } { ...context }/> }
            </AppContext.Consumer>
        );
    };
}
