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
| doctor (what a doctor sees after scanning a QR pass), summary (printable health summary), privacy | 5 and later |
| design-system | reference for every page |

## Rules
- Design is frozen after review. Development only turns these pages into the real app.
- Colors, sizes and fonts live in `css/styles.css` (variables at the top). Two layouts: auth (photo, blue tint, card) and app (cream page, header).
- `js/app.js` is a working prototype: every page is drawn from one data set and one English and Urdu text list, and the language you pick stays on every page. Data you add, edit, delete, filter or share is kept in this browser tab only (sessionStorage), so it survives moving between pages and resets when you close the tab. Delete account also resets it.
- Sample data is fake. The QR code is a placeholder and cannot be scanned. Prototype code for OTP is 123456; the first visit pages are signed in as a sample user. Log out, then Log in with any valid mobile number.
- All interface text has English and Urdu. Visits, doctors, notes and names you type stay as you typed them.
- `assets/login_back.jpg` is a low-resolution stock photo. Replace it with a licensed high-resolution image.
