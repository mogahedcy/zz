"use client";

import type React from 'react';
import Link from 'next/link';

const BackLink: React.FC = () => {
  return (
    <div className="w-full bg-emerald-700 text-white text-center py-2 text-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-center">
        <Link
          href="https://aldeyar.me"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline font-bold"
        >
          الديار للمظلات والسواتر - تصميم وتنفيذ وتركيب جميع أنواع المظلات والسواتر
        </Link>
      </div>
    </div>
  );
};

export default BackLink;
