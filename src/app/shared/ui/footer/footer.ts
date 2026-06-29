import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Container } from '../container/container';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, Container],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {}
