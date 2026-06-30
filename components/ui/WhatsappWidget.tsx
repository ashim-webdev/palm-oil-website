'use client';

import { useEffect, useState } from 'react';

export default function WhatsappWidget() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-0 left-0">
      <div
        className="elfsight-app-5840d1e3-5232-4d6c-8480-70b6e9c8be31"
        data-elfsight-app-lazy
      />
    </div>
  );
}