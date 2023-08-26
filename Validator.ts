import { MethodType, RequestInfoType, RequestType, ValidationResultType, methods } from "./types";

export class Validator {
  static validateRequest(req: RequestType): ValidationResultType {
    if (!this.checkMethod(req)) {
      return this.createInvalidResult({ methodName: req.method });
    }

    if (!this.checkParamsLength(req)) {
      const expected = req.method === "floor" || req.method === "reverse" ? 1 : 2;
      return this.createInvalidResult({ actualNumOfArg: req.params.length, expectedNumOfArg: expected });
    }

    if (!this.checkTypeofParams(req)) {
      return this.createInvalidResult({ expectedTypeofArg: "number" });
    }

    return this.createValidResult();
  }

  static checkMethod(req: RequestType): boolean {
    return methods.some((m) => m === req.method);
  }

  static checkParams(req: RequestType): boolean {
    if (req.method === "floor") {
      if (req.params.length !== 1 || req.params.some((p) => Number.isNaN(Number(p)))) {
        return false;
      }
      return true;
    }
    if (req.method === "nroot") {
      if (req.params.length !== 2 || req.params.some((p) => Number.isNaN(Number(p)))) {
        return false;
      }
      return true;
    }
    if (req.method === "reverse") {
      return req.params.length === 1;
    }
    if (req.method === "validAnagram") {
      return req.params.length === 2;
    }
    if (req.method === "sort") {
      return true;
    }
    return false;
  }

  static checkParamsLength(req: RequestType): boolean {
    if (req.method === "floor") {
      return req.params.length === 1;
    }
    if (req.method === "nroot") {
      return req.params.length === 2;
    }
    if (req.method === "reverse") {
      return req.params.length === 1;
    }
    if (req.method === "validAnagram") {
      return req.params.length === 2;
    }
    if (req.method === "sort") {
      return true;
    }
    return false;
  }

  static checkTypeofParams(req: RequestType): boolean {
    if (req.method === "floor") {
      return !req.params.some((p) => Number.isNaN(Number(p)));
    }
    if (req.method === "nroot") {
      return !req.params.some((p) => Number.isNaN(Number(p)));
    }
    if (req.method === "reverse") {
      return true;
    }
    if (req.method === "validAnagram") {
      return true;
    }
    if (req.method === "sort") {
      return true;
    }
    return false;
  }

  static createInvalidResult(info: RequestInfoType): ValidationResultType {
    if (info.actualNumOfArg !== undefined) {
      return {
        status: "error",
        message: `Expected ${info.expectedNumOfArg} arguments. But got ${info.actualNumOfArg}.`,
      };
    }
    if (info.methodName !== undefined) {
      return {
        status: "error",
        message: `Method ${info.methodName} does not exists. `,
      };
    }
    if (info.expectedTypeofArg !== undefined) {
      return {
        status: "error",
        message: `Argument of type should be '${info.expectedTypeofArg}'.`,
      };
    }
    return {
      status: "error",
      message: "Never message",
    };
  }

  static createValidResult(): ValidationResultType {
    return {
      status: "success",
      message: "Valid.",
    };
  }
}
