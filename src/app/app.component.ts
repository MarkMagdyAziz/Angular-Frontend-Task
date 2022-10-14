import { CartService } from './services/cart.service';
import { TextDirectionController } from './rtl.component';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TransformUS-Task';
  public directionController = new TextDirectionController();

  constructor(private cartService: CartService) {}
  ngOnInit() {}
}
