import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../shared/ui/header/header';
import { FooterComponent } from '../../shared/ui/footer/footer';
import { Container } from '../../shared/ui/container/container';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, Header, FooterComponent, Container],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {}
