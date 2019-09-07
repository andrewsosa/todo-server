#!/usr/bin/env node

const boxen = require("boxen");
const chalk = require("chalk");
const getPort = require("get-port");
const micro = require("micro");
const morgan = require("micro-morgan");

const serve = async app => {
  const server = morgan("dev")(app);
  const port = await getPort({ port: getPort.makeRange(3000, 3100) });

  micro(server).listen(port, () => {
    const message =
      // eslint-disable-next-line prefer-template
      `${chalk.bold("todo-server")} ${chalk.green("is running!")}` +
      "\n\n" +
      chalk.gray(`• Local: http://localhost:${port}`);

    console.log(
      boxen(message, {
        padding: 1,
        borderColor: "green",
        margin: 1,
      })
    );
  });
};

serve(require("./src/app"));
