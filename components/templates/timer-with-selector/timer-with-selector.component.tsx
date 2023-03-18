import { FC, useState } from "react";
import { Timer } from "~/components/organisms/timer";
import { Segment, SEGMENTS } from "~/utils/config";
import { Col, Container, InlineList } from "./timer-with-selector.styles";


interface Props {
}

export const TimerWithSelector: FC<Props> = () => {
  const [segment, setSegment] = useState<Segment>(SEGMENTS.WORK);

  return (
    <Container>
      <Col>
        <Timer initialTime={segment.value} />
        <p>{segment.value}</p>
      </Col>
      <Col>
        <InlineList>
          { Object.entries(SEGMENTS).map(([key, value]) => (
            <li key={ key }>
              <button onClick={ () => setSegment(value) }>
                { value.name }
              </button>
            </li>
          )) }
        </InlineList>
      </Col>
    </Container>
  );
}
