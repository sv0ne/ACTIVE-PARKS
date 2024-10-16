import React, {useState} from 'react';
import css from './Form.module.scss';
import {IconPassword} from "../icons/IconPassword";
import axios from "axios";
import {useAppDispatch} from "../../store/store";
import {login} from "../../store/authSlice";

const Form = () => {
    const [isVisible, setVisible] = useState(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const dispatch = useAppDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://ap.sportforall.gov.ua/api/v1/auth/login', {
                email,
                password,
                typeId: 0,
            });

            // Диспатчим в state
            console.log(response)
            dispatch(login({...response.data}));

            // Чистим поля формы
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error('Ошибка при авторизации', error);
        }
    };

    return (
        <div className={css.form}>
            <p className={css.form__title}>Вітаємо!</p>
            <p className={css.form__subtitle}>З поверненням</p>
            <form className="nlc-mb-24 mb-32" onSubmit={handleSubmit}>
                <div className={css.textField}>
                    <input className={css.textField__input}
                           type="text"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className={css.textField__placeholder}>Пошта</span>
                </div>
                <div className={css.textField}>
                    <input className={css.textField__input}
                           type={isVisible ? "text" : "password"}
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className={css.textField__placeholder}>Пароль</span>
                    {!isVisible &&
                        <button className={css.textField__password} onClick={() => setVisible(true)}>
                            <IconPassword/>
                        </button>
                    }
                </div>
                <div className="nlc-mb-16">
                    <p className="text-small">Не маєте акаунту? <a className="link-2 ml-8" href="">Зареєструватись</a></p>
                    <p className="text-small">Забули пароль? <a className="link-2 ml-8" href="">Відновити</a></p>
                </div>
                <button className={css.form__submit} type="submit">Увійти</button>
            </form>
        </div>
    );
};

export default Form;