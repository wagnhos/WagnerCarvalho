
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    title: "VISUALIZAÇÃO & ANÁLISE DE DADOS",
    description: "Desenvolvimento de dashboards profissionais através de ferramentas como Power BI e Excel.",
    gradient: "from-cyan-400 to-blue-500"
  },
  {
    title: "DESIGN DE DASHBOARDS",
    description: "Aplicação do Figma no Power Point para elaborar layouts premium para projetos de Business Intelligence.",
    gradient: "from-blue-400 to-indigo-500"
  },
  {
    title: "OPERAÇÕES FINANCEIRAS",
    description: "Gestão de contas a pagar e receber, conciliação bancária, fluxo de caixa e apoio à contabilidade, com foco em organização, precisão e eficiência nos processos.",
    gradient: "from-indigo-400 to-purple-500"
  },
  {
    title: "ANÁLISE GERENCIAL",
    description: "Desenvolvimento de relatórios como DRE, fluxo de caixa e demonstrativos financeiros para análise de desempenho e apoio à tomada de decisão estratégica.",
    gradient: "from-purple-400 to-pink-500"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
          | Principais habilidades:
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="card-gradient border-border/50 hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${skill.gradient} flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform`}>
                  {index + 1}
                </div>
                <h3 className="font-bold text-sm text-foreground leading-tight">
                  {skill.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
