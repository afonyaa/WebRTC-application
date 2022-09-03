export interface PageRoute {
  path?: string;
  index?: boolean;
  element: any;
  private: boolean;
  baseLinkName: string;
  children?: PageRoute[];
}
