"use client"

import { useState } from "react"
import Image from "next/image"

export default function Home() {

  const [selectedProject, setSelectedProject] = useState<{
  title: string
  technique: string
  hours: string
  description: string
  image: string
} | null>(null)

const [language, setLanguage] = useState<"es" | "en">("es")

console.log("selectedProject:", selectedProject)

  return (
    <>
  <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    <a
      href="#inicio"
      className="text-xl font-bold tracking-wide"
    >
      SV TATTOO
    </a>

    <div className="hidden md:flex items-center gap-8 text-sm">

      <a
        href="#inicio"
        className="text-zinc-400 hover:text-white transition"
      >
    {language === "es" ? "Inicio" : "Home"}
      </a>

      <a
        href="#proceso"
        className="text-zinc-400 hover:text-white transition"
      >
    {language === "es" ? "Proceso" : "Process"}
      </a>

      <a
        href="#portafolio"
        className="text-zinc-400 hover:text-white transition"
      >
    {language === "es" ? "Portafolio" : "Portfolio"}
      </a>

      <a
        href="#testimonios"
        className="text-zinc-400 hover:text-white transition"
      >
    {language === "es" ? "Testimonios" : "Reviews"}
      </a>

      <a
        href="#contacto"
        className="text-zinc-400 hover:text-white transition"
      >
    {language === "es" ? "Contacto" : "Contact"}
      </a>

    </div>

    <a
      href="https://wa.me/526699201429"
      target="_blank"
      className="hidden md:flex bg-white text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
    >
      Agendar cita
    </a>

    <button
  onClick={() =>
    setLanguage(language === "es" ? "en" : "es")
  }
  className="ml-4 border border-zinc-700 px-3 py-1 rounded-full text-sm hover:border-white transition"
>
  {language === "es" ? "🇲🇽 ES" : "🇺🇸 EN"}
</button>

  </div>
</nav>

<main className="bg-black text-white">

      <section  
      id="inicio" 
      className="relative min-h-screen overflow-hidden">

        <div className="absolute inset-0">
          <Image
            src="/images/hero/shuy-hero.JPG"
            alt="Shuy Velarde"
            fill
            priority
            className="object-cover opacity-25"
          />
        </div>

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-zinc-400">
            SHUY VELARDE
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">

  {language === "es"
    ? "Tu historia merece más que un tatuaje."
    : "Your story deserves more than a tattoo."}

  <br />

  {language === "es"
    ? "Merece una obra creada para acompañarte toda la vida."
    : "It deserves a piece of art created to stay with you for life."}

</h1>

          <p className="mt-8 max-w-2xl text-lg text-zinc-300">
          {language === "es"
  ? "Cada proyecto recibe atención personalizada para crear una pieza que funcione con tu historia, tu anatomía y tu visión."
  : "Every project receives personalized attention to create a piece that works with your story, your anatomy and your vision."}
</p>
          <a
  href="https://wa.me/526699201429?text=Hola%20Shuy,%20quiero%20cotizar%20un%20tatuaje"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-10 inline-block rounded-full bg-white px-10 py-4 text-xl font-semibold text-black transition hover:scale-105"
>
  {language === "es"
  ? "Comenzar mi proyecto"
  : "Start my project"}
</a>

        </div>

      </section>

      <section 
      id="proceso"
       className="relative z-10 bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-4xl font-bold md:text-5xl">
            Mi proceso creativo
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-zinc-800 p-8">
              <div className="mb-4 text-5xl font-bold text-zinc-700">01</div>
              <h3 className="mb-3 text-2xl font-semibold">
                Escucho tu historia
              </h3>
              <p className="text-zinc-400">
                Cada tatuaje comienza entendiendo qué significa para ti.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 p-8">
              <div className="mb-4 text-5xl font-bold text-zinc-700">02</div>
              <h3 className="mb-3 text-2xl font-semibold">
                Diseño para tu anatomía
              </h3>
              <p className="text-zinc-400">
                No adapto tu cuerpo al diseño. Adapto el diseño a tu cuerpo.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 p-8">
              <div className="mb-4 text-5xl font-bold text-zinc-700">03</div>
              <h3 className="mb-3 text-2xl font-semibold">
                Construimos el concepto
              </h3>
              <p className="text-zinc-400">
                Te explico cada decisión para que entiendas el porqué de cada elemento.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 p-8">
              <div className="mb-4 text-5xl font-bold text-zinc-700">04</div>
              <h3 className="mb-3 text-2xl font-semibold">
                Creamos una obra para toda la vida
              </h3>
              <p className="text-zinc-400">
                El objetivo no es solo tatuarte. Es crear algo que sigas amando dentro de años.
              </p>
            </div>
          </div>
        </div>
      </section>

<section id="portfolio" className="py-32 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div
  className="group relative overflow-hidden rounded-3xl cursor-pointer"
  onClick={() =>
    setSelectedProject({
      title: "Retrato Realista",
      technique: "Black & Grey",
      hours: "12 horas",
      description:
        "Retrato realista en black and grey desarrollado para capturar expresión, detalle y profundidad.",
      image: "/images/portfolio/tattoo-1.JPEG",
    })
  }
>
  <Image
  src="/images/portfolio/tattoo-1.JPEG"
  alt="Tattoo 1"
  width={800}
  height={1000}
/>

</div>

            <div
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
              onClick={() =>
                setSelectedProject({
                  title: "Ascenso",
                  technique: "Color Realista",
                  hours: "12 horas",
                  description:
                    "Inspirado en la disciplina, el esfuerzo y la pasión por superar límites. Una composición que fusiona deporte, fuego y determinación para representar el camino hacia una mejor versión de uno mismo.",
                  image: "/images/portfolio/tattoo-2.JPEG",
                })
              }
            >
              <Image
                src="/images/portfolio/tattoo-2.JPEG"
                alt="Tattoo 2"
                width={800}
                height={1000}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/50 md:bg-black/0 md:group-hover:bg-black/70 transition duration-500" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-500">
                <h3 className="text-3xl font-bold">
                  Ascenso
                </h3>

                <p className="mt-2 text-sm text-zinc-300">
                  Color Realista
                </p>

                <p className="mt-1 text-sm text-zinc-400">
                  12 horas de trabajo
                </p>

                <div className="mt-4 text-sm uppercase tracking-[0.2em] text-white">
                  Ver proyecto →
                </div>
              </div>
            </div>

            <div
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
              onClick={() =>
                setSelectedProject({
                  title: "Fe Inquebrantable",
                  technique: "Black & Grey Realista",
                  hours: "9 horas",
                  description:
                    "Una representación de la fe como refugio en los momentos difíciles. Cada sombra y detalle busca transmitir fuerza espiritual, esperanza y conexión interior.",
                  image: "/images/portfolio/tattoo-3.JPG",
                })
              }
            >
              <Image
                src="/images/portfolio/tattoo-3.JPG"
                alt="Tattoo 3"
                width={800}
                height={1000}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/50 md:bg-black/0 md:group-hover:bg-black/70 transition duration-500" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-500">
                <h3 className="text-3xl font-bold">
                  Fe Inquebrantable
                </h3>

                <p className="mt-2 text-sm text-zinc-300">
                  Black & Grey Realista
                </p>

                <p className="mt-1 text-sm text-zinc-400">
                  9 horas de trabajo
                </p>

                <div className="mt-4 text-sm uppercase tracking-[0.2em] text-white">
                  Ver proyecto →
                </div>
              </div>
            </div>
            <div
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
              onClick={() =>
                setSelectedProject({
                  title: "Noche Eterna",
                  technique: "Color Artístico",
                  hours: "3 horas",
                  description:
                    "Inspirado en la obra clásica de Van Gogh, reinterpretada sobre la piel para convertir arte atemporal en una pieza viva y personal.",
                  image: "/images/portfolio/tattoo-4.JPEG",
                })
              }
            >
              <Image
                src="/images/portfolio/tattoo-4.JPEG"
                alt="Tattoo 4"
                width={800}
                height={1000}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/50 md:bg-black/0 md:group-hover:bg-black/70 transition duration-500" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-500">
                <h3 className="text-3xl font-bold">
                  Sueños de Medianoche
                </h3>

                <p className="mt-2 text-sm text-zinc-300">
                  Color Artístico
                </p>

                <p className="mt-1 text-sm text-zinc-400">
                  3 horas de trabajo
                </p>

                <div className="mt-4 text-sm uppercase tracking-[0.2em] text-white">
                  Ver proyecto →
                </div>
              </div>
            </div>

            <div
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
              onClick={() =>
                setSelectedProject({
                  title: "Legado Ancestral",
                  technique: "Black & Grey Realista",
                  hours: "4 horas",
                  description:
                    "Una pieza inspirada en la conexión con nuestras raíces, el honor y la herencia cultural. Diseñada para representar identidad y orgullo.",
                  image: "/images/portfolio/tattoo-5.JPG",
                })
              }
            >
              <Image
                src="/images/portfolio/tattoo-5.JPG"
                alt="Tattoo 5"
                width={800}
                height={1000}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/50 md:bg-black/0 md:group-hover:bg-black/70 transition duration-500" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-500">
                <h3 className="text-3xl font-bold">
                  Legado Ancestral
                </h3>

                <p className="mt-2 text-sm text-zinc-300">
                  Black & Grey Realista
                </p>

                <p className="mt-1 text-sm text-zinc-400">
                  4 horas de trabajo
                </p>

                <div className="mt-4 text-sm uppercase tracking-[0.2em] text-white">
                  Ver proyecto →
                </div>
              </div>
            </div>

            <div
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
              onClick={() =>
                setSelectedProject({
                  title: "Renacer",
                  technique: "Black & Grey",
                  hours: "8 horas",
                  description:
                    "Las alas simbolizan libertad, evolución y nuevos comienzos. Una pieza creada para recordar que siempre es posible levantarse y comenzar de nuevo.",
                  image: "/images/portfolio/tattoo-6.png",
                })
              }
            >
              <Image
                src="/images/portfolio/tattoo-6.png"
                alt="Tattoo 6"
                width={800}
                height={1000}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition duration-500" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-500">
                <h3 className="text-3xl font-bold">
                  Renacer
                </h3>

                <p className="mt-2 text-sm text-zinc-300">
                  Black & Grey
                </p>

                <p className="mt-1 text-sm text-zinc-400">
                  8 horas de trabajo
                </p>

                <div className="mt-4 text-sm uppercase tracking-[0.2em] text-white">
                  Ver proyecto →
                </div>
              </div>
            </div>

          </div>
          

 
        </div>
        
<div id="ventajas" className="mt-32 text-center">
          <h2 className="text-5xl font-bold">
            ¿Por qué tatuarte conmigo?
          </h2>

          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
            Cada tatuaje es diseñado para contar una historia.
            Mi objetivo no es llenar espacio, sino crear una pieza
            que siga teniendo significado dentro de muchos años.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-16">

            <div className="bg-zinc-900 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold">
                Diseños personalizados
              </h3>
              <p className="mt-3 text-zinc-400">
                Cada proyecto se desarrolla desde cero para adaptarse
                a tu historia, anatomía y visión.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold">
                Especialista en Black & Grey
              </h3>
              <p className="mt-3 text-zinc-400">
                Trabajo enfocado en realismo, contraste y profundidad
                para lograr piezas que destaquen con el paso del tiempo.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold">
                Atención 1 a 1
              </h3>
              <p className="mt-3 text-zinc-400">
                Desde la idea inicial hasta el resultado final,
                el proceso es completamente personalizado.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold">
                Calidad antes que cantidad
              </h3>
              <p className="mt-3 text-zinc-400">
                Prefiero crear piezas memorables que puedan
                acompañarte toda la vida.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-zinc-950">
  <div className="max-w-6xl mx-auto text-center">

    <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
      DESDE TU IDEA HASTA EL TATUAJE
    </p>

    <h2 className="mt-4 text-5xl md:text-6xl font-bold">
      ¿Cómo comenzamos?
    </h2>

    <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
      Te acompaño desde el primer mensaje para convertir tu idea
      en una pieza única diseñada especialmente para ti.
    </p>

    <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-8 mt-16">

      <div className="bg-zinc-900 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border hover:border-cyan-500/20">
        <div className="text-5xl mb-4">💬</div>
        <h3 className="font-bold text-xl mb-3">
          Cuéntame tu idea
        </h3>
        <p className="text-zinc-400 text-sm">
          Explícame qué quieres tatuarte y qué significado tiene para ti.
        </p>
      </div>

      <div className="bg-zinc-900 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border hover:border-cyan-500/20">
        <div className="text-5xl mb-4">📸</div>
        <h3 className="font-bold text-xl mb-3">
          Envía referencias
        </h3>
        <p className="text-zinc-400 text-sm">
          Comparte imágenes, estilos o ejemplos que te inspiren.
        </p>
      </div>

      <div className="bg-zinc-900 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border hover:border-cyan-500/20">
        <div className="text-5xl mb-4">📍</div>
        <h3 className="font-bold text-xl mb-3">
          Muestra la zona
        </h3>
        <p className="text-zinc-400 text-sm">
          Te pediré una fotografía del área donde irá el tatuaje.
        </p>
      </div>

      <div className="bg-zinc-900 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border hover:border-cyan-500/20">
        <div className="text-5xl mb-4">✏️</div>
        <h3 className="font-bold text-xl mb-3">
          Diseño personalizado
        </h3>
        <p className="text-zinc-400 text-sm">
          Desarrollo una propuesta creada para tu historia y anatomía.
        </p>
      </div>

      <div className="bg-zinc-900 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border hover:border-cyan-500/20">
        <div className="text-5xl mb-4">📅</div>
        <h3 className="font-bold text-xl mb-3">
          Agenda tu cita
        </h3>
        <p className="text-zinc-400 text-sm">
          Definimos fecha y comenzamos a crear tu próxima pieza.
        </p>
      </div>

    </div>

  </div>
</section>
      <section className="py-32 px-6 bg-zinc-950">
        <div 
        id="testimonios" 
        className="max-w-6xl mx-auto text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            TESTIMONIOS
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-bold">
            Lo que dicen mis clientes
          </h2>

          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
            Cada tatuaje cuenta una historia. Estas son algunas experiencias
            de personas que confiaron en mi trabajo.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-16">

            {/* ABY */}
            <div className="bg-zinc-900 rounded-3xl p-8 text-center">
              <img
                src="/images/testimonials/aby.jpeg"
                alt="Aby Zatarain"
                className="w-36 h-36 rounded-full mx-auto mb-4 object-cover"
              />

              <div className="text-amber-400 text-xl mb-4">
                ★★★★★
              </div>

              <p className="text-zinc-300 italic">
                "Además de ser una gran persona, ofrece un buen servicio,
                se nota el esfuerzo, la calidad y la pasión que le pone
                a cada tatuaje. Totalmente recomendado, mucho éxito."
              </p>

              <p className="font-bold mt-6">
                Aby Zatarain
              </p>

              <p className="text-sm text-zinc-500">
                Mazatlán, Sinaloa
              </p>
            </div>

            {/* ALEXIS */}
<div className="bg-zinc-900 rounded-3xl p-8 text-center border border-cyan-500/20">

  <img
    src="/images/testimonials/alexis.jpeg"
    alt="Alexis Lizárraga"
    className="w-36 h-36 rounded-full mx-auto mb-4 object-cover"
  />

  <div className="text-amber-400 text-xl mb-4">
    ★★★★★
  </div>

  <p className="text-zinc-300 italic">
    "El primer artista que realmente captó mi idea. Muchas gracias por tu dedicación y el talento que le pusiste a mis tatuajes. Definitivamente regresaré pronto."
  </p>

  <p className="mt-6 font-bold">
    Alexis Lizárraga
  </p>

  <p className="text-sm text-zinc-500">
    Mazatlán, Sinaloa
  </p>

</div>

            {/* MAR */}
            <div className="bg-zinc-900 rounded-3xl p-8 text-center">
              <img
                src="/images/testimonials/mar.jpeg"
                alt="Mar Andrés"
                className="w-36 h-36 rounded-full mx-auto mb-4 object-cover"
              />

              <div className="text-amber-400 text-xl mb-4">
                ★★★★★
              </div>

              <p className="text-zinc-300 italic">
                "Captó mi idea desde el inicio, confianza, trato amable y
                el resultado hermoso. Amé mi tatuaje. Ya van varios que me hago
                con él y la verdad lo recomiendo."
              </p>

              <p className="font-bold mt-6">
                Mar Andrés
              </p>

              <p className="text-sm text-zinc-500">
                Mazatlán, Sinaloa
              </p>
            </div>
          </div>
        </div>
      </section>
      <section 
      id="contacto" 
      className="py-40 px-6 text-center">

        <div className="max-w-4xl mx-auto">

          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            AGENDA TU CITA
          </p>

          <h2 className="mt-4 text-5xl md:text-7xl font-bold leading-tight">
            ¿Listo para crear tu próximo tatuaje?
          </h2>

          <p className="mt-8 text-xl text-zinc-400 max-w-2xl mx-auto">
            Cuéntame tu idea y trabajemos juntos para convertirla
            en una pieza única que te acompañe toda la vida.
          </p>

          <a
            href="https://wa.me/526699201429"
            target="_blank"
            className="inline-block mt-12 bg-green-500 hover:bg-green-400 text-black font-bold px-10 py-5 rounded-full text-xl transition"
          >
            📲 Agendar por WhatsApp
          </a>

        </div>

      </section>
      <section className="py-24 px-6 border-t border-zinc-900">

        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-3 gap-8 text-center">

            <div>
              <h3 className="text-6xl font-bold text-white">
                +1000
              </h3>

              <p className="mt-3 text-zinc-400 uppercase tracking-widest text-sm">
                Tatuajes realizados
              </p>
            </div>

            <div>
              <h3 className="text-6xl font-bold text-white">
                +200
              </h3>

              <p className="mt-3 text-zinc-400 uppercase tracking-widest text-sm">
                Clientes satisfechos
              </p>
            </div>

            <div>
              <h3 className="text-6xl font-bold text-white">
                8+
              </h3>

              <p className="mt-3 text-zinc-400 uppercase tracking-widest text-sm">
                Años de experiencia
              </p>
            </div>

          </div>

        </div>

      </section>
      <footer className="border-t border-zinc-900 py-16 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

          <div>
            <h3 className="text-2xl font-bold">
              SV TATTOO MAZATLÁN
            </h3>

            <p className="mt-4 text-zinc-400">
              Arte que vive en la piel.
              Diseños personalizados con identidad,
              significado y calidad.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">
              Contacto
            </h4>

            <div className="space-y-2 text-zinc-400">

              <a
                href="https://wa.me/526699201429"
                target="_blank"
                className="block hover:text-white transition"
              >
                WhatsApp
              </a>

              <a
                href="https://instagram.com/shuyvelardetattoos"
                target="_blank"
                className="block hover:text-white transition"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/ShuyVelardeTattoos/"
                target="_blank"
                className="block hover:text-white transition"
              >
                Facebook
              </a>

            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">
              Ubicación
            </h4>

            <a
              href="https://maps.app.goo.gl/xXzWcxHzW4BSeSqn9"
              target="_blank"
              className="text-zinc-400 hover:text-white transition"
            >
              📍 Ver ubicación en Google Maps
            </a>

            <p className="mt-4 text-zinc-500 text-sm">
              Atención mediante cita previa.
            </p>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-zinc-900 text-center text-zinc-500 text-sm">
          © 2026 Shuy Velarde · SV Tattoo Mazatlán
        </div>

      </footer>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="max-w-4xl w-full bg-zinc-900 rounded-3xl overflow-hidden animate-[fadeIn_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-[500px]">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <h2 className="text-4xl font-bold mb-4">
                  {selectedProject.title}
                </h2>

                <p className="text-zinc-400 mb-2">
                  {selectedProject.technique}
                </p>

                <p className="text-zinc-500 mb-6">
                  {selectedProject.hours}
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  {selectedProject.description}
                </p>

                <a
                  href={`https://wa.me/526699201429?text=Hola%20Shuy,%20me%20interesa%20el%20tatuaje%20${selectedProject.title}`}
                  target="_blank"
                  className="inline-block mt-6 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-full transition"
                >
                  📲 Cotizar por WhatsApp
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="mt-8 border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </main>
</>

)
}