export interface ReadingListEntry {
  title: string
  url: string
  /** ISO date (YYYY-MM-DD) that the entry was read */
  dateRead: string
  type?: 'Article' | 'Guide' | 'Walkthrough'
}

// Add new entries here. Newest is shown first regardless of order below.
export const readingList: ReadingListEntry[] = [
  {
    title: 'Kubernetes on Proxmox: A Practical Guide for DevOps',
    url: 'https://www.plural.sh/blog/kubernetes-on-proxmox-guide/',
    dateRead: '2026-09-04',
    type: 'Guide'
  },
  {
    title: 'California Sports Betting: Best Prediction Markets and DFS Options',
    url: 'https://www.si.com/prediction-markets/usa/california',
    dateRead: '2026-09-01',
    type: 'Article'
  }
]
