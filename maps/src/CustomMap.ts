export interface Mappable {
  location: {
    latitude: number;
    longitude: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }
  addMarker(resource: Mappable): CustomMap {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: resource.location.latitude,
        lng: resource.location.longitude,
      },
    });

    marker.addListener('click', () => {
      const InfoWindow = new google.maps.InfoWindow({
        content: resource.markerContent(),
      });
      InfoWindow.open(this.googleMap, marker);
    });
    return this;
  }
}
