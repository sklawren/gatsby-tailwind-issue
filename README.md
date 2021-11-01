# gatsby-tailwind-issue
Minimal reproduction for Gatsby 4 issue with css modules @apply-ing custom tailwind classes. 

Either of these will crash during the build process because of the css modules:
* `npm start` 
* `npm run watch`
