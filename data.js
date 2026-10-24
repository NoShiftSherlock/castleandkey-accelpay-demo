/* Castle & Key demo data. Snapshot 2026-10-24.
 * CATALOG: products, prices, copy and images from castleandkey.com (/products.json).
 * RETAILERS / VARIANTS: AccelPay/LiquidCommerce retailer variants (active, stock 1 to 8,999,
 *   active retailer, not test, not Gopuff), matched on brand and product name, plus Main
 *   Street Liquor (San Diego) from its inventory sheet. Capped at the 5 cheapest retailers
 *   per state per product for display (the coverage page has all 70).
 *   Three retailers are excluded on purpose (Josh, 2026-10-24).
 * Products with no in-state retailer use the illustrative "Licensed retailer in <state>"
 * route at the site price. Gopuff: 0 locations (live brand-facet check, 2026-10-24).
 */
window.DEMO_DATA = {
 "STATE_COUNTS": {
  "CA": 5,
  "TX": 52,
  "CO": 2,
  "NY": 5,
  "NJ": 2,
  "IL": 1,
  "CT": 1,
  "FL": 1,
  "MA": 1
 },
 "STORAGE_KEY": "castleandkey-shopify-demo-v1",
 "RB_URL": "https://www.reservebar.com/search?q=castle%20%26%20key",
 "NO_SHIP": [
  "AR",
  "MS",
  "MT",
  "UT"
 ],
 "TRY_ZIPS": "77006, 10007 or 90046",
 "CATALOG": {
  "bourbon": {
   "id": "bourbon",
   "handle": "small-batch-bourbon",
   "name": "Castle & Key Small Batch Bourbon",
   "line": "Kentucky straight bourbon · 6 years",
   "type": "Bourbon",
   "size": "750ml",
   "image": "assets/prod-bourbon.jpg",
   "sitePrice": 5500,
   "desc": "<p>Aged for six years, Castle &amp; Key Small Batch Bourbon is the culmination of patience and craft. Our proprietary Kentucky Bourbon reflects the depth, balance, and character that define Castle &amp; Key.</p><p>Each batch is hand-selected and blended to highlight rich notes of oak, vanilla, and baking spice, layered with a smooth sweetness that lingers. Perfect for sipping neat, over ice, or as the base of a timeless cocktail, this bourbon honors tradition while looking to the future.</p><p>Crafted and aged at our historic Kentucky distillery, every bottle represents our dedication to creating spirits worth sharing.</p>",
   "url": "https://castleandkey.com/products/small-batch-bourbon"
  },
  "wheated": {
   "id": "wheated",
   "handle": "small-batch-7-year-wheated-bourbon",
   "name": "Castle & Key Small Batch Wheated Bourbon",
   "line": "Wheated Kentucky straight bourbon",
   "type": "Bourbon",
   "size": "750ml",
   "image": "assets/prod-wheated.jpg",
   "sitePrice": 6000,
   "desc": "<p>Aged for five years, Castle &amp; Key Small Batch Wheated Bourbon offers a softer, sweeter expression of our flagship bourbon. By replacing rye with wheat, this blend delivers a round mouthfeel, gentle spice, and a smooth, balanced finish.</p><p>Expect warm notes of cane sugar, dried fruit, and toasted oak, crafted to be approachable yet complex. Enjoy it neat, over ice, or in your favorite classic cocktail.</p><p>Made with care at our restored Castle &amp; Key Distillery, this wheated bourbon reimagines tradition with every sip.</p>",
   "url": "https://castleandkey.com/products/small-batch-7-year-wheated-bourbon"
  },
  "rye": {
   "id": "rye",
   "handle": "2025-restoration-rye-whiskey",
   "name": "Castle & Key Restoration Rye Whiskey",
   "line": "Kentucky rye whiskey · 5 years",
   "type": "Rye",
   "size": "750ml",
   "image": "assets/prod-rye.jpg",
   "sitePrice": 5500,
   "desc": "<p>Aged for five years, Castle &amp; Key Restoration Rye Whiskey is a bold reflection of time, character, and craft. Crafted from hand-selected barrels to highlight rye’s signature spice and depth.</p><p>Look for vibrant layers of baking spice, candied citrus, and toasted oak balanced by a smooth, lingering finish. Restoration Rye is equally at home in a Manhattan, an Old Fashioned, or savored neat.</p><p>Distilled and aged at our historic Kentucky distillery, it stands as a testament to our ongoing commitment to quality and restoration.</p>",
   "url": "https://castleandkey.com/products/2025-restoration-rye-whiskey"
  },
  "ror": {
   "id": "ror",
   "handle": "roots-of-ruin-gin",
   "name": "Castle & Key Roots of Ruin Gin",
   "line": "Gin · eight botanicals",
   "type": "Gin",
   "size": "750ml",
   "image": "assets/prod-ror.jpg",
   "sitePrice": 3600,
   "desc": "<p>Crafted with eight distinctive botanicals, Castle &amp; Key Roots of Ruin Gin redefines what modern gin can be. Its layered profile highlights chamomile, ginger, and rosemary, three botanicals that give this gin its bright, aromatic complexity.</p><p>Expect a harmonious balance of citrus, spice, and herbal depth with a smooth, floral finish. Versatile and expressive, it shines in a Gin &amp; Tonic, Martini, or Negroni.</p><p>Distilled and bottled at our Kentucky distillery, Roots of Ruin reflects our commitment to craftsmanship and the art of thoughtful blending.</p>",
   "url": "https://castleandkey.com/products/roots-of-ruin-gin"
  },
  "vodka": {
   "id": "vodka",
   "handle": "sacred-spring-vodka",
   "name": "Castle & Key Sacred Spring Vodka",
   "line": "Vodka · Kentucky spring water",
   "type": "Vodka",
   "size": "750ml",
   "image": "assets/prod-vodka.jpg",
   "sitePrice": 3000,
   "desc": "<p>Crafted from grain to glass at our historic Kentucky distillery, Castle &amp; Key Sacred Springs Vodka is a celebration of purity, balance, and precision. Made using limestone-rich spring water from our sacred source and carefully distilled in small batches, it delivers exceptional clarity and a silky, refined texture.</p><p>Expect a clean, crisp profile with subtle notes of sweet grain, soft vanilla, and a hint of minerality. Its smooth finish and gentle mouthfeel make it the perfect foundation for classic cocktails or elegant enough to enjoy neat.</p>",
   "url": "https://castleandkey.com/products/sacred-spring-vodka"
  },
  "caskwheated": {
   "id": "caskwheated",
   "handle": "wheated-cask-strength",
   "name": "Castle & Key Cask Strength Wheated Bourbon",
   "line": "7 years · 108.2 proof",
   "type": "Bourbon",
   "size": "750ml",
   "image": "assets/prod-caskwheated.jpg",
   "sitePrice": 7000,
   "desc": "<p>Aged for seven years and bottled at cask strength, Castle &amp; Key Cask Strength Wheated Bourbon delivers a bold yet beautifully balanced expression of our wheated mash bill. Bottled straight from the barrel at 108.2 proof (54.1% ABV), it offers depth, texture, and complexity without compromise.</p><p>The aroma opens with notes of oatmeal raisin cookie, vanilla frosting, baked peach, and candied pear, lifted by hints of orange peel, lilac, and soft cinnamon. On the palate, layers of almond pastry, butterscotch, and macaroon unfold alongside baking chocolate, dried cranberry, clove, and subtle floral tones.</p>",
   "url": "https://castleandkey.com/products/wheated-cask-strength"
  },
  "harvest": {
   "id": "harvest",
   "handle": "harvest-2021-seasonal-gin",
   "name": "Castle & Key Harvest Gin",
   "line": "Seasonal gin · fall and winter",
   "type": "Gin",
   "size": "750ml",
   "image": "assets/prod-harvest.jpg",
   "sitePrice": 3800,
   "desc": "<p>Castle &amp; Key Harvest Gin brings the warmth and depth of fall and winter to your glass. Crafted with a blend of botanicals that evoke the season, it features notes of cedar, licorice, dark berries, fennel, clove, and soft pepper.</p><p>Originally a seasonal favorite, Harvest Gin is now a year-round expression that celebrates balance, spice, and complexity. Enjoy it in a spiced Negroni, gin Old Fashioned, or simply with tonic and a twist of orange.</p><p>Distilled and bottled at our historic Kentucky distillery, Harvest Gin reflects the artistry of flavor and the comfort of the season.</p>",
   "url": "https://castleandkey.com/products/harvest-2021-seasonal-gin"
  },
  "rise": {
   "id": "rise",
   "handle": "rise-2021-spring-gin",
   "name": "Castle & Key Rise Gin",
   "line": "Seasonal gin · spring and summer",
   "type": "Gin",
   "size": "750ml",
   "image": "assets/prod-rise.jpg",
   "sitePrice": 3800,
   "desc": "<p>Castle &amp; Key Rise Gin captures the bright, floral character of spring and summer. This elegant gin balances sweet lavender and chamomile with fresh citrus, dark berries, and gentle spice for a refreshingly vibrant profile.</p><p>A former seasonal release turned permanent favorite, Rise Gin celebrates renewal and creativity with every pour. Perfect in a Gin &amp; Tonic with fresh herbs, a floral spritz, or a citrus-forward martini.</p><p>Distilled and bottled at our Kentucky distillery, Rise Gin reflects the vitality of the land and the artistry at the heart of Castle &amp; Key.</p>",
   "url": "https://castleandkey.com/products/rise-2021-spring-gin"
  },
  "haitian": {
   "id": "haitian",
   "handle": "castle-key-experimental-series-extra-old-haitian-rhum",
   "name": "Experimental Series: Extra Old Haitian Rhum",
   "line": "Restoration Rye finished in rhum casks",
   "type": "Rye",
   "size": "750ml",
   "image": "assets/prod-haitian.jpg",
   "sitePrice": 8500,
   "desc": "<p>Our Restoration Rye has always been a spirit of character: bold, layered, and rooted in Kentucky craftsmanship. For this expression, we followed curiosity across the Atlantic to Haiti, where rhum agricole is made not from molasses but from fresh-pressed sugar cane juice , a tradition as deliberate and unhurried as our own.</p><p>After four years of aging in Kentucky, our Rye spent 13 additional months resting in those storied Haitian rhum barrels. What emerged is a conversation between two distinct spirits cultures: the spice and structure of our rye meeting the deep, tropical richness of the Caribbean.</p><p>Available online and in retailers across the nation.</p>",
   "url": "https://castleandkey.com/products/castle-key-experimental-series-extra-old-haitian-rhum"
  }
 },
 "RETAILERS": {
  "21st-vine-wine-liquor-new-york": {
   "name": "21st & Vine Wine & Liquor",
   "city": "New York, NY",
   "state": "NY",
   "type": "shipping"
  },
  "gordon-s-fine-wines-liquors-waltham": {
   "name": "Gordon's Fine Wines & Liquors",
   "city": "Waltham, MA",
   "state": "MA",
   "type": "shipping"
  },
  "specs-145-troup": {
   "name": "Spec's #145",
   "city": "Troup, TX",
   "state": "TX",
   "type": "shipping"
  },
  "mission-wine-spirits-pasadena": {
   "name": "Mission Wine & Spirits",
   "city": "Pasadena, CA",
   "state": "CA",
   "type": "shipping"
  },
  "beverage-boss-new-haven": {
   "name": "Beverage Boss",
   "city": "New Haven, CT",
   "state": "CT",
   "type": "shipping"
  },
  "wine-liquor-depot-van-nuys": {
   "name": "Wine & Liquor Depot",
   "city": "Van Nuys, CA",
   "state": "CA",
   "type": "shipping"
  },
  "heritage-wine-and-more-centennial": {
   "name": "Heritage Wine and More",
   "city": "Centennial, CO",
   "state": "CO",
   "type": "shipping"
  },
  "on-the-rocks-wine-liquors-sunset-park": {
   "name": "On The Rocks Wine & Liquors",
   "city": "Sunset Park, NY",
   "state": "NY",
   "type": "shipping"
  },
  "ez-liquor-sanford": {
   "name": "EZ Liquor",
   "city": "Sanford, FL",
   "state": "FL",
   "type": "shipping"
  },
  "liquor-barn-wheeling": {
   "name": "Liquor Barn",
   "city": "Wheeling, IL",
   "state": "IL",
   "type": "shipping"
  },
  "w-j-liquor-brooklyn": {
   "name": "W & J Liquor",
   "city": "Brooklyn, NY",
   "state": "NY",
   "type": "shipping"
  },
  "remedy-tx-sugar-land": {
   "name": "Remedy TX",
   "city": "Sugar Land, TX",
   "state": "TX",
   "type": "shipping"
  },
  "bottle-republic-somerset": {
   "name": "Bottle Republic",
   "city": "Somerset, NJ",
   "state": "NJ",
   "type": "shipping"
  },
  "cottage-drive-in-liquor-san-diego": {
   "name": "Cottage Drive-In Liquor",
   "city": "San Diego, CA",
   "state": "CA",
   "type": "shipping"
  },
  "continental-wine-spirits-fresh-meadows": {
   "name": "Continental Wine & Spirits",
   "city": "Fresh Meadows, NY",
   "state": "NY",
   "type": "shipping"
  },
  "blue-streak-wines-spirits-long-island-city": {
   "name": "Blue Streak Wines & Spirits",
   "city": "Long Island City, NY",
   "state": "NY",
   "type": "shipping"
  },
  "specs-199-pasadena": {
   "name": "Spec's #199",
   "city": "Pasadena, TX",
   "state": "TX",
   "type": "shipping"
  },
  "specs-15-spring": {
   "name": "Spec's #15",
   "city": "Spring, TX",
   "state": "TX",
   "type": "shipping"
  },
  "specs-53-spring-valley-village": {
   "name": "Spec's #53",
   "city": "Spring Valley Village, TX",
   "state": "TX",
   "type": "shipping"
  },
  "specs-94-el-paso": {
   "name": "Spec's #94",
   "city": "El Paso, TX",
   "state": "TX",
   "type": "shipping"
  },
  "specs-8-katy": {
   "name": "Spec's #8",
   "city": "Katy, TX",
   "state": "TX",
   "type": "shipping"
  },
  "mayfair-liquors-denver": {
   "name": "Mayfair Liquors",
   "city": "Denver, CO",
   "state": "CO",
   "type": "shipping"
  },
  "gary-s-wine-marketplace-bernardsville-bernardsville": {
   "name": "Gary's Wine & Marketplace - Bernardsville",
   "city": "Bernardsville, NJ",
   "state": "NJ",
   "type": "shipping"
  },
  "main-street-liquor-san-diego": {
   "name": "Main Street Liquor",
   "city": "San Diego, CA",
   "state": "CA",
   "type": "shipping"
  }
 },
 "VARIANTS": {
  "harvest": [
   {
    "r": "specs-145-troup",
    "price": 3831,
    "stock": 7
   },
   {
    "r": "gordon-s-fine-wines-liquors-waltham",
    "price": 3999,
    "stock": 2
   },
   {
    "r": "beverage-boss-new-haven",
    "price": 4068,
    "stock": 2
   },
   {
    "r": "mission-wine-spirits-pasadena",
    "price": 4199,
    "stock": 10
   },
   {
    "r": "21st-vine-wine-liquor-new-york",
    "price": 4595,
    "stock": 6
   }
  ],
  "rye": [
   {
    "r": "heritage-wine-and-more-centennial",
    "price": 3999,
    "stock": 1
   },
   {
    "r": "main-street-liquor-san-diego",
    "price": 4299,
    "stock": 19
   },
   {
    "r": "gordon-s-fine-wines-liquors-waltham",
    "price": 4399,
    "stock": 1
   },
   {
    "r": "beverage-boss-new-haven",
    "price": 4948,
    "stock": 1
   },
   {
    "r": "wine-liquor-depot-van-nuys",
    "price": 5899,
    "stock": 4
   },
   {
    "r": "on-the-rocks-wine-liquors-sunset-park",
    "price": 6249,
    "stock": 3
   }
  ],
  "rise": [
   {
    "r": "gordon-s-fine-wines-liquors-waltham",
    "price": 3999,
    "stock": 8
   },
   {
    "r": "mission-wine-spirits-pasadena",
    "price": 4199,
    "stock": 15
   }
  ],
  "ror": [
   {
    "r": "mission-wine-spirits-pasadena",
    "price": 3099,
    "stock": 1
   },
   {
    "r": "ez-liquor-sanford",
    "price": 4499,
    "stock": 3
   }
  ],
  "vodka": [
   {
    "r": "main-street-liquor-san-diego",
    "price": 2899,
    "stock": 1
   },
   {
    "r": "beverage-boss-new-haven",
    "price": 3078,
    "stock": 3
   },
   {
    "r": "mission-wine-spirits-pasadena",
    "price": 3099,
    "stock": 2
   },
   {
    "r": "liquor-barn-wheeling",
    "price": 3499,
    "stock": 2
   }
  ],
  "bourbon": [
   {
    "r": "cottage-drive-in-liquor-san-diego",
    "price": 4799,
    "stock": 1000
   },
   {
    "r": "wine-liquor-depot-van-nuys",
    "price": 4799,
    "stock": 1000
   },
   {
    "r": "remedy-tx-sugar-land",
    "price": 4829,
    "stock": 1
   },
   {
    "r": "mission-wine-spirits-pasadena",
    "price": 4999,
    "stock": 1006
   },
   {
    "r": "beverage-boss-new-haven",
    "price": 5278,
    "stock": 1001
   },
   {
    "r": "liquor-barn-wheeling",
    "price": 5499,
    "stock": 6
   },
   {
    "r": "blue-streak-wines-spirits-long-island-city",
    "price": 5499,
    "stock": 1000
   },
   {
    "r": "bottle-republic-somerset",
    "price": 5999,
    "stock": 15
   },
   {
    "r": "continental-wine-spirits-fresh-meadows",
    "price": 6824,
    "stock": 1000
   },
   {
    "r": "w-j-liquor-brooklyn",
    "price": 6995,
    "stock": 2
   },
   {
    "r": "ez-liquor-sanford",
    "price": 16499,
    "stock": 6
   }
  ],
  "wheated": [
   {
    "r": "gary-s-wine-marketplace-bernardsville-bernardsville",
    "price": 5169,
    "stock": 3
   },
   {
    "r": "liquor-barn-wheeling",
    "price": 5499,
    "stock": 4
   },
   {
    "r": "mission-wine-spirits-pasadena",
    "price": 5499,
    "stock": 16
   },
   {
    "r": "main-street-liquor-san-diego",
    "price": 5499,
    "stock": 25
   },
   {
    "r": "specs-94-el-paso",
    "price": 5557,
    "stock": 4
   },
   {
    "r": "specs-199-pasadena",
    "price": 5578,
    "stock": 12
   },
   {
    "r": "specs-15-spring",
    "price": 5578,
    "stock": 4
   },
   {
    "r": "specs-53-spring-valley-village",
    "price": 5578,
    "stock": 4
   },
   {
    "r": "specs-8-katy",
    "price": 5578,
    "stock": 7
   },
   {
    "r": "beverage-boss-new-haven",
    "price": 6048,
    "stock": 2
   },
   {
    "r": "mayfair-liquors-denver",
    "price": 6299,
    "stock": 3
   },
   {
    "r": "ez-liquor-sanford",
    "price": 7999,
    "stock": 3
   }
  ]
 },
 "GOPUFF_ZIPS": []
};
