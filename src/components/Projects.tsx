export default function Projects() {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-semibold mb-4">Proyectos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded">
          <h3 className="font-bold">Proyecto 1: Chatbot Inteligente</h3>
          <p>Desarrollado con NLP para atención al cliente.</p>
        </div>
        <div className="p-4 border rounded">
          <h3 className="font-bold">Proyecto 2: Detector de Objetos</h3>
          <p>Usando visión por computadora en tiempo real.</p>
        </div>
      </div>
    </section>
  );
}
