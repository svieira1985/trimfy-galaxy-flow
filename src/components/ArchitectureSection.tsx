import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Megaphone, 
  DollarSign, 
  Users, 
  Wrench, 
  CreditCard, 
  BarChart3, 
  UserCheck, 
  Package,
  Network,
  Zap
} from "lucide-react";

const modules = [
  {
    name: "Campanha",
    description: "Marketing e mensageria integrada",
    icon: Megaphone,
    color: "text-primary"
  },
  {
    name: "Finance",
    description: "Gestão financeira completa",
    icon: DollarSign,
    color: "text-accent"
  },
  {
    name: "Identity-CRM",
    description: "Gestão de unidades, funcionários e clientes",
    icon: Users,
    color: "text-secondary"
  },
  {
    name: "Serviços",
    description: "Centralizador de serviços da plataforma",
    icon: Wrench,
    color: "text-primary"
  },
  {
    name: "Plano",
    description: "Assinaturas e recorrência",
    icon: CreditCard,
    color: "text-accent"
  },
  {
    name: "Relatório",
    description: "Dashboards e relatórios avançados",
    icon: BarChart3,
    color: "text-secondary"
  },
  {
    name: "RH",
    description: "Controle de férias e gestão de pessoal",
    icon: UserCheck,
    color: "text-primary"
  },
  {
    name: "Estoque",
    description: "Gestão de produtos e insumos",
    icon: Package,
    color: "text-accent"
  }
];

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Network className="w-8 h-8 text-primary mr-3" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Arquitetura ERP</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sistema <span className="text-primary">Modular</span> e <span className="text-accent">Integrado</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa arquitetura foi projetada como um ERP robusto, com módulos especializados 
            que trabalham em perfeita harmonia para otimizar sua barbearia.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="relative mb-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center shadow-primary">
              <span className="text-white font-bold text-lg">TrimFy</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16">
            {modules.map((module, index) => (
              <Card key={module.name} className="relative hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <module.icon className={`w-6 h-6 ${module.color}`} />
                  </div>
                  <CardTitle className="text-lg font-semibold">{module.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {module.description}
                  </CardDescription>
                </CardContent>
                
                {/* Connection Lines */}
                <div className="absolute top-1/2 left-1/2 w-px h-16 bg-border -translate-x-1/2 -translate-y-full opacity-30"></div>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-white shadow-sm border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Network className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Integração Total</h3>
            <p className="text-muted-foreground">Todos os módulos comunicam entre si, garantindo dados sempre sincronizados.</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-white shadow-sm border">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Performance</h3>
            <p className="text-muted-foreground">Arquitetura otimizada para alta performance e escalabilidade.</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-white shadow-sm border">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserCheck className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Experiência</h3>
            <p className="text-muted-foreground">Interface intuitiva desenvolvida especificamente para barbearias.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;