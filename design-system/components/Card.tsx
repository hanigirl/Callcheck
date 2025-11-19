
type CardProps = {
  as?: keyof JSX.IntrinsicElements;
  padding?: 'none' | 'sm' | 'md';
  elevated?: boolean;
  className?: string;
  [key: string]: any;
};

const paddings = {
  none: 'p-0',
  sm: 'p-3',
  md: 'p-6',
};

export function Card({ as: Tag = 'div', padding = 'md', elevated = true, className = '', ...rest }: CardProps) {
  return (
    <Tag
      className={`bg-bg rounded-cc-16 ${elevated ? 'shadow-subtle' : ''} ${paddings[padding]} ${className}`}
      {...rest}
    />
  );
}
