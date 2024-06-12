import { itActsAsFavoriteRestaurantModel } from './contracts/favoriteRestaurantContract';
import FavoriteRestoIdb from '../src/scripts/data/favourite-resto-idb';

global.structuredClone = (obj) => JSON.parse(JSON.stringify(obj));
describe('Favorite Favorite Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoIdb.getAllResto()).forEach(async (restaurant) => {
      await FavoriteRestoIdb.deleteResto(restaurant.id);
    });
  });
  itActsAsFavoriteRestaurantModel(FavoriteRestoIdb);
});
