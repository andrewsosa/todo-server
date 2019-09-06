#!/usr/bin/env node

const boxen = require("boxen");
const chalk = require("chalk");
const getPort = require("get-port");
const micro = require("micro");
const morgan = require("micro-morgan");

const app = require("./src/app");

(async () => {
  const port = await getPort({ port: getPort.makeRange(3000, 3100) });

  micro(morgan("dev")(app)).listen(port, () => {
    // let message = chalk.green(`Listening at http://localhost:${port}`);
    let message = `${chalk.bold("todo-server")} ${chalk.green("is running!")}`;
    message += "\n\n";
    // message += chalk.gray(`• ${chalk.bold("Local:")} http://localhost:${port}`);
    message += chalk.gray(`• Local: http://localhost:${port}`);

    const box = boxen(message, {
      padding: 1,
      borderColor: "green",
      margin: 1,
    });
    console.log(box);
  });
})();
