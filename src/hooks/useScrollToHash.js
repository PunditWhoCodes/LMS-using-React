import { useEffect } from 'react';

export const useScrollToHash = () => {
  useEffect(() => {
    const handleHashLinkClick = (e) => {
      const element = e.target.closest('a[href^="#"]');
      if (element) {
        e.preventDefault();
        const targetId = element.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleHashLinkClick);
    return () => document.removeEventListener('click', handleHashLinkClick);
  }, []);
};
