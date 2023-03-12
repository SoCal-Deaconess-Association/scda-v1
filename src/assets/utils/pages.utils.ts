export enum PageType {
  history = 'HISTORY',
  greetings = 'GREETINGS',
  anthem = 'ANTHEM',
}

/**
 * Data for each page.
 */
export type PageContent = {
  /**
   * Name of the page.
   */
  label: string;
  /**
   * URL to navigate to.
   */
  navigate: string;
};

/**
 * All data for all pages that exist in this app.
 */
export const PAGES: { [key in PageType]: PageContent } = {
  [PageType.history]: {
    label: 'History',
    navigate: '/scda-story/history',
  },
  [PageType.greetings]: {
    label: 'Greetings',
    navigate: '/scda-story/greetings',
  },
  [PageType.anthem]: {
    label: 'Anthem',
    navigate: '/scda-story/anthem',
  },
};
