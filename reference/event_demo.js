import { EventEmitter } from "events";

// Create class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on("event", () => console.log("Event Fired!"));
myEmitter.on("Ereignis", () => console.log("Ereignis vorgekommen!"));

// Emit event
myEmitter.emit("event");
myEmitter.emit("Ereignis");
