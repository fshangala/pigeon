export default function LoginPage(){
  return(
    <form id="login-form">
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="username" placeholder="Enter Username" />
        <label for="username">Username</label>
      </div>
      <div className="form-floating mb-3">
        <input type="password" className="form-control" id="password" placeholder="Enter Password" />
        <label for="password">Password</label>
      </div>
      <button type="submit" className="btn btn-primary px-4">Login</button>
    </form>
  )
}