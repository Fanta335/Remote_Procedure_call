import net from "net";
import fs from "fs";
import { RequestType } from "./types";
import { Validator } from "./Validator";
import { Calculator } from "./Calculator";

export class RpcServer {
  static create(path: string) {
    try {
      fs.unlinkSync(path);
    } catch (err) {}

    const server = net.createServer((connection) => {
      this.addConnectionListener(connection);
    });

    return server;
  }

  static addConnectionListener(con: net.Socket) {
    console.log("connected.");

    con.on("close", () => {
      console.log("disconnected.");
    });

    con.on("error", (err) => {
      console.log(err.message);
    });

    con.on("data", (data) => {
      const req: RequestType = JSON.parse(data.toString());
      const validationResult = Validator.validateRequest(req);

      if (validationResult.status === 'error') {
        con.write(validationResult.message);
      } else {
        const res = Calculator.calculate(req);
        con.write(JSON.stringify(res));
      }
    });

    con.write("Hello from server!");
  }
}
