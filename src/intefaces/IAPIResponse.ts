interface IAPIResponse<responseType> {
  isFetching: boolean;
  error?: Error;
  data: responseType;
}
