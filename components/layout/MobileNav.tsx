'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { navLinks } from '@/lib/nav';
import { Button } from '@/components/ui/Button';

interface MobileNavProps {
  onClose: () => void;
}

export function MobileNav({ onClose }: MobileNavProps) {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  return (
    <div className="md:hidden border-t">
      <div className="py-4 space-y-2">
        {navLinks.map((link) => (
          <div key={link.href}>
            <button
              onClick={() =>
                setExpandedMenu(expandedMenu === link.href ? null : link.href)
              }
              className="w-full flex justify-between items-center px-4 py-2 text-dark hover:bg-gray-100 rounded"
            >
              <Link href={link.href} onClick={onClose}>
                {link.label}
              </Link>
              {link.submenu && (
                <svg
                  className={`w-4 h-4 transition-transform ${
                    expandedMenu === link.href ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              )}
            </button>

            {link.submenu && expandedMenu === link.href && (
              <div className="pl-4 space-y-1 bg-gray-50">
                {link.submenu.map((sublink) => (
                  <Link
                    key={sublink.href}
                    href={sublink.href}
                    onClick={onClose}
                    className="block px-4 py-2 text-sm text-dark hover:text-primary"
                  >
                    {sublink.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        <div className="px-4 pt-4 border-t">
          <Button fullWidth variant="primary">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
