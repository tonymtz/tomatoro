import { emptyFn } from 'contants';

export function getDummyComponent(props) {
    return {
        props: { ...props },
        state: {},
        setState: emptyFn
    };
}
