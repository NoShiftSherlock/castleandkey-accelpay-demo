# Castle & Key on Shopify with the AccelPay app (private sales demo)

**Private sales demo.** Prepared by AccelPay for a conversation with Castle & Key Distillery. It uses
Castle & Key's name, marks, product images and copy (from castleandkey.com) to show their Shopify
store with the AccelPay Shopify app installed. It is not the live store, is not affiliated
with or endorsed by Castle & Key Distillery, and places no orders. Gopuff, Shopify and ReserveBar marks
belong to their owners. Keep the link unlisted; share it 1:1 only.

Live: https://noshiftsherlock.github.io/castleandkey-accelpay-demo/

## The pitch it shows

castleandkey.com runs on Shopify (confirmed 2026-10-24: `window.Shopify` present, `/products.json`
serves the catalog), with Bottle Nexus handling alcohol checkout today. The demo keeps the
Shopify theme look, the native Shopify cart drawer and the Shopify one-page checkout. The
AccelPay Shopify app takes over payments, taxes and order routing to licensed retailers, so
there is no third-party cart and the order and customer record stay in the brand's Shopify
admin.

Express checkout (Shop Pay, Apple Pay, Google Pay) sits at the top of checkout and in the cart
drawer, as on a standard Shopify store. In the demo the buttons just continue the flow.

| Page | What it shows |
| --- | --- |
| `index.html` | Home: hero, products, ZIP check, "How this works", reordering note |
| `product.html?p=<id>` | Theme product page with an AccelPay availability app block (ZIP, retailer) |
| `checkout.html` | Shopify-style one-page checkout: express buttons plus credit card, AccelPay callouts |
| cart drawer | Theme cart drawer with accelerated checkout buttons on every page |

## Real vs illustrative

Real (snapshot 2026-10-24, see `data.js`):
- Products, images, copy and current site prices from castleandkey.com `/products.json`.
- 70 network retailers in 9 states have Castle & Key in stock: 68 from the
  AccelPay/LiquidCommerce feed (active, in stock), plus Main Street Liquor and Liquor Geeks
  from their own inventory sheets. The demo lists the 5 cheapest per state per product.
- Gopuff: no Castle & Key listing in a live check of 227 Gopuff locations on 2026-10-24.
- Bottle Nexus's own three fulfilling retailers are excluded on purpose from the data, the
  counts and the copy.

Illustrative:
- "Licensed retailer in <state>" routes: where no network retailer stocks a bottle in the
  shopper's state, the demo shows the route the AccelPay network would connect at launch,
  at today's site price.
- Shipping fees and tax are not shown as numbers ("set by retailer").
- Cask Strength Wheated, the Experimental Series rhum finish and the seasonal gins in states
  with no stocking retailer route to an illustrative in-state retailer.
- Today the site ships its own orders in KY, NE, NH, ND and WA and uses Bottle Nexus
  elsewhere; the demo routes every state through AccelPay.
- The card form and the thank-you page. Nothing is charged.

Try ZIPs 77006, 10007 or 90046.

`scripts/refresh-data.sh` re-pulls the retailer rows. Deploy: GitHub Pages serves `main`; a
push is a deploy. Bump `?v=` on `styles.css`, `data.js` and `app.js` when they change.
