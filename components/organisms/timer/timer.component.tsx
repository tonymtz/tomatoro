import { FC, useState } from "react";
import { useTimerHooks } from "~/components/organisms/timer/timer.hooks";
import { Button } from "~/components/atoms/button";
import { Container, Controls, Display } from "./timer.styles";
import { formatTime } from "./timer.utils";

interface Props {
  initialTime?: number;
}

export const Timer: FC<Props> = ({ initialTime }) => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const { time, onReset, onStart, onStop } = useTimerHooks(initialTime);

  const onToggleClick = () => {
    if (!isStarted) {
      setIsStarted(true);
    }
    if (isRunning) {
      onStop();
    } else {
      onStart();
    }
    setIsRunning(!isRunning);
  };

  const onStopClick = () => {
    onReset();
    setIsRunning(false);
    setIsStarted(false);
  };

  return (
    <Container>
      <Display>{ formatTime(time) }</Display>
      <Controls>
        <Button onClick={ onStopClick } disabled={!isStarted}>Done</Button>
        <Button
          onClick={ onToggleClick }
          variant={ isRunning ? "yellow" : "green"}
        >
          { isRunning ? "Pause" : "Start" }
        </Button>
      </Controls>
    </Container>
  );
}
