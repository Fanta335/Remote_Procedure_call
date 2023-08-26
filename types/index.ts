export type RequestType = {
  method: string;
  params: string[];
};

export const methods = ["floor", "nroot", "reverse", "validAnagram", "sort"] as const;
export type MethodType = (typeof methods)[number];

export type ValidationResultType = {
  status: ValidationStatusType;
  message: string;
};

export type ValidationStatusType = "success" | "error";

export type RequestInfoType = {
  actualNumOfArg?: number;
  expectedNumOfArg?: number;
  methodName?: string;
  expectedTypeofArg?: string;
};

export type ResponseType = {
  results: string;
};
