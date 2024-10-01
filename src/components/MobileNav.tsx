
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from './ui/button';
import { FaBars } from 'react-icons/fa';

//TODO: refine this component

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>

      <div className='fixed top-0 right-0 z-50 pr-1.5 pt-1.5'>
      <SheetTrigger asChild>
        <Button variant="ghost" className='bg-secondary md:hidden' size="icon">
            <FaBars />
        </Button>
      </SheetTrigger>
      </div>

      <SheetContent side="top"> 
        <div className="flex items-start">
        <a href="#about" className="text-black hover:underline mr-4" onClick={() => setOpen(false)}>
                    About Me
                </a>
                <a href="#experience" className="text-black hover:underline mr-4" onClick={() => setOpen(false)}>
                    Experience
                </a>
                <a href="#projects" className="text-black hover:underline mr-4" onClick={() => setOpen(false)}>
                    Projects
                </a>
                <a href="https://www.linkedin.com/in/simone-paolo-petta/" className="text-black hover:underline mr-4" onClick={() => setOpen(false)}>
                    Hire Me 🚀
                </a>
        </div>
      </SheetContent>

    </Sheet>
  );
}