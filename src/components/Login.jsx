import classNames from "classnames";
import { useEffect, useState } from "react";
import "./Login.scss";
const Login = () => {
  const [invisible, setInvisible] = useState("p-form__warning--visible");
  const [checkName, setCheckName] = useState(false);
  const [checkPass, setCheckPass] = useState(false);

  useEffect(() => {
    if (checkName === false || checkPass === false) {
      setInvisible("p-form__warning--invisible");
    }
  }, [checkName, checkPass]);
  return (
    <div className="p-login">
      <form className="p-form">
        <div className="p-form__header">Login Here</div>
        <input
          placeholder="username"
          className="p-form__input-1"
          type="text"
          onChange={(e) => setCheckName(true)}
        />
        <input
          placeholder="password"
          type="password"
          className="p-form__input-2"
          onChange={(e) => setCheckPass(true)}
        />
        <button className="p-form__button" disabled>
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
