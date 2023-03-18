// NOTE: This is a module worker
import { WORKER } from "~/utils/config";

let isRunning: boolean = false;
let interval: NodeJS.Timer;

addEventListener('message', (event: MessageEvent<string>) => {
  processMessage(event.data);
})

function processMessage(data: string) {
  switch (data) {
    case 'start':
      if (!isRunning) {
        isRunning = true;
        interval = setInterval(() => {
          self.postMessage('tick');
        }, WORKER.tick);
      }
      break;
    case 'stop':
    default:
      clearInterval(interval);
      isRunning = false;
      break;
  }
}
