import { useState } from "react";

export default function Login() {
    const [data, setData] = useState({ 'firstname': '', 'lastname': '', 'password': '', 'email': '' }) 
    function setfields(e) {
        const na = e.target.name;
        const value = e.target.value;

        setData(() => {
            return { ...data, na:value}
        })
    }
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Sign Up</h5>
          <form action="http://localhost:3030/signup/" method="post">
            <div className="mb-3">
              <label htmlFor="firstname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                name="firstname"
                placeholder="First Name"
                value={data.firstname}
                onChange={() => setfields("firstname")}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                name="lastname"
                placeholder="Last Name"
                value={data.lastname}
                onChange={setfields}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email address"
                value={data.email}
                onChange={setfields}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="pass" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="pass"
                name="pass"
                placeholder="Password"
                value={data.password}
                onChange={setfields}
              ></input>
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
