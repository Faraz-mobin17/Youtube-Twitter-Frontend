import { useRouteError } from "react-router-dom";
export default function Error() {
  const err = useRouteError();
  return <div>{err.error}</div>;
}
