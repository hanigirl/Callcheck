
type ArrowsRightIconProps = {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
};

export function ArrowsRightIcon({
  width = 24,
  height = 24,
  color = '#17171D',
  className = '',
}: ArrowsRightIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block' }}
    >
      <path
        d="M4 17H20M20 17L16 21M20 17L16 13"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 7L4 7M4 7L8 3M4 7L8 11"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
