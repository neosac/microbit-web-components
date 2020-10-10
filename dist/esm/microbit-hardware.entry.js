import { r as registerInstance, g as getElement } from './chunk-e22b57f2.js';
import { m as microbitStore } from './chunk-ede9ed58.js';

class MicrobitHardware {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.deviceInformation = null;
        /**
         * The text shown when disconnected
         */
        this.disconnectedText = "Disconnected";
        /**
         * The text shown when no hardware version
         */
        this.noInfo = "No hardware version found";
        microbitStore.addListener(this);
    }
    render() {
        return this.deviceInformation ? this.deviceInformation.hardwareRevision || this.noInfo : this.disconnectedText;
    }
    get el() { return getElement(this); }
}

export { MicrobitHardware as microbit_hardware };