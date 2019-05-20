const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/work/development/gatsby-starter-styled-components/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/work/development/gatsby-starter-styled-components/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/work/development/gatsby-starter-styled-components/src/pages/page-2.js"))),
  "component---src-pages-api-reference-button-mdx": hot(preferDefault(require("/Users/work/development/gatsby-starter-styled-components/src/pages/api-reference/Button.mdx"))),
  "component---src-pages-api-reference-connection-banner-mdx": hot(preferDefault(require("/Users/work/development/gatsby-starter-styled-components/src/pages/api-reference/ConnectionBanner.mdx"))),
  "component---src-pages-api-reference-form-mdx": hot(preferDefault(require("/Users/work/development/gatsby-starter-styled-components/src/pages/api-reference/form.mdx"))),
  "component---src-pages-api-reference-form-checkbox-mdx": hot(preferDefault(require("/Users/work/development/gatsby-starter-styled-components/src/pages/api-reference/form/Checkbox.mdx"))),
  "component---src-pages-api-reference-flash-mdx": hot(preferDefault(require("/Users/work/development/gatsby-starter-styled-components/src/pages/api-reference/Flash.mdx"))),
  "component---src-pages-api-reference-form-input-mdx": hot(preferDefault(require("/Users/work/development/gatsby-starter-styled-components/src/pages/api-reference/form/Input.mdx"))),
  "component---src-pages-api-reference-index-mdx": hot(preferDefault(require("/Users/work/development/gatsby-starter-styled-components/src/pages/api-reference/index.mdx"))),
  "component---src-pages-api-reference-network-indicator-mdx": hot(preferDefault(require("/Users/work/development/gatsby-starter-styled-components/src/pages/api-reference/NetworkIndicator.mdx")))
}

