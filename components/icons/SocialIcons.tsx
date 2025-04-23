import { FaFacebook } from 'react-icons/fa';
import { IoLogoInstagram } from "react-icons/io5";
import { TbWorldUp } from "react-icons/tb"

export const FaFacebookIcon = () => (
   <a href="https://www.facebook.com/people/Cl%C3%ADnica-Nuestra-Se%C3%B1ora-de-F%C3%A1tima/100083060934274/#" target='_blank' rel='noopener noreferrer'>
    <FaFacebook className="text-white hover:opacity-80 transition duration-300" />
   </a> 
)

export const InstagramIcon = () => (
    <a href="https://www.instagram.com/clinicafatimapasto/" target='_blank' rel='noopener noreferrer'>
        <IoLogoInstagram className="text-white hover:opacity-80 transition duration-300" />
    </a>
)

export const PageWebIcon = () => (
    <a href="https://clinicafatima.co/" target='_blank' rel='noopener noreferrer'>
        <TbWorldUp className="text-white hover:opacity-80 transition duration-300" />
    </a>
)