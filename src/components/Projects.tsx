
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "DASHBOARD DE FINANÇAS",
    description: "Objetivos principais e indicadores:",
    details: "People Analytics - análise de perfil de colaboradores, faixa salarial, turnover, admissões ao longo do tempo por área, faixa etária e nível de senioridade dos times.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500"
  },
  {
    title: "DASHBOARD LOGÍSTICA",
    description: "Objetivos principais e indicadores:",
    details: "Controle de estoque e análise de KPIs relevantes como ruptura, giro de estoque, valor em estoque por área de armazenagem, fornecedor, SKU e classificação ABC do item.",
    image: "https://i.pinimg.com/736x/6d/81/19/6d8119800984fb11d86584c2c826869e.jpg"
  },
  {
    title: "DASHBOARD PRODUÇÃO",
    description: "Objetivos principais e indicadores:",
    details: "Torre de controle de produção com OEE (Overall Equipment Effectiveness) avaliando disponibilidade, performance, qualidade, ranking de rejeições e ocorrências na produção.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
          | Explore alguns projetos que já desenvolvi no Power BI:
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-gradient border-border/50 overflow-hidden hover:scale-105 transition-all duration-300 group"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-bold text-lg text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground font-medium">
                  {project.description}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {project.details}
                </p>
                <Button className="w-full primary-gradient text-white border-0 hover:scale-105 transition-transform">
                  Ver detalhes
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
