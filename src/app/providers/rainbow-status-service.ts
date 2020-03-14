import { Injectable } from '@angular/core';

@Injectable()
export class RainbowStatusService {
    private isOn = false;

    setStatus(status: boolean) {
        this.isOn = status;
    }

    toggle() {
        this.isOn = !this.isOn;
    }

    isTurnOn(): boolean {
        return this.isOn;
    }
}
