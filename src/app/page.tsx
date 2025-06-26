
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Digitaliza tu negocio rápidamente con nuestra web de ventas. Somos los únicos que la entregamos en menos de un día y con soporte continuo." cta1="Empieza Ahora" />
<How step1Title="Habla con Nosotros" step1Desc="Analizamos tu negocio y necesidades." step2Title="Creamos tu Sitio" step2Desc="Web lista en 24 horas." step3Title="Soporte Continuo" step3Desc="Ayuda 24/7 para optimizar ventas." />
<Aboutus headline="WebGo: Digitaliza tus Ventas Hoy" subheadline="Transformamos recomendaciones en ventas online, sin complicaciones ni pérdida de tiempo." beneficiotitulo1="Implementación Rápida" beneficio1="Lanzamos tu tienda en días." beneficiotitulo2="Gestión Sin Estrés" beneficio2="Nos encargamos de todo." />
<Services heading="Impulsa Tus Ventas Digitales" description="Rapidez, compromiso, innovación para vender online sin esfuerzo." services={[{"name":"Creación Rápida de Web","icon":"rocket","description":"Sitio de ventas en 24 horas."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia técnica siempre disponible."},{"name":"SEO Optimizado","icon":"search","description":"Maximiza visibilidad con WebGo."},{"name":"Integración de Pagos","icon":"credit-card","description":"Sistemas de pago fáciles y seguros."},{"name":"Gestión de Contenidos","icon":"edit","description":"Contenido persuasivo que vende."},{"name":"Análisis de Ventas","icon":"chart-line","description":"Datos claros para decisiones inteligentes."}]} />
<BeforeAndAfter subheadline="Transformamos ideas en realidades digitales impactantes y memorables." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mi negocio rápidamente?","respuesta":"WebGo se enfoca en rapidez y compromiso. Nos encargamos de crear y gestionar tu sitio web de manera rápida para que puedas empezar a vender online sin complicaciones."},{"pregunta":"No tengo tiempo para gestionar un sitio web. ¿Qué soluciones ofrece WebGo?","respuesta":"No te preocupes, en WebGo nos encargamos de todo. Te ofrecemos un servicio completo donde gestionamos tu sitio web, para que puedas concentrarte en tu negocio."},{"pregunta":"¿Qué beneficios tiene digitalizar las ventas con WebGo?","respuesta":"Digitalizar tus ventas con WebGo te ayuda a alcanzar más clientes y aumentar tus ingresos. Nos aseguramos de que tu negocio esté siempre innovador y al día con las tendencias del mercado."},{"pregunta":"¿Por qué debería elegir WebGo en lugar de otras empresas?","respuesta":"WebGo se destaca por su compromiso e innovación. Ofrecemos un servicio personalizado a un precio competitivo (120), ideal para dueños de pequeños negocios que buscan crecer online."},{"pregunta":"¿Cómo asegura WebGo el éxito de mi negocio en línea?","respuesta":"Nuestro equipo experto en WebGo se enfoca en crear estrategias personalizadas que garantizan resultados. Nos aseguramos de que tu sitio web sea atractivo y fácil de usar, lo que ayuda a convertir visitas en ventas."}]} />
<BookAppointment 
                      heading="Digitaliza Tu Negocio en Santiago" 
                      description="Transforma tus recomendaciones en ventas online con rapidez y compromiso. Lleva tu negocio al siguiente nivel por solo 120."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
