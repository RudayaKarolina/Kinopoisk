import { useState, useEffect } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import fon from "../../assets/login-fon.jfif";
import backImage from "../../assets/back.png";
import "./ResetPassword.scss";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [modalResetPass, setModalResetPass] = useState(true);
  const [resetErr, setResetErr] = useState(false);

  const navigate = useNavigate();
  const auth = getAuth();

  function resetPass() {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setModalResetPass(false);
      })
      .catch((e) => {
        console.log(e);
        setResetErr(true);
      });
  }
  useEffect(() => {
    setResetErr(false);
  }, [email]);

  return (
    <div>
      <div className="reset">
        <div className="background_reset">
          <img src={fon} alt="logo" className="logo_image" />
          {modalResetPass ? (
            <form className="form">
              <div
                className="wrapper_back"
                onClick={() => {
                  navigate("/login");
                }}
              >
                <img src={backImage} alt="" className="back_image" />
              </div>
              <h2 className="reset_heading">Забыли пароль?</h2>
              <p className="reset_text">
                Ссылка для сброса пароля придет на указанный электронный адрес
              </p>
              <input
                type="email"
                placeholder="Введите Ваш e-mail"
                value={email}
                className="reset_input"
                onChange={(e) => setEmail(e.target.value)}
              />
              {resetErr && (
                <p className="reset_err">Проверьте введенные данные!</p>
              )}
              <button
                type="button"
                className="reset_button"
                onClick={resetPass}
              >
                Отправить
              </button>
            </form>
          ) : (
            <form className="formReset">
              <h3 className="reset_info">
                Письмо отправлено на электронную почту
              </h3>
              <button
                type="button"
                className="confirm_button"
                onClick={() => {
                  navigate("/login");
                }}
              >
                OK
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
