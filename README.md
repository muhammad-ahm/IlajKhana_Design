# IlajKhana: complete site design (static HTML, CSS, JS)

Open `index.html` in a browser. No server or install needed. Resize the window to check phone and desktop.

## Pages and the sprint that builds each
| Page | Sprint |
|---|---|
| index, signup, login, account, visits, visit-new, visit-detail | 1 and 2 (built) |
| timeline | 3 |
| reminders | 4 |
| share (QR pass and access log) | 5 |
| family, emergency | later |
| design-system | reference for every page |

## Rules
- Design is frozen after review. Development only turns these pages into the real app.
- Colors, sizes and fonts live in `css/styles.css` (variables at the top). Two layouts: auth (photo, blue tint, card) and app (cream page, header).
- `js/app.js` is prototype behavior only: layout, language toggle, step flows, small interactions. Nothing is saved.
- Sample data is fake. The QR code is a placeholder and cannot be scanned.
- The language button swaps the text that has a Urdu version and flips the layout to right-to-left. The full Urdu text is added in development.
- `assets/login_back.jpg` is a low-resolution stock photo. Replace it with a licensed high-resolution image.
