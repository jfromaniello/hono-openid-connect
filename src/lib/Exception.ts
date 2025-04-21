import { HTTPException } from "hono/http-exception";
import { ContentfulStatusCode } from "hono/utils/http-status";

export class OIDCException extends HTTPException {
  constructor(
    error: string,
    errorDescription: string,
    status: ContentfulStatusCode = 400,
  ) {
    const res = new Response(
      JSON.stringify({
        error,
        error_description: errorDescription,
      }),
      {
        status: status,
        headers: { "Content-Type": "application/json" },
      },
    );

    super(status, {
      message: errorDescription,
      res: res,
    });
  }
}
