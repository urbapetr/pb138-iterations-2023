import type { ReactNode } from 'react';

type ItemWrapperProps = {
  title: string;
  children: ReactNode;
};

export function ItemWrapper({ title, children }: ItemWrapperProps) {
  return (
    <>
      <h2 style={{ textAlign: 'center', margin: 0, marginBottom: '2rem' }}>
        {title}
      </h2>
      <div
        style={{
          display: 'grid',
          gap: '1rem 0.5rem',
          justifyContent: 'flex-start',
          gridTemplateColumns: 'auto auto',
        }}
      >
        {children}
      </div>
    </>
  );
}
