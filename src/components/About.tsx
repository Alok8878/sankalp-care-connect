import { Card } from "@/components/ui/card";
import { 
  Clock, 
  Users, 
  TestTube, 
  Timer, 
  Target, 
  Gauge, 
  Settings, 
  UserCheck, 
  Workflow, 
  ShieldCheck 
} from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Clock,
      number: "5+",
      label: "Years of Service",
      description: "Serving Bhopal community"
    },
    {
      icon: Users,
      number: "1000+",
      label: "Happy Patients",
      description: "Trusted by families"
    },
    {
      icon: TestTube,
      number: "100+",
      label: "Tests Available",
      description: "Comprehensive diagnostics"
    },
    {
      icon: Timer,
      number: "24hrs",
      label: "Report Turnaround",
      description: "Fast and reliable"
    }
  ];

  const values = [
    { icon: Target, text: "Accuracy in every test result" },
    { icon: Gauge, text: "Speed without compromising quality" },
    { icon: Settings, text: "Modern equipment and technology" },
    { icon: UserCheck, text: "Patient comfort and care" },
    { icon: Workflow, text: "Optimized workflows for efficiency" },
    { icon: ShieldCheck, text: "Data privacy and confidentiality" }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-gradient-to-br from-medical-blue-light to-medical-green-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Mission & Description */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                About <span className="bg-gradient-primary bg-clip-text text-transparent">Sankalp Pathology Lab</span>
              </h2>
              <div className="space-y-4 text-foreground-secondary text-lg leading-relaxed">
                <p>
                  Established with a vision to provide accurate, reliable, and accessible healthcare services, 
                  Sankalp Pathology Lab has been serving the Bhopal community for over 5 years with dedication 
                  and excellence.
                </p>
                <p>
                  Our state-of-the-art facility combines advanced diagnostic technology with experienced 
                  healthcare professionals to deliver precise results that help doctors make informed decisions 
                  about your health.
                </p>
                <p>
                  We believe that quality healthcare should be accessible to everyone, which is why we offer 
                  transparent pricing, home collection services, and maintain the highest standards of 
                  patient care and comfort.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Core Values</h3>
              <div className="grid grid-cols-1 gap-3">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-foreground font-medium">{value.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm"
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                      <div className="text-lg font-semibold text-foreground">
                        {stat.label}
                      </div>
                      <div className="text-sm text-foreground-secondary">
                        {stat.description}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;