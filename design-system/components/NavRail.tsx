import React from 'react';

type Item = { key: string; icon: React.ReactNode; label: string; active?: boolean; onClick?: () => void };

type NavRailProps = { items: Item[]; className?: string };

export function NavRail({ items, className = '' }: NavRailProps) {
  return (
    <nav className={`w-20 h-full bg-rail py-4 flex flex-col items-center gap-10 ${className}`} aria-label="Main">
      {items.map((it) => (
        <button key={it.key} onClick={it.onClick} className="flex flex-col items-center gap-1 text-white">
          <span className="inline-flex size-6 items-center justify-center">{it.icon}</span>
          <span className={`text-[11px] ${it.active ? 'opacity-100' : 'opacity-60'}`}>{it.label}</span>
        </button>
      ))}
    </nav>
  );
}
