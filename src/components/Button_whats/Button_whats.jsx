/*import "./Button_whats.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function button_whats() {
    return (<Link className="btn" to="https://api.whatsapp.com/send?phone=+573125883290&text=Hola,%20deseo%20una%20cotizacion." target="_blank">
        <FontAwesomeIcon icon={faWhatsapp} />
    </Link>);
}

export default button_whats;*/

import "./Button_whats.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function WhatsappButton({ 
  text,
  className = "",
  message = "Hola, deseo una cotización."
}) {

  const phone = "3125883290";

  const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {text && <span>{text}</span>}
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  );
}

export default WhatsappButton;




