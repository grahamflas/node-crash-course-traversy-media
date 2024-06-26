import Logger from "./logger.js";

const logger = new Logger();

// [TODO] Log this to a file
logger.on("message", (data) => {
  console.log("Called listener", data);
});

logger.log("Hello world!");
logger.log("Hallo Welt");
logger.log("Hey girl");
