import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QRCodeComponent } from 'angularx-qrcode';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, QRCodeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  countdownTimer = 120;

  ngOnInit() {
    timer(0, 1000).subscribe(() => {
      this.countdownTimer = this.countdownTimer - 1;
    })
  }
}
