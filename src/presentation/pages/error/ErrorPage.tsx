import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  const errorMessage = (error: unknown): string => {
    if (isRouteErrorResponse(error)) {
      return `${error.status} ${error.statusText}`;
    } else if (error instanceof Error) {
      return error.message;
    } else if (typeof error === "string") {
      return error;
    } else {
      console.error(error);
      return "Unknown error";
    }
  };

  return (
    <div>
      <h2>Oops, an error</h2>
      <p>{errorMessage(error)}</p>
    </div>
  );
}

export default ErrorPage;
