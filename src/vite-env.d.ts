/// <reference types="vite/client" />

declare module '@design-system' {
  export { Button } from '../../design-system/components/Button';
  export { Badge } from '../../design-system/components/Badge';
  export { Dropdown } from '../../design-system/components/Dropdown';
  export { Sidebar } from '../../design-system/components/Sidebar';
  export { TopBar } from '../../design-system/components/TopBar';
  export { Table } from '../../design-system/components/Table';
  export { Quote } from '../../design-system/components/Quote';
  export * from '../../design-system/components/SearchInput';
  export * from '../../design-system';
}

declare module '@design-system/*' {
  const content: any;
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

