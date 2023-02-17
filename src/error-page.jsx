import { useRouteError } from "react-router-dom"

export default function ErrorPage(){
  const error = useRouteError();
  console.error(error);
  return(
    <div className="card text-center border border-danger">
      <div className="card-hearder">404</div>
      <div className="card-body">
        <h5 className="card-title">Page Not Found</h5>
        <p className="card-text">{error.statusText || error.message}</p>
      </div>
    </div>
  )
}