import React from "react";
import { Check } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import iconBasic from "./i1.png";
import iconinter from "./i2.png";
import iconcomplet from "./i3.png";
import Footers from "../../components/Footer/Footer";
import "./Planes.css";

export default function PlanesFachadasPage() {

  // TU NUMERO DE WHATSAPP (CON CODIGO DE PAIS SIN + NI ESPACIOS)
  const phoneNumber = "3125883290";

  const plans = [
    {
      icon: iconinter,
      name: "Plan Básico",
      class: "plan-basic",
      btn: "btn-basic",
      frequency: "Cada 6 meses",
      features: [
        "Lavado general de fachada",
        "Limpieza de vidrios",
        "Eliminación de polvo y smog",
        "Revisión visual"
      ]
    },
    {
      icon: iconcomplet,
      name: "Plan Corporativo",
      class: "plan-corporate",
      btn: "btn-corporate",
      frequency: "Cada 3 meses",
      features: [
        "Todo lo del Plan Básico",
        "Limpieza profunda",
        "Limpieza de avisos",
        "Reporte Fotográfico"
      ]
    },
    {
      icon: iconBasic,
      name: "Plan Premium",
      class: "plan-premium",
      btn: "btn-premium",
      frequency: "Mensual",
      features: [
        "Todo lo anterior",
        "Protección hidrofóbica",
        "Tratamiento anti-hongos",
        "Atención Prioritaria"
      ]
    }
  ];

  return (
    <div>
      <Navbar />

      <section className="planes-page">

        

        <div className="planes-wrapper">
        <div className="planes-header">
          <h1>Planes de Mantenimiento de Fachadas</h1>
          <p>Elige el plan ideal para mantener tu edificio impecable.</p>
        </div>
          <div className="planes-container">

            

            {plans.map((plan, index) => (

              <div key={index} className="plan-card">

                <div className={`plan-header ${plan.class}`}>
                  {plan.name}
                </div>

                <div className="plan-content">

                  {/* ICONO DEL PLAN */}
                  {plan.icon && (
                    <div className="plan-icon">
                      <img src={plan.icon} alt={plan.name} />
                    </div>
                  )}

                  <ul>
                    {plan.features.map((feature, i) => (
                      <li key={i}>
                        <Check size={18} color="#22c55e" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <p className="plan-frequency">
                    {plan.frequency}
                  </p>

                  {/* BOTON WHATSAPP */}
                  <a
                    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Hola, deseo solicitar el ${plan.name} de mantenimiento de fachadas.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className={`plan-btn ${plan.btn}`}>
                      {index === 2 ? "Contratar Ahora" : "Solicitar Servicio"}
                    </button>
                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <Footers />

    </div>
  );
}