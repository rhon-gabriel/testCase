import {decorate, observable, action, toJS} from 'mobx';
import fetch from 'node-fetch';
import {getDistance} from 'geolib';

class Store {
  followed = false;
  locations = [];
  modifiedLocations = [];
  distance;

  constructor() {
    this.initialLoad();
  }

  initialLoad = async () => {
    try {
      await this.getLocations();
      await this.getDistances();
    } catch (err) {
      console.error('Error loading Main page', err);
    }
  };

  getLocations = async () => {
    const url =
      'https://storage.googleapis.com/engineering-4b0b7d62/locations_filtered.json';
    try {
      fetch(url)
        .then(response => response.json())
        .then(data => this.setLocations(data));
    } catch (err) {
      console.error('Failed to load locations', err);
    }
  };

  setLocations = async data => {
    this.locations = data;
  };

  getDistances = async () => {
    const myLat = 59.330596;
    const myLong = 18.0560967;
    let distances;
    let toKm;

    let filteredLocations = this.locations.filter(el => {
      distances = getDistance(
        {latitude: el.latitude, longitude: el.longitude},
        {latitude: myLat, longitude: myLong},
      );
      toKm = (distances / 1000).toFixed(1);
      el.distance = toKm;
      return el;
    });

    let sortedLocations = filteredLocations.sort(function(a, b) {
      return a.distance - b.distance;
    });
    this.locations = sortedLocations;
  };

  setFollow = async id => {
    let followedLocation = this.locations.filter(el => {
      if (el.id === id) {
        el.following = !el.following;
      }
      return el;
    });
    this.locations = followedLocation;
  };
}

decorate(Store, {
  initialLoad: action,
  followed: observable,
  locations: observable,
  getLocations: action,
  setLocations: action,
  setFollow: action,
  getDistances: action,
  distance: observable,
});

export default new Store();
