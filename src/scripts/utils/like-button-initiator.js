import FavoriteRestoIdb from '../data/favourite-resto-idb';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({
    likeButtonContainer,
    favoriteRestaurants: FavoriteRestoIdb,
    resto,
  }) {
    this._likeButtonContainer = likeButtonContainer;
    this._resto = resto;
    this._favoriteRestaurants = FavoriteRestoIdb;
    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const resto = await FavoriteRestoIdb.getResto(id);
    return !!resto;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = this._likeButtonContainer.querySelector('#likeButton');
    if (likeButton) {
      likeButton.addEventListener('click', async () => {
        await FavoriteRestoIdb.putResto(this._resto);
        await this._renderButton();
      });
    }
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likedButton = this._likeButtonContainer.querySelector('#likedButton');
    if (likedButton) {
      likedButton.addEventListener('click', async () => {
        await FavoriteRestoIdb.deleteResto(this._resto.id);
        await this._renderButton();
      });
    }
  },
};

export default LikeButtonInitiator;
