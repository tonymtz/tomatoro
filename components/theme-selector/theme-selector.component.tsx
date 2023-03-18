import { FC } from "react";
import { useLocalStorage } from "usehooks-ts";
import { darkTheme, defaultTheme } from "~/components/themes";

export const ThemeSelector: FC = () => {
  const [, setTheme] = useLocalStorage("theme", defaultTheme);

  return (
    <div>
      <button onClick={ () => setTheme(defaultTheme) }>Default</button>
      <button onClick={ () => setTheme(darkTheme) }>Dark</button>
    </div>
  );
}
