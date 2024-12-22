
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from './ui/button';
import { FaBars } from 'react-icons/fa';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleClose = () => setOpen(false);

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
        <div className="flex flex-col space-y-4">
          {isHomePage ? (
            <>
              <a 
                href="#about" 
                className="text-black hover:underline" 
                onClick={handleClose}
              >
                About Me
              </a>
              <a 
                href="#experience" 
                className="text-black hover:underline" 
                onClick={handleClose}
              >
                Experience
              </a>
              <a 
                href="#projects" 
                className="text-black hover:underline" 
                onClick={handleClose}
              >
                Projects
              </a>
            </>
          ) : (
            <>
              <Link 
                to="/#about" 
                className="text-black hover:underline" 
                onClick={handleClose}
              >
                About Me
              </Link>
              <Link 
                to="/#experience" 
                className="text-black hover:underline" 
                onClick={handleClose}
              >
                Experience
              </Link>
              <Link 
                to="/#projects" 
                className="text-black hover:underline" 
                onClick={handleClose}
              >
                Projects
              </Link>
            </>
          )}
          <Link 
            to="/notes" 
            className="text-black hover:underline" 
            onClick={handleClose}
          >
            Uni Notes
          </Link>
          <a 
            href="https://www.linkedin.com/in/simone-paolo-petta/" 
            className="text-black hover:underline" 
            onClick={handleClose}
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire Me 🚀
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}