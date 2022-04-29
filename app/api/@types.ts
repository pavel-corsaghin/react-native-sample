export enum HttpCodes {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEDN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  NOT_ACCEPTABLE = 406,
  SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
}

export interface MetaData {
  httpCode: HttpCodes;
  message?: string;
  page?: number;
  size?: number;
  total?: number;
}

export type ServerResponse<T extends any> = Promise<{
  data?: T;
  meta: MetaData;
}>;

export interface UserInfo {
  name: String;
  email?: String;
}
