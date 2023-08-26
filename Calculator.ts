import { floor, nroot, reverse, validAnagram, sort } from "./methods";
import { RequestType, ResponseType } from "./types";

export class Calculator {
  static calculate(req: RequestType): ResponseType {
    let res = "";
    if (req.method === "floor") {
      res = floor(Number(req.params[0])).toString();
    } else if (req.method === "nroot") {
      res = nroot(Number(req.params[0]), Number(req.params[1])).toString();
      return {
        results: res.toString(),
      };
    } else if (req.method === "reverse") {
      res = reverse(req.params[0]);
    } else if (req.method === "validAnagram") {
      res = validAnagram(req.params[0], req.params[1]).toString();
    } else if (req.method === "sort") {
      res = sort(req.params).toString();
    }

    return {
      results: res,
    };
  }
}
