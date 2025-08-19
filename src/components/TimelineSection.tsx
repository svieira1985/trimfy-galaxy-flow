import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, CheckCircle2, Clock, Rocket } from "lucide-react";

const timelinePhases = [
  {
    phase: "Fase 1",
    period: "18/08 - 18/09",
    status: "in-progress",
    title: "Fundação do Sistema",
    description: "Construção da base administrativa e módulos principais",
    deliverables: [
      "Admin Back End completo",
      "Admin Front End interface",
      "Módulo Planos de assinatura",
      "Identity-CRM (unidades, funcionários, clientes)",
      "Serviços centralizados",
      "Sistema de agendamentos",
      "Cadastros principais"
    ],
    color: "primary"
  },
  {
    phase: "Fase 2", 
    period: "18/09 - 18/10",
    status: "upcoming",
    title: "Aplicações Cliente",
    description: "Desenvolvimento dos apps para usuários finais e módulo financeiro",
    deliverables: [
      "APP Cliente mobile",
      "APP Web Barbeiro",
      "APP Recepcionista",
      "Módulo Finance completo",
      "Integração meios de pagamento",
      "Dashboards financeiros"
    ],
    color: "accent"
  },
  {
    phase: "Fase 3",
    period: "18/10 - 18/11", 
    status: "planned",
    title: "Inteligência e Controle",
    description: "Funcionalidades avançadas de mensageria, logs e relatórios",
    deliverables: [
      "Sistema de mensageria",
      "Logs de auditoria",
      "Gestão de permissões",
      "Relatórios avançados",
      "Dashboards executivos",
      "Analytics de performance"
    ],
    color: "secondary"
  }
];

const TimelineSection = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "in-progress":
        return <Clock className="w-5 h-5 text-primary" />;
      case "upcoming":
        return <Rocket className="w-5 h-5 text-accent" />;
      case "planned":
        return <CalendarDays className="w-5 h-5 text-secondary" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "in-progress":
        return <Badge variant="default" className="bg-primary">Em Andamento</Badge>;
      case "upcoming":
        return <Badge variant="secondary" className="bg-accent text-accent-foreground">Próxima</Badge>;
      case "planned":
        return <Badge variant="outline" className="border-secondary text-secondary">Planejada</Badge>;
      default:
        return <Badge variant="default" className="bg-green-500">Concluída</Badge>;
    }
  };

  return (
    <section id="timeline" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <CalendarDays className="w-8 h-8 text-primary mr-3" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Cronograma</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Roadmap de <span className="text-primary">Desenvolvimento</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entrega estruturada em 3 fases principais, cada uma focada em aspectos específicos 
            da plataforma para garantir qualidade e funcionalidade.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border hidden md:block"></div>
          
          <div className="space-y-12">
            {timelinePhases.map((phase, index) => (
              <div key={phase.phase} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Node */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-primary shadow-lg items-center justify-center z-10">
                  {getStatusIcon(phase.status)}
                </div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-primary">{phase.phase}</span>
                        {getStatusBadge(phase.status)}
                      </div>
                      <CardTitle className="text-2xl font-bold text-foreground">{phase.title}</CardTitle>
                      <div className="flex items-center text-muted-foreground">
                        <CalendarDays className="w-4 h-4 mr-2" />
                        <span className="font-semibold">{phase.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4">
                        {phase.description}
                      </CardDescription>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground mb-3">Entregas principais:</h4>
                        <div className="grid gap-2">
                          {phase.deliverables.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-center">
                              <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Cronograma Total: 3 Meses</h3>
            <p className="text-lg opacity-90 mb-6">
              De 18 de agosto a 18 de novembro de 2025, entregando uma plataforma completa e robusta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>Desenvolvimento ágil</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 mr-2" />
                <span>Testes contínuos</span>
              </div>
              <div className="flex items-center">
                <Rocket className="w-5 h-5 mr-2" />
                <span>Deploy automático</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;