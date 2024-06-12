Feature('Liking Restaurant');

Scenario('test like and unlike', ({ I }) => {
  I.amOnPage('/');
  I.wait(5);
  I.seeElement('.resto-item__content a');
  I.wait(2);
  I.click(locate('.resto-item__content a').first());
  I.wait(2);
  I.seeElement('#likeButton');
  I.wait(2);
  I.click('#likeButton');
  I.wait(2);
  I.amOnPage('/#/like');
  I.wait(2);
  I.seeElement('.resto-item');
  I.wait(2);
  I.seeElement('.resto-item__content a');
  I.wait(2);
  I.click(locate('.resto-item__content a').first());
  I.wait(2);
  I.seeElement('#likedButton');
  I.wait(2);
  I.click('#likedButton');
  I.wait(2);
  I.amOnPage('/#/like');
  I.wait(5);
});
