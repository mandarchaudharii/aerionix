
import { useState, useEffect } from 'react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink, X } from 'lucide-react';

const RecruitingDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Show the dialog sooner after the page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-aerionix-black border border-aerionix-gold/50 p-4" closeButton={false}>
        <DialogHeader className="space-y-1">
          <DialogTitle className="text-lg font-bold text-center gold-gradient">
            Recruiting Now
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex justify-center py-2">
          <img 
            src="/lovable-uploads/d24ad718-da25-4c91-8713-c2bc29470bb2.png" 
            alt="Aerionix Recruiting" 
            className="rounded-lg w-full max-w-[240px] object-contain shadow-lg"
          />
        </div>
        
        <DialogFooter className="flex justify-center sm:justify-center pt-2">
          <a 
            href="https://docs.google.com/forms/d/1zh1UbvPbCYANR8yGNJahwRp1B3T26t1BFsJyv_LadZQ/viewform?ts=67ed50c2&edit_requested=true" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-aerionix-gold hover:bg-aerionix-gold/80 text-aerionix-black text-sm px-4 py-2 rounded-full flex items-center gap-2">
              <span>Join Now</span>
              <ExternalLink size={16} />
            </Button>
          </a>
        </DialogFooter>
        
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute right-2 top-2 rounded-full bg-aerionix-gold/20 p-1 text-aerionix-gold hover:bg-aerionix-gold/30 transition-colors"
          aria-label="Close dialog"
        >
          <X className="h-4 w-4" />
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default RecruitingDialog;
