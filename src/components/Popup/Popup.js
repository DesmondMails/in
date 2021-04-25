import React, {useState, useEffect} from 'react'
import style from './Popup.module.scss'
import Button from '../Button/Button.js'
import logo from '../../images/logo.png'
import close from '../../images/mobile/close.png'

const Popup = ({ setShow}) => {
const [hideForm,setHideForm] = useState(false)
const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 786px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };
    return (
        <div className={style.modal } onClick={() => setShow(false)}>
        <div className={style.modal_content} onClick={e => e.stopPropagation()}>
        <div className={style.popHeader}>
            <img src={logo}/>
            <img src={close} onClick={() => setShow(false)}/>
        </div>
        {!hideForm &&
        <div className={style.form}>
                <p>Got a project in mind?</p>
                    <h2>Get free expert advice.</h2>

                    <form className={style.formContainer}>

                    <input
                        type='text'
                        placeholder='Enter your name'
                        value={''}
                        // onChange={handleNameChanged}
                        className={style.nameInput}
                    />
                    {/* <input
                        type='text'
                        placeholder='Phone number'
                        className={style.phoneInput}
                        // onChange={handlePhoneChanged}
                        value={'phone'}
                    /> */}
                    <input
                        type='text'
                        placeholder='Skype/Whatsapp/E-mail'
                        value={'mail'}
                        className={style.emailInput}
                        // onChange={handleMailChanged}
                    />
                    <button className={style.Btn} onClick={() => setHideForm(true)}>Let's talk</button>
                </form>
                </div>
        }
               { hideForm &&  <div className={style.contact}>
               <div className={style.contactTextContainer}>
                 <h2>We are going to<br/> 
                    <p>contact you very soon.</p>
                    </h2>
                    </div>
                </div>
               }
        </div>
      </div>
    
    )
}

export default Popup