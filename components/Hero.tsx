export default function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="py-24 px-6 md:px-16">
      <h1
        id="hero-titulo"
        className="text-[2.75rem] leading-[1.05] font-display text-bosque max-w-4xl md:text-hero"
      >
        Tu tecnología, funcionando sin pausas.
      </h1>
      <p className="font-body text-body text-piedra max-w-prose mt-8">
        Diseñamos, protegemos y mantenemos la infraestructura de tu empresa
        para que tú te concentres en crecer.
      </p>
      <a
        href="#contacto"
        className="inline-block mt-10 bg-vivo text-white rounded-full px-8 py-4 font-semibold hover:bg-bosque"
      >
        Solicitar asesoría
      </a>
      <svg
        viewBox="0 0 1200 120"
        className="mt-16 w-full text-vivo"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M0 60 H440 L470 20 L500 100 L530 60 H1200"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          className="pulso"
        />
      </svg>
    </section>
  );
}
