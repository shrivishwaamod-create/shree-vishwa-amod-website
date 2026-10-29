# Shree Vishwa-Amod Ayurved & Panchakarma Centre website

This is a responsive static website starter kit made with HTML, CSS and JavaScript. It includes Home, About, Services, Products, Reviews and Contact pages.

## 1. Before publishing: edit the placeholders

Open `script.js` and replace:
- `whatsappNumber`: the clinic's WhatsApp number in international digits-only format. For India, use `91` followed by the 10-digit number. Do not include `+`, spaces or hyphens.
- `youtubeUrl`, `instagramUrl`, `facebookUrl`: the clinic's real public profile links.
- `googleReviewUrl`: the clinic's direct Google review link.
- `googleMapsUrl`: the clinic's real Google Maps directions link.

Also edit the placeholder text in the HTML:
- `ADD YOUR FULL CLINIC ADDRESS HERE`
- `ADD CONFIRMED DAYS AND OPENING HOURS`
- `ADD YOUR PUBLIC BUSINESS NUMBER`
- Doctor's verified qualifications and registration details.
- Product names, descriptions, images and prices.
- Services actually offered by the clinic.

Do not publish invented testimonials. Add genuine reviews only with appropriate permission. Do not publish unsupported medical claims or guaranteed outcomes.

## 2. Preview on your computer

1. Extract the ZIP file.
2. Open the folder.
3. Double-click `index.html` to preview it in your browser.
4. Click through every page and test links.
5. For editing code, install Visual Studio Code: https://code.visualstudio.com/

## 3. Publish free with Cloudflare Pages using GitHub

1. Create/sign in to GitHub: https://github.com/
2. Create a new repository, e.g. `shree-vishwa-amod-website`.
3. Upload all files from this folder to the repository root. Make sure `index.html` is at the root, not inside another nested folder.
4. Create/sign in to Cloudflare: https://dash.cloudflare.com/
5. Open Workers & Pages, choose Create, then Pages, then Import an existing Git repository.
6. Select your GitHub repository.
7. For a plain HTML site, use `exit 0` as the build command if the setup requires one, and set the build output directory to `.` (the repository root). If the dashboard's current interface presents different options, follow the plain HTML instructions in Cloudflare's official guide.
8. Deploy. Cloudflare will provide a temporary `*.pages.dev` address.

Official guide: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/

## 4. Connect your domain

First make sure `shreevishwaamodayurved.com` is registered to you and you can manage its DNS at GoDaddy. If you have not purchased this `.com` domain yet, check availability and register it first. Owning a different `.in` domain does not give you ownership of this `.com` domain.

1. In Cloudflare, open your Pages project > Custom domains > Set up a domain.
2. Enter `shreevishwaamodayurved.com`.
3. Follow Cloudflare's instructions for adding the domain and changing nameservers at GoDaddy if requested.
4. Before changing nameservers, save/check existing DNS records, especially any records used for email.
5. Follow the exact DNS instructions shown in your Cloudflare account. Do not copy DNS values from an unrelated tutorial.
6. Wait for DNS and HTTPS activation, then test both the root domain and `www` version if configured.

Official guide: https://developers.cloudflare.com/pages/configuration/custom-domains/

## 5. Important limitations

- This is a static website. It does not securely store patient records, process payments, or provide a booking database.
- WhatsApp buttons open a chat with a prefilled message. They do not automatically confirm appointments or orders.
- Google Fonts needs an internet connection. The site still has fallback fonts if it cannot load.
- Free platform terms and limits can change. Check the current provider terms before launch.
