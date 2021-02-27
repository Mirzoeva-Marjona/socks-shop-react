import React, {useState} from "react";
import { useForm } from "react-hook-form";
// import styles from 'profile.module.css';

const Profile = () => {
    const [submitForm, setSubmit] = useState(false);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        setSubmit(true);
    }

    return (<form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <span>Имя:</span>
                <input type="text" name="name" placeholder="Введите ваше имя" ref={register({required: true, maxLength: 20})}/>
                {errors.name && <span>Это поле обязательное</span>}
            </div>
            <div>
                <span>Фамилия:</span>
                <input type="text" name="surname" placeholder="Введите вашу фамилию" ref={register({required: true, maxLength: 20})}/>
                {errors.surname && <span>Это поле обязательное</span>}
            </div>
            <div>
                <span>Возраст:</span>
                <input type="number" name="age" placeholder="Введите ваш возраст" ref={register({min:12, max:110})}/>
            </div>
            <div>
                <span>Почта:</span>
                <input type="text" name="email" placeholder="Введите ваш email" ref={register({required: true,
                pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}/>
                {errors.email?.type==='required' && <span>Это поле обязательное</span>}
                {errors.email?.type==='pattern' && <span>Некорректный email</span>}
            </div>
            <input type="submit" value="Отправить" onClick={() => setSubmit(false)}/>
            {submitForm && <span>Отправлено!</span>}
        </form>

    )
}

export default Profile
