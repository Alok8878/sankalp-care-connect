import { useState, useEffect } from "react";
import { Users } from "lucide-react";

const VisitorCounter = () => {
  const [count, setCount] = useState(5001);

  useEffect(() => {
    // Increment visitor count every 10-30 seconds randomly
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, Math.random() * 20000 + 10000); // Random between 10-30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 mb-20">
      <div className="bg-card/95 backdrop-blur-md border border-border rounded-lg p-3 shadow-lg">
        <div className="flex items-center space-x-2 text-sm">
          <Users className="h-4 w-4 text-primary" />
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground font-medium">Visitors</span>
            <span className="text-lg font-bold text-foreground tabular-nums">
              {count.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorCounter;