import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer, faChartLine, faBriefcase, faUserPlus, faChartPie, faRobot, faGlobe, faShoppingCart, faCloud, faFileAlt, faDatabase, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

interface DevelopmentMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenuDevelopment({ isOpen, onClose }: DevelopmentMenuProps) {
  const menuItems = [
    {
      icon: <FontAwesomeIcon icon={faCode} className="h-6 w-6" />,
      title: "Frontend Development",
      description: "Bouw snelle en aantrekkelijke interfaces met moderne technologieën.",
    },
    {
      icon: <FontAwesomeIcon icon={faServer} className="h-6 w-6" />,
      title: "Backend Development",
      description: "Ontwikkel robuuste en schaalbare backend-oplossingen voor elke toepassing.",
    },
    {
      icon: <FontAwesomeIcon icon={faChartLine} className="h-6 w-6" />,
      title: "Dashboard Ontwikkeling",
      description: "Creëer maatwerk dashboards met data-inzichten en interactieve functionaliteiten.",
    },
    {
      icon: <FontAwesomeIcon icon={faBriefcase} className="h-6 w-6" />,
      title: "CRM Systemen",
      description: "Beheer klantrelaties en verkoopprocessen met efficiënte CRM-oplossingen.",
    },
    {
      icon: <FontAwesomeIcon icon={faUserPlus} className="h-6 w-6" />,
      title: "Lead Management Systemen",
      description: "Automatiseer het beheer van leads en optimaliseer je verkoopprocessen.",
    },
    {
      icon: <FontAwesomeIcon icon={faChartPie} className="h-6 w-6" />,
      title: "Marketing Automatisering",
      description: "Implementeer software om marketingcampagnes effectiever en efficiënter te maken.",
    },
    {
      icon: <FontAwesomeIcon icon={faRobot} className="h-6 w-6" />,
      title: "AI Geoptimaliseerde Systemen",
      description: "Gebruik AI om processen te optimaliseren en complexe problemen op te lossen.",
    },
    {
      icon: <FontAwesomeIcon icon={faGlobe} className="h-6 w-6" />,
      title: "Webapplicaties",
      description: "Ontwikkel moderne, responsieve webapplicaties die overal toegankelijk zijn.",
    },
    {
      icon: <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6" />,
      title: "E-commerce Platformen",
      description: "Bouw gebruiksvriendelijke en schaalbare e-commerce oplossingen.",
    },
    {
      icon: <FontAwesomeIcon icon={faCloud} className="h-6 w-6" />,
      title: "Portalen en Platformen",
      description: "Ontwikkel portalen en platformen voor interne en externe samenwerking.",
    },
    {
      icon: <FontAwesomeIcon icon={faFileAlt} className="h-6 w-6" />,
      title: "Document Management Systemen",
      description: "Beheer documenten efficiënt met versiebeheer en cloudopslag.",
    },
    {
      icon: <FontAwesomeIcon icon={faDatabase} className="h-6 w-6" />,
      title: "Data Management Oplossingen",
      description: "Optimaliseer en beheer grote datasets met betrouwbare datamanagementoplossingen.",
    },
    {
      icon: <FontAwesomeIcon icon={faCalendarAlt} className="h-6 w-6" />,
      title: "Planning en Rooster Systemen",
      description: "Implementeer tools voor efficiënte planning en tijdbeheer.",
    },
  ];

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute left-0 right-0 bg-white dark:bg-background border-b border-border shadow-lg"
      style={{ top: '100%' }}
    >
      <div className="container mx-auto max-w-[1800px] py-8 px-10">
        <div className="grid grid-cols-3 gap-16">
          {menuItems.map((item, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-start gap-4 group">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-medium text-foreground group-hover:text-primary">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
