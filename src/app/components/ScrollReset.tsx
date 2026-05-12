'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    const containers = [
      document.getElementById('scroll-root'),
      document.getElementById('page-wrap')
    ];

    containers.forEach(container => {
      if (container) {
        container.scrollTo(0, 0);
      }
    });
  }, [pathname])

  return null
}