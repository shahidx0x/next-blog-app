export default function createResponse(
  message: string,
  status: number,
  meta = {},
  data = {}
) {
  return new Response(
    JSON.stringify({
      message,
      status,
      meta: {
        ...meta,
      },
      data: {
        ...data,
      },
    }),
    {
      status,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
