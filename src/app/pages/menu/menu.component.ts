import { Component, computed, signal } from '@angular/core';
import { MENU_DATA, MenuSection, MenuItem } from '../../data/menu-data';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  readonly sections = signal<MenuSection[]>(
    JSON.parse(JSON.stringify(MENU_DATA))
  );

  readonly activeSectionId = signal<number>(MENU_DATA[0].id);

  readonly activeSection = computed(() =>
    this.sections().find((s) => s.id === this.activeSectionId())!
  );

  readonly checkedCount = computed(
    () => this.activeSection().items.filter((item) => item.checked).length
  );

  readonly totalValue = computed(() =>
    this.activeSection()
      .items.filter((item) => item.checked)
      .reduce((sum, item) => sum + item.value, 0)
  );

  selectSection(id: number): void {
    this.activeSectionId.set(id);
  }

  toggleItem(item: MenuItem): void {
    item.checked = !item.checked;
    this.sections.update((sections) => [...sections]);
  }
}
