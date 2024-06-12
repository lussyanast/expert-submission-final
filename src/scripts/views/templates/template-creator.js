import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <h1 class="resto__name">${resto.name}</h1>
  <img class="resto__pic" 
    src="${CONFIG.BASE_IMAGE_URL.MEDIUM(resto.pictureId)}" alt="Resto pic">
  <div class="resto__info">
    <h2 class="rating">⭐️${resto.rating}</h2>
    <ul class="detail-info">
      <h3>City</h3>
      <p>${resto.city}</p>
      <h3>Address</h3>
      <p>${resto.address}</p>
      <h3>Categories</h3>
      <p>${resto.categories.map((category) => category.name).join(', ')}</p>
      <h3>Menu</h3>
      <p><b>Foods: </b>${resto.menus.foods
    .map((food) => food.name)
    .join(', ')}</p>
      <p><b>Drinks: </b>${resto.menus.drinks
    .map((drink) => drink.name)
    .join(', ')}</p>
      <h3>Description</h3>
      <p>${resto.description}</p>
      <ul class="review">
      <h3 class="review-brand">Customer Reviews</h3>
      <ul>
        ${resto.customerReviews
    .map(
      (review) => `
          <li>
            <strong>${review.name}</strong> (${review.date}): ${review.review}
          </li>
        `,
    )
    .join('')}
        </ul>
      </ul>
    </ul>
  </div>
`;

const createRestoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img class="resto-item__header__pic" alt="${resto.name}"
           src="${CONFIG.BASE_IMAGE_URL.LARGE(
    resto.pictureId,
  )}" alt="Resto pic" loading="lazy">
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${
  resto.rating
}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3><a href="/#/detail/${resto.id}">${resto.name}</a></h3>
      <p>${resto.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="likeButton">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likedButton" class="likedButton">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
