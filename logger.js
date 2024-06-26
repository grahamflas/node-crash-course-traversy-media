import { EventEmitter } from "events";
import { v4 as uuidv4 } from "uuid";

export default class Logger extends EventEmitter {
  log(message) {
    this.emit("message", { id: uuidv4(), message });
  }
}
