import { Location, locationManager } from '@rnmapbox/maps';
import { LocationEvent } from '..';

type LocationEventNames = 'locationChange';

export class LocationManager {
    start() {
        locationManager.start();
    }
    /**
     * @example
     * {"coords":
     *  {
     *      "accuracy": 24.95806772832081,
     *      "altitude": 588.2273369943723,
     *      "course": -1,
     *      "heading": 89.29508972167969,
     *      "latitude": 30.673172799689635,
     *      "longitude": 104.00440663503657,
     *      "speed": 0
     *  },
     * "timestamp": 1710852623018.5007
     * }
     */

    async getLastKnownLocation() {
        return await locationManager.getLastKnownLocation();
    }

    on(event: LocationEventNames, listener: (e: LocationEvent) => void) {
        if (event === 'locationChange') {
            locationManager.addListener(listener as any);
        }
    }

    off(event: LocationEventNames, listener: (e: LocationEvent) => void) {
        if (event === 'locationChange') {
            locationManager.removeListener(listener as any);
        }
    }
}
