
const About = () => {
  return (
    <section id="about" className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
            | Sobre mim:
          </h2>
          
          <div className="card-gradient rounded-2xl p-8 md:p-12 shadow-2xl border border-border/50">
            <p className="text-lg leading-relaxed mb-8 text-center text-muted-foreground">
              Seja muito bem-vindo(a) ao meu portfólio. Conheça a minha trajetória:
            </p>
            
            <div className="flex items-start space-x-6">
              <div className="text-6xl font-bold text-primary">3+</div>
              <div className="flex-1">
                <p className="text-base leading-relaxed text-foreground">
                  anos de experiência profissional em empresas de médio e grande porte, com participação direta na 
                  elaboração de relatórios gerenciais, suporte à contabilidade e criação de dashboards no Power BI. Tenho 
                  domínio em Excel avançado com VBA, noções de SQL Server e familiaridade com ERPs como o Omie e o 
                  TOTVS. Desde 2023, concentro meus esforços no aperfeiçoamento técnico e no desenvolvimento de 
                  soluções automatizadas para controle financeiro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
