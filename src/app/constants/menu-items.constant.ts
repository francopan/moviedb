import { MenuItem } from 'primeng/api';

export const menuItems: Array<MenuItem> = [
  {
    label: 'Movies',
    icon: 'pi pi-video',
    items: [
      {
        label: 'Popular',
        icon: 'pi pi-arrow-up-right',
        routerLink: '/movie/popular',
      },
    ],
  },
];
