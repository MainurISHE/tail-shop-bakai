import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Container } from '../../shared/ui/container/container';
import { Header } from '../../shared/ui/header/header';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [Container, RouterOutlet, Header],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {}
