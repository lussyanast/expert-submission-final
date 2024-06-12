/* eslint-disable no-bitwise */
/* eslint-disable no-redeclare */
/* eslint-disable max-len */
(() => {
  var n;
  var r = {
    936: (n, r, A) => {
      A.d(r, { A: () => a });
      var e = A(354);
      var t = A.n(e);
      var o = A(314);
      var i = A.n(o)()(t());
      i.push([
        n.id,
        '@media screen and (min-width: 650px) {\n    .app-bar {\n      grid-template-columns: 1fr auto;\n      padding: 8px 32px;\n    }\n   \n    .app-bar .app-bar__brand h1 {\n      font-size: 1.5em;\n    }\n   \n    .app-bar .app-bar__menu {\n      display: none;\n    }\n   \n    .app-bar .app-bar__navigation {\n      position: static;\n      width: 100%;\n    }\n   \n    .app-bar .app-bar__navigation ul li {\n      display: inline-block;\n    }\n   \n    .app-bar .app-bar__navigation ul li a {\n      display: inline-block;\n      width: 120px;\n      text-align: center;\n      margin: 0;\n    }\n   \n    .restoss {\n      grid-template-columns: 1fr 1fr;\n    }\n   \n    .resto {\n      grid-template-columns: auto 1fr;\n    }\n   \n    .resto .resto__name {\n      grid-column-start: 1;\n      grid-column-end: 3;\n    }\n   \n    .resto .resto__description {\n      grid-column-start: 1;\n      grid-column-end: 3;\n    }\n  }\n   \n  @media screen and (min-width: 800px) {\n    .app-bar .app-bar__brand h1 {\n      font-size: 2em;\n    }\n  }\n   \n  @media screen and (min-width: 850px) {\n    .restos {\n      grid-template-columns: repeat(3, 1fr);\n    }\n  }\n   \n  @media screen and (min-width: 1200px) {\n    .restos {\n      grid-template-columns: repeat(4, 1fr);\n    }\n  }\n   \n  @media screen and (min-width: 1600px) {\n    .restos {\n        grid-template-columns: repeat(5, 1fr);\n    }\n  }',
        '',
        {
          version: 3,
          sources: ['webpack://./src/styles/responsive.css'],
          names: [],
          mappings:
            'AAAA;IACI;MACE,+BAA+B;MAC/B,iBAAiB;IACnB;;IAEA;MACE,gBAAgB;IAClB;;IAEA;MACE,aAAa;IACf;;IAEA;MACE,gBAAgB;MAChB,WAAW;IACb;;IAEA;MACE,qBAAqB;IACvB;;IAEA;MACE,qBAAqB;MACrB,YAAY;MACZ,kBAAkB;MAClB,SAAS;IACX;;IAEA;MACE,8BAA8B;IAChC;;IAEA;MACE,+BAA+B;IACjC;;IAEA;MACE,oBAAoB;MACpB,kBAAkB;IACpB;;IAEA;MACE,oBAAoB;MACpB,kBAAkB;IACpB;EACF;;EAEA;IACE;MACE,cAAc;IAChB;EACF;;EAEA;IACE;MACE,qCAAqC;IACvC;EACF;;EAEA;IACE;MACE,qCAAqC;IACvC;EACF;;EAEA;IACE;QACI,qCAAqC;IACzC;EACF',
          sourcesContent: [
            '@media screen and (min-width: 650px) {\r\n    .app-bar {\r\n      grid-template-columns: 1fr auto;\r\n      padding: 8px 32px;\r\n    }\r\n   \r\n    .app-bar .app-bar__brand h1 {\r\n      font-size: 1.5em;\r\n    }\r\n   \r\n    .app-bar .app-bar__menu {\r\n      display: none;\r\n    }\r\n   \r\n    .app-bar .app-bar__navigation {\r\n      position: static;\r\n      width: 100%;\r\n    }\r\n   \r\n    .app-bar .app-bar__navigation ul li {\r\n      display: inline-block;\r\n    }\r\n   \r\n    .app-bar .app-bar__navigation ul li a {\r\n      display: inline-block;\r\n      width: 120px;\r\n      text-align: center;\r\n      margin: 0;\r\n    }\r\n   \r\n    .restoss {\r\n      grid-template-columns: 1fr 1fr;\r\n    }\r\n   \r\n    .resto {\r\n      grid-template-columns: auto 1fr;\r\n    }\r\n   \r\n    .resto .resto__name {\r\n      grid-column-start: 1;\r\n      grid-column-end: 3;\r\n    }\r\n   \r\n    .resto .resto__description {\r\n      grid-column-start: 1;\r\n      grid-column-end: 3;\r\n    }\r\n  }\r\n   \r\n  @media screen and (min-width: 800px) {\r\n    .app-bar .app-bar__brand h1 {\r\n      font-size: 2em;\r\n    }\r\n  }\r\n   \r\n  @media screen and (min-width: 850px) {\r\n    .restos {\r\n      grid-template-columns: repeat(3, 1fr);\r\n    }\r\n  }\r\n   \r\n  @media screen and (min-width: 1200px) {\r\n    .restos {\r\n      grid-template-columns: repeat(4, 1fr);\r\n    }\r\n  }\r\n   \r\n  @media screen and (min-width: 1600px) {\r\n    .restos {\r\n        grid-template-columns: repeat(5, 1fr);\r\n    }\r\n  }',
          ],
          sourceRoot: '',
        },
      ]);
      const a = i;
    },
    919: (n, r, A) => {
      A.d(r, { A: () => a });
      var e = A(354);
      var t = A.n(e);
      var o = A(314);
      var i = A.n(o)()(t());
      i.push([
        n.id,
        '* {\n  font-family: "Nunito", sans-serif;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  background-color: white;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\na {\n  display: inline-block;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n/*\n    AppBar\n  */\n\n.app-bar {\n  padding: 8px 16px;\n  background-color: #f1b4bb;\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  gap: 10px;\n  position: sticky;\n  top: 0;\n  z-index: 99;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n}\n\n.app-bar .app-bar__menu {\n  background-color: #f1b4bb;\n  display: flex;\n  align-items: center;\n}\n\n.app-bar .app-bar__menu button {\n  background-color: #f1b4bb;\n  border: none;\n  min-width: 44px;\n  min-height: 44px;\n  font-size: 18px;\n  padding: 8px;\n  cursor: pointer;\n}\n\n.app-bar .app-bar__menu button:hover {\n  background-color: #fdf0f0;\n}\n\n.app-bar .app-bar__brand {\n  display: flex;\n  align-items: center;\n}\n\n.app-bar .app-bar__brand h1 {\n  color: white;\n  text-transform: uppercase;\n  font-size: 22px;\n  user-select: none;\n}\n\n.app-bar .app-bar__navigation li:hover {\n  background-color: #fdf0f0;\n  border-radius: 1rem;\n}\n\n.app-bar .app-bar__brand img {\n  width: 50px;\n  height: auto;\n  margin-right: 10px;\n}\n\n.app-bar .app-bar__navigation {\n  position: absolute;\n  top: 50px;\n  left: -180px;\n  width: 150px;\n  transition: all 0.3s;\n  padding: 8px;\n  background-color: #f1b4bb;\n  overflow: hidden;\n}\n\n.app-bar .app-bar__navigation.open {\n  left: 0;\n}\n\n.app-bar .app-bar__navigation ul li a {\n  color: white !important;\n  display: inline-block;\n  text-decoration: none;\n  color: black;\n  padding: 8px;\n  margin-bottom: 5px;\n  width: 100%;\n}\n\n.skip-link {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  background-color: #000;\n  color: #fff;\n  padding: 8px;\n  z-index: 9999;\n}\n\n.skip-link:focus {\n  top: 0;\n}\n\n/*\n    Main Content\n  */\n\nmain {\n  padding: 32px;\n  flex: 1;\n}\n\n.content {\n  margin: 0 auto;\n  min-height: 100%;\n}\n\n.content .content__heading {\n  font-weight: normal;\n}\n\n.hero {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 380px;\n  width: 100%;\n  text-align: center;\n  /*background-image: url(../public/images/heros/hero-image_2.jpg);*/\n  background-position: center;\n  position: relative;\n  width: 100%;\n  height: 20vh;\n  overflow: hidden;\n}\n\n.bg-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  z-index: -1; /* Ensure the image stays in the background */\n}\n.hero_inner {\n  color: white;\n  filter: none;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5); /* Adds a dark overlay for text visibility */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 20px;\n}\n\n.hero_title {\n  font-size: 64px;\n}\n\n.hero_tagline {\n  font-size: 16px;\n}\n\n.button {\n  display: inline-block;\n  background-color: #f1b4bb;\n  border: none;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n  padding: 15px 32px;\n  border-radius: 8px;\n  transition-duration: 0.4s;\n}\n\n.button:hover {\n  background-color: #fdf0f0;\n}\n\n.content {\n  padding: 32px;\n}\n\n/*\n    Restos\n  */\n\n.content__heading {\n  width: 100%;\n  margin: 60px auto;\n  text-align: center;\n  color: white;\n  background: #f1b4bb;\n}\n\n.restos {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 16px;\n  margin: 32px 0;\n}\n\n/*\n    Resto Item\n  */\n\n.resto-item {\n  width: 100%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  min-width: 44px;\n  overflow: hidden;\n}\n\n.resto-item__header {\n  position: relative;\n}\n\n.resto-item .resto-item__header .resto-item__header__pic {\n  width: 100%;\n}\n\n.resto-item .resto-item__header .resto-item__header__rating {\n  position: absolute;\n  padding: 8px;\n  bottom: 20px;\n  left: 0;\n  display: inline-block;\n  background-color: black;\n  color: white;\n}\n\n.resto-item\n  .resto-item__header\n  .resto-item__header__rating\n  .resto-item__header__rating__score {\n  margin-left: 10px;\n}\n\n.resto-item .resto-item__content {\n  padding: 16px;\n}\n\n.resto-item .resto-item__content h3 {\n  margin: 0 0 10px 0;\n}\n\n.resto-item .resto-item__content h3 a {\n  color: #db0000;\n  text-decoration: none;\n}\n\n.resto-item .resto-item__content p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4; /* number of lines to show */\n  -webkit-box-orient: vertical;\n}\n\n/*\n    Resto list\n  */\n\n.resto {\n  margin: 0 auto;\n  width: 100%;\n  max-width: 800px;\n  min-width: 44px;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 18px 16px;\n}\n\n.resto .resto__pic {\n  width: 100%;\n  max-width: 400px;\n  display: block;\n  border-radius: 10px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.resto .resto__name {\n  text-align: center;\n  color: #db0000;\n}\n\n.resto .resto__info .rating {\n  color: black;\n}\n\n.resto__info {\n  margin-top: 20px;\n}\n\n.resto .resto__info h2,\nh3 {\n  margin: 8px 0;\n  color: #db0000;\n}\n\n.resto .resto__info h4 {\n  margin: 8px 0;\n}\n\n.resto .review-brand {\n  width: 100%;\n  text-align: center;\n  color: white;\n  background: #f1b4bb;\n}\n\n/*\n  Like\n*/\n.likeButton {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n.likedButton {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n/*\n    Footer\n  */\n\nfooter {\n  background: #f1b4bb;\n  padding: 16px;\n  min-width: 44px;\n}\n\nfooter #footerTools {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 8px;\n}\n\nfooter p {\n  margin-top: 16px;\n\n  text-align: center;\n  color: white;\n}\n\nfooter p a {\n  color: white;\n  text-decoration: none;\n}\n\n/*\n  Button\n*/\n\n.btn {\n  display: inline-block;\n  padding: 12px 24px;\n  background-color: #db0000;\n  border: 1px solid #770000;\n  border-radius: 4px;\n\n  font-weight: 500;\n  font-size: 16px;\n  color: #ffffff;\n\n  cursor: pointer;\n  transition: 0.15s ease-in-out;\n}\n\n.btn:hover {\n  background-color: #db0000bb;\n}\n.btn:active {\n  background-color: #db0000dd;\n}\n.btn:focus-visible {\n  outline: 3px solid #db000055;\n}\n',
        '',
        {
          version: 3,
          sources: ['webpack://./src/styles/style.css'],
          names: [],
          mappings:
            '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',
          sourcesContent: [
            '* {\r\n  font-family: "Nunito", sans-serif;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  background-color: white;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\na {\r\n  display: inline-block;\r\n  min-width: 44px;\r\n  min-height: 44px;\r\n}\r\n\r\n/*\r\n    AppBar\r\n  */\r\n\r\n.app-bar {\r\n  padding: 8px 16px;\r\n  background-color: #f1b4bb;\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto;\r\n  gap: 10px;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 99;\r\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.app-bar .app-bar__menu {\r\n  background-color: #f1b4bb;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.app-bar .app-bar__menu button {\r\n  background-color: #f1b4bb;\r\n  border: none;\r\n  min-width: 44px;\r\n  min-height: 44px;\r\n  font-size: 18px;\r\n  padding: 8px;\r\n  cursor: pointer;\r\n}\r\n\r\n.app-bar .app-bar__menu button:hover {\r\n  background-color: #fdf0f0;\r\n}\r\n\r\n.app-bar .app-bar__brand {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.app-bar .app-bar__brand h1 {\r\n  color: white;\r\n  text-transform: uppercase;\r\n  font-size: 22px;\r\n  user-select: none;\r\n}\r\n\r\n.app-bar .app-bar__navigation li:hover {\r\n  background-color: #fdf0f0;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.app-bar .app-bar__brand img {\r\n  width: 50px;\r\n  height: auto;\r\n  margin-right: 10px;\r\n}\r\n\r\n.app-bar .app-bar__navigation {\r\n  position: absolute;\r\n  top: 50px;\r\n  left: -180px;\r\n  width: 150px;\r\n  transition: all 0.3s;\r\n  padding: 8px;\r\n  background-color: #f1b4bb;\r\n  overflow: hidden;\r\n}\r\n\r\n.app-bar .app-bar__navigation.open {\r\n  left: 0;\r\n}\r\n\r\n.app-bar .app-bar__navigation ul li a {\r\n  color: white !important;\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  color: black;\r\n  padding: 8px;\r\n  margin-bottom: 5px;\r\n  width: 100%;\r\n}\r\n\r\n.skip-link {\r\n  position: absolute;\r\n  top: -40px;\r\n  left: 0;\r\n  background-color: #000;\r\n  color: #fff;\r\n  padding: 8px;\r\n  z-index: 9999;\r\n}\r\n\r\n.skip-link:focus {\r\n  top: 0;\r\n}\r\n\r\n/*\r\n    Main Content\r\n  */\r\n\r\nmain {\r\n  padding: 32px;\r\n  flex: 1;\r\n}\r\n\r\n.content {\r\n  margin: 0 auto;\r\n  min-height: 100%;\r\n}\r\n\r\n.content .content__heading {\r\n  font-weight: normal;\r\n}\r\n\r\n.hero {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-height: 380px;\r\n  width: 100%;\r\n  text-align: center;\r\n  /*background-image: url(../public/images/heros/hero-image_2.jpg);*/\r\n  background-position: center;\r\n  position: relative;\r\n  width: 100%;\r\n  height: 20vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.bg-image {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  z-index: -1; /* Ensure the image stays in the background */\r\n}\r\n.hero_inner {\r\n  color: white;\r\n  filter: none;\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.5); /* Adds a dark overlay for text visibility */\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  padding: 20px;\r\n}\r\n\r\n.hero_title {\r\n  font-size: 64px;\r\n}\r\n\r\n.hero_tagline {\r\n  font-size: 16px;\r\n}\r\n\r\n.button {\r\n  display: inline-block;\r\n  background-color: #f1b4bb;\r\n  border: none;\r\n  color: white;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n  padding: 15px 32px;\r\n  border-radius: 8px;\r\n  transition-duration: 0.4s;\r\n}\r\n\r\n.button:hover {\r\n  background-color: #fdf0f0;\r\n}\r\n\r\n.content {\r\n  padding: 32px;\r\n}\r\n\r\n/*\r\n    Restos\r\n  */\r\n\r\n.content__heading {\r\n  width: 100%;\r\n  margin: 60px auto;\r\n  text-align: center;\r\n  color: white;\r\n  background: #f1b4bb;\r\n}\r\n\r\n.restos {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\r\n  gap: 16px;\r\n  margin: 32px 0;\r\n}\r\n\r\n/*\r\n    Resto Item\r\n  */\r\n\r\n.resto-item {\r\n  width: 100%;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  border-radius: 8px;\r\n  min-width: 44px;\r\n  overflow: hidden;\r\n}\r\n\r\n.resto-item__header {\r\n  position: relative;\r\n}\r\n\r\n.resto-item .resto-item__header .resto-item__header__pic {\r\n  width: 100%;\r\n}\r\n\r\n.resto-item .resto-item__header .resto-item__header__rating {\r\n  position: absolute;\r\n  padding: 8px;\r\n  bottom: 20px;\r\n  left: 0;\r\n  display: inline-block;\r\n  background-color: black;\r\n  color: white;\r\n}\r\n\r\n.resto-item\r\n  .resto-item__header\r\n  .resto-item__header__rating\r\n  .resto-item__header__rating__score {\r\n  margin-left: 10px;\r\n}\r\n\r\n.resto-item .resto-item__content {\r\n  padding: 16px;\r\n}\r\n\r\n.resto-item .resto-item__content h3 {\r\n  margin: 0 0 10px 0;\r\n}\r\n\r\n.resto-item .resto-item__content h3 a {\r\n  color: #db0000;\r\n  text-decoration: none;\r\n}\r\n\r\n.resto-item .resto-item__content p {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 4; /* number of lines to show */\r\n  -webkit-box-orient: vertical;\r\n}\r\n\r\n/*\r\n    Resto list\r\n  */\r\n\r\n.resto {\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  max-width: 800px;\r\n  min-width: 44px;\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  gap: 18px 16px;\r\n}\r\n\r\n.resto .resto__pic {\r\n  width: 100%;\r\n  max-width: 400px;\r\n  display: block;\r\n  border-radius: 10px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.resto .resto__name {\r\n  text-align: center;\r\n  color: #db0000;\r\n}\r\n\r\n.resto .resto__info .rating {\r\n  color: black;\r\n}\r\n\r\n.resto__info {\r\n  margin-top: 20px;\r\n}\r\n\r\n.resto .resto__info h2,\r\nh3 {\r\n  margin: 8px 0;\r\n  color: #db0000;\r\n}\r\n\r\n.resto .resto__info h4 {\r\n  margin: 8px 0;\r\n}\r\n\r\n.resto .review-brand {\r\n  width: 100%;\r\n  text-align: center;\r\n  color: white;\r\n  background: #f1b4bb;\r\n}\r\n\r\n/*\r\n  Like\r\n*/\r\n.likeButton {\r\n  width: 55px;\r\n  height: 55px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #db0000;\r\n\r\n  position: fixed;\r\n  bottom: 16px;\r\n  right: 16px;\r\n  border-radius: 50%;\r\n  border: 0;\r\n\r\n  font-size: 18px;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n.likedButton {\r\n  width: 55px;\r\n  height: 55px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #db0000;\r\n\r\n  position: fixed;\r\n  bottom: 16px;\r\n  right: 16px;\r\n  border-radius: 50%;\r\n  border: 0;\r\n\r\n  font-size: 18px;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n/*\r\n    Footer\r\n  */\r\n\r\nfooter {\r\n  background: #f1b4bb;\r\n  padding: 16px;\r\n  min-width: 44px;\r\n}\r\n\r\nfooter #footerTools {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 8px;\r\n}\r\n\r\nfooter p {\r\n  margin-top: 16px;\r\n\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\nfooter p a {\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\n/*\r\n  Button\r\n*/\r\n\r\n.btn {\r\n  display: inline-block;\r\n  padding: 12px 24px;\r\n  background-color: #db0000;\r\n  border: 1px solid #770000;\r\n  border-radius: 4px;\r\n\r\n  font-weight: 500;\r\n  font-size: 16px;\r\n  color: #ffffff;\r\n\r\n  cursor: pointer;\r\n  transition: 0.15s ease-in-out;\r\n}\r\n\r\n.btn:hover {\r\n  background-color: #db0000bb;\r\n}\r\n.btn:active {\r\n  background-color: #db0000dd;\r\n}\r\n.btn:focus-visible {\r\n  outline: 3px solid #db000055;\r\n}\r\n',
          ],
          sourceRoot: '',
        },
      ]);
      const a = i;
    },
    47: (n, r, A) => {
      var e = A(72);
      var t = A.n(e);
      var o = A(825);
      var i = A.n(o);
      var a = A(659);
      var p = A.n(a);
      var d = A(56);
      var s = A.n(d);
      var l = A(540);
      var E = A.n(l);
      var B = A(113);
      var C = A.n(B);
      var c = A(936);
      var b = {};
      (b.styleTagTransform = C()),
      (b.setAttributes = s()),
      (b.insert = p().bind(null, 'head')),
      (b.domAPI = i()),
      (b.insertStyleElement = E()),
      t()(c.A, b),
      c.A && c.A.locals && c.A.locals;
    },
    966: (n, r, A) => {
      var e = A(72);
      var t = A.n(e);
      var o = A(825);
      var i = A.n(o);
      var a = A(659);
      var p = A.n(a);
      var d = A(56);
      var s = A.n(d);
      var l = A(540);
      var E = A.n(l);
      var B = A(113);
      var C = A.n(B);
      var c = A(919);
      var b = {};
      (b.styleTagTransform = C()),
      (b.setAttributes = s()),
      (b.insert = p().bind(null, 'head')),
      (b.domAPI = i()),
      (b.insertStyleElement = E()),
      t()(c.A, b),
      c.A && c.A.locals && c.A.locals;
    },
  };
  var A = {};
  function e(n) {
    var t = A[n];
    if (void 0 !== t) return t.exports;
    var o = (A[n] = { id: n, exports: {} });
    return r[n](o, o.exports, e), o.exports;
  }
  (e.m = r),
  (n = []),
  (e.O = (r, A, t, o) => {
    if (!A) {
      var i = 1 / 0;
      for (s = 0; s < n.length; s++) {
        for (var [A, t, o] = n[s], a = !0, p = 0; p < A.length; p++) {
          (!1 & o || i >= o) && Object.keys(e.O).every((n) => e.O[n](A[p]))
            ? A.splice(p--, 1)
            : ((a = !1), o < i && (i = o));
        }
        if (a) {
          n.splice(s--, 1);
          var d = t();
          void 0 !== d && (r = d);
        }
      }
      return r;
    }
    o = o || 0;
    for (var s = n.length; s > 0 && n[s - 1][2] > o; s--) n[s] = n[s - 1];
    n[s] = [A, t, o];
  }),
  (e.n = (n) => {
    var r = n && n.__esModule ? () => n.default : () => n;
    return e.d(r, { a: r }), r;
  }),
  (e.d = (n, r) => {
    for (var A in r) {
      e.o(r, A)
          && !e.o(n, A)
          && Object.defineProperty(n, A, { enumerable: !0, get: r[A] });
    }
  }),
  (e.o = (n, r) => Object.prototype.hasOwnProperty.call(n, r)),
  (() => {
    var n = { 182: 0 };
    e.O.j = (r) => n[r] === 0;
    var r = (r, A) => {
      var t;
      var o;
      var [i, a, p] = A;
      var d = 0;
      if (i.some((r) => n[r] !== 0)) {
        for (t in a) e.o(a, t) && (e.m[t] = a[t]);
        if (p) var s = p(e);
      }
      for (r && r(A); d < i.length; d++) (o = i[d]), e.o(n, o) && n[o] && n[o][0](), (n[o] = 0);
      return e.O(s);
    };
    var A = (self.webpackChunkrestaurant_apps_middle_project = self.webpackChunkrestaurant_apps_middle_project || []);
    A.forEach(r.bind(null, 0)), (A.push = r.bind(null, A.push.bind(A)));
  })(),
  (e.nc = void 0);
  var t = e.O(void 0, [411, 738, 646, 720], () => e(857));
  t = e.O(t);
})();
// # sourceMappingURL=app~4e5ec22b.bundle.js.map
