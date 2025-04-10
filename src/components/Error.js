import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;
  return (
    <>
      <h1>Ooooooooops! Page Down</h1>
      <h1>Please retry Again</h1>
      <h1>
        {status} : {statusText}
      </h1>
    </>
  );
};

export default Error;
