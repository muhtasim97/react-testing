import classNames from "classnames";
import { useEffect, useState } from "react";
import "./Login.scss";
const Login = () => {
  const [invisible, setInvisible] = useState("p-form__warning--visible");
  const [checkName, setCheckName] = useState("");
  const [checkPass, setCheckPass] = useState("");

  useEffect(() => {
    if (checkName == "" || checkPass == "") {
      setInvisible("p-form__warning--visible");
    } else setInvisible("p-form__warning--invisible");
  }, [checkName, checkPass]);
  return (
    <div className="p-login">
      <form className="p-form">
        <div className="p-form__header">Login Here</div>
        <input
          placeholder="username"
          className="p-form__input-1"
          type="text"
          value={checkName}
          onChange={(e) => setCheckName(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          className="p-form__input-2"
          value={checkPass}
          onChange={(e) => setCheckPass(e.target.value)}
        />
        <button className="p-form__button" disabled={!checkName || !checkPass}>
          Login
        </button>
        <span
          data-testid="error"
          className={classNames("p-form__warning", invisible)}
        >
          Something went wrong!!!
        </span>
      </form>
    </div>
  );
};
export default Login;
