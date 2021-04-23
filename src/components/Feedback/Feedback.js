import React, {useState} from 'react';
import style from './Feedback.module.scss'
import formImg from '../../images/form_img.png'
import Button from "../Button/Button";
import underline from '../assets/icons/underline.png'
const Feedback = () => {
    const [name,setName] = useState('')
    const [mail,setMail] = useState('')
    const [phone, setPhone] = useState('')
    const handleNameChanged = (e) => {
        setName(e.target.value)
    }

    const handleMailChanged = (e) => {
        setMail(e.target.value)
    }
    const handlePhoneChanged = (e) => {
        setPhone(e.target.value)
    }
    return (
        <div className={style.feedback}>
            <div className={style.form}>
                <p>Got a project in mind?</p>
                    <h2>Get free expert advice.</h2>

                    <form className={style.formContainer}>

                    <input
                        type='text'
                        placeholder='Enter your name'
                        value={name}
                        onChange={handleNameChanged}
                        className={style.nameInput}
                    />
                    <input
                        type='text'
                        placeholder='Phone number'
                        className={style.phoneInput}
                        onChange={handlePhoneChanged}
                        value={phone}
                    />
                    <input
                        type='text'
                        placeholder='Skype/Whatsapp/E-mail'
                        value={mail}
                        className={style.emailInput}
                        onChange={handleMailChanged}
                    />
                    <Button className={style.Btn}></Button>
                </form>
            </div>
            <div className={style.img}>
                <img src={formImg}/>
            </div>
        </div>
    );
};

export default Feedback;