export class RequestError extends Error {
  response: Response | null;

  constructor(response: Response | null, message: string) {
    super(message);
    this.response = response;
  }
}