import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class ButtonComponent {
  text = input('')

  variant = input<'primary' | 'outline'>('primary')

  classes = computed(() => ({
    primary: this.variant() === 'primary',
    outline: this.variant() === 'outline',
  }))
}
