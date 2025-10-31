import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Politica.css';

const PrivacyPolicy = ({ str }) => {

    return (
        <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px" }}>
      <h1>Política de Privacidad</h1>
      <p><strong>Proyexi Diseño y Construcción S.A.S.</strong></p>
      <p>Bogotá, Colombia</p>
      <br/>

      <p>
        En <strong>Proyexi Diseño y Construcción S.A.S.</strong> valoramos la confianza de nuestros clientes y nos comprometemos a proteger la información personal que nos proporcionan. 
        Esta política explica cómo recopilamos, usamos, almacenamos y protegemos dicha información.
      </p>

      <h2>1. Información que recopilamos</h2>
      <ul>
        <li>Nombre completo</li>
        <li>Número de teléfono</li>
        <li>Dirección de correo electrónico</li>
        <li>Dirección del inmueble o lugar del proyecto</li>
        <li>Detalles relacionados con el servicio solicitado</li>
      </ul>

      <h2>2. Uso de la información</h2>
      <p>La información se utiliza para:</p>
      <ul>
        <li>Responder solicitudes o cotizaciones</li>
        <li>Coordinar visitas técnicas y servicios</li>
        <li>Elaborar propuestas o contratos</li>
        <li>Comunicación durante la ejecución del proyecto</li>
      </ul>
      <p><strong>No compartimos ni vendemos información a terceros.</strong></p>

      <h2>3. Protección de la información</h2>
      <p>
        Implementamos medidas de seguridad para prevenir el acceso no autorizado, uso indebido o divulgación.
        Solo el personal autorizado puede acceder a los datos.
      </p>

      <h2>4. Conservación y eliminación</h2>
      <p>
        Los datos se conservan solo el tiempo necesario. El usuario puede solicitar su eliminación.
      </p>

      <h2>5. Derechos del titular</h2>
      <ul>
        <li>Consultar la información almacenada</li>
        <li>Solicitar correcciones</li>
        <li>Solicitar eliminación</li>
        <li>Retirar el consentimiento en cualquier momento</li>
      </ul>

      <h2>6. Contacto</h2>
      <p><strong>Proyexi Diseño y Construcción S.A.S.</strong></p>
      <p>Correo: <a href="mailto:proyexidc@gmail.com">proyexidc@gmail.com</a></p>
      <p>Bogotá, Colombia</p>
      <br/>
      <p>Última actualización: {new Date().getFullYear()}</p>
    </div>
    );
};

export default PrivacyPolicy;
