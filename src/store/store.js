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
    this.setLoading(true);
    try {
      await this.getLocations();
      await this.getDistances();
    } catch (err) {
      console.error('Error loading Main page', err);
    } finally {
      this.setLoading(false);
    }
  };

  setLoading(loading) {
    this.loading = loading;
  }

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
    let filteredLocations = this.locations.filter(el => {
      let locationDistance = getDistance(
        {latitude: el.latitude, longitude: el.longitude},
        {latitude: myLat, longitude: myLong},
      );
      let dist = (locationDistance / 1000).toFixed(1);
      el.distance = dist;
      return el;
    });
    this.locations = filteredLocations;
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

  sortLocations = async () => {
    const lat = 59.330596;
    const long = 18.0560967;
    let loc = toJS(this.locations);
    console.log('loc', loc);
    let sortedLoc = loc.sort((a, b) => {
      let posA = Number(a.latitude) - lat + (Number(a.longitude) - long);
      var posB = Number(b.latitude) - long + (Number(b.longitude) - long);

      if (posA > posB) {
        return 1;
      } else if (posA < posB) {
        return -1;
      } else {
        return 0;
      }
    });
    this.locations = sortedLoc;
  };
}

decorate(Store, {
  initialLoad: action,
  setLoading: action,
  followed: observable,
  locations: observable,
  modifiedLocations: observable,
  getLocations: action,
  setLocations: action,
  setFollow: action,
  sortLocations: action,
  getDistances: action,
  distance: observable,
});

export default new Store();
