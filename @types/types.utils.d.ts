import React from "react";

/*
 * The HTML props of a component without as and ref
 */
type HTMLProps<E extends HTMLElement> = Omit<React.HTMLProps<E>, "as" | "ref">;

/*
 * Returns the props of a React component
 */
type PropsOf<T> = T extends | React.ComponentType<infer P>
  | React.Component<infer P>
  ? JSX.LibraryManagedAttributes<T, P>
  : never;

export function KeysOf<T extends object>(): Array<keyof T>;
