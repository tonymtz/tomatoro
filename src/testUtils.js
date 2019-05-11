import { emptyFn } from 'appConstants';

export function getDummyComponent(props) {
    return {
        props: { ...props },
        state: {},
        setState: emptyFn
    };
}
