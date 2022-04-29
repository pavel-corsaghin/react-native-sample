import { HttpCodes, MetaData } from './@types';

export const isRequestSuccess = (meta: MetaData) => {
  return [
    HttpCodes.OK,
    HttpCodes.ACCEPTED,
    HttpCodes.CREATED,
    HttpCodes.NO_CONTENT,
  ].includes(meta.httpCode);
};
