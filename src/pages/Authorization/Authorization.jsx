import styles from "./Authorization.module.scss";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import gif from "../../assets/gif/ai_animate3.gif";

export const Authorization = () => {
  const validationSchema = yup.object().shape({
    email: yup.string().required("Обязательное поле").email("Некорректный email"),
    password: yup.string().required("Обязательное поле").min(6, "минимальная длина 4 символа"),
  });

  return (
    <div className={styles.auth}>
      <div className={styles.authWrapper}>
        <div className={styles.authBody}>
          <div className={styles.authLogo}>
            <img src={gif} alt="логотип" />
          </div>
          <div className={styles.welcomeText}>
            <h1>Добро пожаловать</h1>
            <span>
              Войдите с помощью учетной записи администратора, чтоб получить полный доступ
              ко всему функционалу админ панели.
            </span>
          </div>
        </div>

        <div className={styles.authForm}>
          <h2 clasName={styles.authTitle}>Вход в админ панель</h2>

          <Formik
            validationSchema={validationSchema}
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => console.log("submit", values)}
          >
            {({ errors, touched }) => (
              <Form className={styles.form}>
                <Field name="email" placeholder="Email" />
                {errors.email && touched.email && (
                  <div className={styles.error}>{errors.email}</div>
                )}

                <Field name="password" placeholder="Password" />
                {errors.password && touched.password && (
                  <div className={styles.error}>{errors.password}</div>
                )}

                <button type="submit">Войти</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
