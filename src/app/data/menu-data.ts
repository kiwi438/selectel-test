export interface MenuItem {
  id: number;
  name: string;
  value: number;
  checked: boolean;
}

export interface MenuSection {
  id: number;
  title: string;
  items: MenuItem[];
}

export const MENU_DATA: MenuSection[] = [
  {
    id: 1,
    title: 'Тип 1',
    items: [
      { id: 1, name: 'Item 1', value: 20, checked: false },
      { id: 2, name: 'Item 2', value: 30, checked: false },
      { id: 3, name: 'Item 3', value: 40, checked: false },
      { id: 4, name: 'Item 4', value: 50, checked: false },
    ],
  },
  {
    id: 2,
    title: 'Тип 2',
    items: [
      { id: 5, name: 'Item 5', value: 15, checked: false },
      { id: 6, name: 'Item 6', value: 25, checked: false },
      { id: 7, name: 'Item 7', value: 35, checked: false },
    ],
  },
];
