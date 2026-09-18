This is how to build a eccomerce website from scratch with Next.js
Deployed on -- 
  https://2025-ecom-nextjs-from-scratch-lu60on1wl-nick-lacaprias-projects.vercel.app/
If deployment does not work try adding 
  npm install --legacy-peer-deps as install command
If Prisma or native packages fail later, approve them with 
  npm install-scripts approve @prisma/engines bufferutil prisma unrs-resolver
Teachers Edition: 
git@github.com:bradtraversy/prostore.git
Teachers Demo: 
  https://prostore-one.verel.app/z/h 
sfc is a fast way to get a component started in typscript easy with visual studio intellesense.
Using Neon with inside of Vercel
-------------------------------------------------------
Set up this Neon project in the current working directory.

1. `npm i -g neon@latest && neon login`
2. `neon skills -y`
3. `neon mcp -y`
4. `neon link --project-id dark-mouse-15307937 --branch production -y`
5. `neon config init`
6. Update `neon.ts`:

```ts
import { defineConfig } from "@neon/config/v1";

export default defineConfig({
  auth: true,
});
```

7. `neon deploy`
Neon Secrets

-----BEGIN PGP MESSAGE-----

jA0ECQMKCxVG0rsLSmT/0ukBWyePRzlfrMDj01TYzs6t1FaWdtkuMLJX1K+Pu2BI
8jAVzGb/NuRhgTQYUZNQmz0W2nkCKcVzYynLcCrQNLJrnc1yxPcI/BPHx5YRda4a
0SUC4NAc7ZoOuT8k0DbVVx+imICkDkkzexsmlX1/Wj95a/owAm0YuzasrKdu3AQq
bPWB4d8pIPMBIRjF4SI5i6jAyDsrkUCvHuPQxBWRS0zeyA2tVAa7t01YgmxhxTzx
Dhr/gf4HiEOYZk7S3YzgnZ78S3xBnmcHiRnO+3/N6yjNrndqGFoyLR7u9qohOMr/
dQxwFIwFk/CQPZh+wvU7S1tSvF/GSrc6CoihoIZIS7fPLqUtrvis2N9hCGL9P4bW
XOHtsPs6scxd3QxhKLq8V0Arv8sQfH8kjNwNs2Q/wPtPwB8mIf90JDRitr/r5dcu
8yb02DPxkqtIW+XLLQBX9FeBZA3Easd2rTVW2+xy+FQf5k4TRuVfEs+X9IH0JWVC
EZowYmsT1WZ/8lSCYoKokyltHQSpoX7CVh4C7IgnOR43WHBqKTcniR2TX3EMQrCY
/e98990+QDrsAqA2jO7x9Blgh3CsUiM0u8aMJWkN4oFYyzCKqQajTeCDU/1oCr9Q
p4y18e/LeoxsHAvPRGPbLKF5Nm5oob15Lh6oDZm124uQolRSV4nAUn4IdaoRxJY4
/sCwVzvY8pvKpli3FmweRlRf4OLEVp1+b1HSj90glsc2Kw9l2nGSb0OazZUCO9bJ
1Nqg9QxAeP1g1yO7XKgTj7UkBCgLqvFzOJFBRvOl3QaxLZgZ/ytphPmty7FIEaVC
x0Mt6A9i9kvooIqdqblyithW6TBuF7vOgY1gzI8ll/r7awpI1/AOV3/XMiLsOx0+
wH1CCaZkOXCO9pGbfoIFdFhe8i8J//DFsgz0vg7CYRxNx2hYWtVoLnIPh9IMjj5Q
LS4INoru+VyTSI9pMjpfIAbtguZ8iicl/AsL47eya5VEDrPFgH5h5ztKdoQ4n89w
Vo7iOjNiEy+QX2+yn0Vcko4+jGL8Glum+4AFRVnGE/YRWN715umTay8bUPI+fD3g
g2MKFnvdSpXF814hwZo+Nlsbrm3a1OWIRNDm9/VK2s1LNOVOATd3G1A06cmC0P1G
1sS7dcdF2vqQ5MpX2ZYIyUOl7lRnlV7BRphYM9oIJrNsJVA=
=0TSB
-----END PGP MESSAGE-----

Prisma Schema Model
Prisma.io/docs/orm/prisma-schema/data-model/models
Each time you add to or change the prisma schema run these
To Generate the schema run...
  npx prisma generate
To run your migration and sync your schema with your database run ...
  npx prisma migrate dev --name init_whatever_name_you_want
To run the prisma studio that shows everything in your database run ...
  npx prisma studio
WIll be using Next.js server actions instead of api routes beause it is simplier and its a single monothythical application.
To seed into the database you must run ....
  tsc /db/seed.ts
Using Zod for runtime validations and validation schemas which is great for forms npm i zod
You can pick your models from the database section here when using Prisma
  authjs.dev/getting-started/adapters/prisma