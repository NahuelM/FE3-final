import React, {useContext} from 'react'
import { UserContext } from "../UserContextProvider";

const Footer = () => {
  const {mode} = useContext(UserContext);
  return (
    <footer className={` ${mode ? 'dark' : ''}`}>
        <p>Powered by</p>
        <img src="/images/DH.png" alt='DH-logo1' />
        <>
          <img src='/images/ico-facebook.png' alt='facebook' className='socialIco'/>
          <img src='/images/ico-instagram.png' alt='instagram' className='socialIco'/>
          <img src='/images/ico-tiktok.png' alt='tiktok' className='socialIco'/>
          <img src='/images/ico-whatsapp.png' alt='whatsapp' className='socialIco'/>
        </>
        

    </footer>
  )
}

export default Footer
