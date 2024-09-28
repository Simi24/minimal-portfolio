
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from './ui/button';
import { FaBars } from 'react-icons/fa';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const mainNavItems = ['About Me', 'Projects', 'Contacts'];

  return (
    <Sheet open={open} onOpenChange={setOpen}>

      <div className='fixed top-0 left-0'>
      <SheetTrigger asChild>
        <Button variant="ghost" className='bg-secondary md:hidden' size="icon">
            <FaBars />
        </Button>
      </SheetTrigger>
      </div>

      <SheetContent side="left"> 
        <div className="flex flex-col items-start">
        <a href="#about" className="text-teal-200 text-black hover:text-black mr-4" onClick={() => setOpen(false)}>
                    About Me
                </a>
                <a href="#projects" className="text-teal-200 text-black hover:text-black mr-4" onClick={() => setOpen(false)}>
                    Projects
                </a>
                <a href="#contact" className="text-teal-200 text-black hover:text-black mr-4" onClick={() => setOpen(false)}>
                    Contact
                </a>
        </div>
      </SheetContent>

    </Sheet>
  );
}