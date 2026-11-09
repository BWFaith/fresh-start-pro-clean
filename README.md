# Fresh Start Pro Clean – Website
Open index.html to preview. Pages: index, about, services, residential, commercial, move-in-out, gallery, faq, contact, booking.
1. Gallery: replace images/ba1-before.jpg ... ba4-after.jpg (keep names, ~900x600).
2. Booking emails: create a free EmailJS account, add a service and ONE template using these variables: {{to_email}}, {{name}}, {{email}}, {{phone}}, {{address}}, {{date}}, {{time}}, {{service}}, {{frequency}}, {{addons}}, {{notes}}, {{quote}}, {{total}}. Set the template's "To" field to {{to_email}}. Paste your keys in js/config.js. The site sends one email to the client and one to the owner.
3. Prices: edit rates, discounts and add-ons in js/config.js (current values are placeholders except move-in/out $65/hr).
4. Edit text directly in the .html files (build.py is optional).
5. Upload the whole folder to any host (Netlify, cPanel, etc.).
