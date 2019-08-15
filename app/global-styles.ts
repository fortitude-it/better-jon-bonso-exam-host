import { createGlobalStyle } from 'styles/styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  @import url('https://fonts.googleapis.com/css?family=Lato:400,700|Lora|Playfair+Display:700i,900');

html,
body {
  margin: 0;
  width: 100%;
}

h1,
h2,
p,
i,
a,
.first-letter,
.authorName a {
  color: rgba(0, 0, 0, 0.84);
  text-rendering: optimizeLegibility;
}

h1 {
  font-family: "Playfair Display", serif;
  font-size: 48px;
  text-align: left;
  margin-bottom: 8px;
}

h2 {
  font-family: "Lato", sans-serif;
  font-size: 26px;
  font-weight: 700;
  padding: 0;
  margin: 56px 0 -13px -1.883px;
  text-align: left;
  line-height: 34.5px;
  letter-spacing: -0.45px;
}

p, i, a {
  margin-top: 21px;
  font-family: "Lora";
  font-size: 18px;
  letter-spacing: -0.03px;
  line-height: 1.58;
}

a {
  text-decoration: underline;
}

blockquote {
  font-family: "Playfair Display", serif;
  font-size: 30px;
  font-style: italic;
  letter-spacing: -0.36px;
  line-height: 44.4px;
  overflow-wrap: break-word;
  margin: 55px 0 33px 0;
  /* text-align: center; */
  color: rgba(0, 0, 0, 0.68);
  padding: 0 0 0 50px;
}

code {
  font-size: 18px;
  background: rgba(0,0,0,.05);
  border-radius: 2px;
  padding: 3px 5px;
}

.highlighted {
  background: #7DFFB3;
}

.first-letter {
  overflow-wrap: break-word;
  font-family: "Playfair Display", serif;
  font-size: 60px;
  line-height: 60px;
  display: block;
  position: relative;
  float: left;
  margin: 0px 7px 0 -5px;
}

.subtitle {
  font-family: "Lato", sans-serif;
  color: rgba(0, 0, 0, 0.54);
  margin: 0 0 24px 0;
}

/* ##################################################################################
########################################  LAYOUT  ###################################
##################################################################################### */

.container {
  display: -ms-grid;
  display: grid;
      -ms-grid-columns: auto 166px 740px 166px auto;
      grid-template-columns: auto 166px 740px 166px auto;
      -ms-grid-rows: 450px auto 150px;
      grid-template-rows: 450px auto 150px;
      grid-template-areas:
    ". img img img ."
    ". . article . ."
    ". . footer . .";
}

.meta {
  -ms-grid-row: 1;
  -ms-grid-column: 2;
  -ms-grid-column-span: 3;
  grid-area: img;
  margin: 10px;

  display: -ms-grid;

  display: grid;
      -ms-grid-rows: auto;
      grid-template-rows: auto;
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
    "info image";
}

.image {
  -ms-grid-row: 1;
  -ms-grid-column: 2;
  grid-area: image;
  background: url("https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec073341402b36bb155e3bcb77eea9cd&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb");
  background-size: cover;
  background-repeat: no-repeat;
}

.info {
  -ms-grid-row: 1;
  -ms-grid-column: 1;
  grid-area: info;
  padding: 60px 60px 0 0;
  margin-bottom: 30px;
}

.author {
  display: -ms-grid;
  display: grid;
      -ms-grid-columns: 60px auto;
      grid-template-columns: 60px auto;
      -ms-grid-rows: 60px;
      grid-template-rows: 60px;
      grid-template-areas:
    "authorImage authorInfo";
  margin-bottom: 10px;
}

.authorImage {
  -ms-grid-row: 1;
  -ms-grid-column: 1;
  grid-area: authorImage;
  border: 2px solid #7DFFB3;
  border-radius: 50%;
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1307985/profile/profile-512.jpg?1520076483');
  background-size: cover;
}

.authorInfo {
  -ms-grid-row: 1;
  -ms-grid-column: 2;
  grid-area: authorInfo;
  padding-left: 10px;
}

.authorName,
.authorSub {
  font-family: "Lato", sans-serif;
  font-size: 16px;
  font-weight: 400;
  margin-top: 6px;
}

.authorName a {
  font-size: inherit;
  font-family: inherit;
  text-decoration: none;
}

.authorName a:hover {
  text-decoration: underline;
}

.authorSub {
  color: rgba(0, 0, 0, 0.54);
}

.median-divider {
  padding: 0 6px;
}

.lineLength {
  border: 2px dashed rgba(0, 0, 0, 0.54);
}

.article {
  -ms-grid-row: 2;
  -ms-grid-column: 3;
  grid-area: article;
  margin: 40px 10px;
}

.footer {
  -ms-grid-row: 3;
  -ms-grid-column: 3;
  grid-area: footer;
  background: #333333;
}

@media screen and (max-width: 1072px) {
  .container {
        -ms-grid-columns: auto 740px auto;
        grid-template-columns: auto 740px auto;
        grid-template-areas:
      ". img ."
      ". article ."
      ". footer  .";
  }
  .meta {
    -ms-grid-row: 1;
    -ms-grid-column: 2;
    -ms-grid-column-span: 1;
  }
  .article {
    -ms-grid-row: 2;
    -ms-grid-column: 2;
  }
  .footer {
    -ms-grid-row: 3;
    -ms-grid-column: 2;
  }
}

@media screen and (max-width: 740px) {
  .container {
        -ms-grid-rows: auto auto 150px;
        grid-template-rows: auto auto 150px;
        -ms-grid-columns: auto;
        grid-template-columns: auto;
        grid-template-areas:
      "img"
      "article"
      "footer";
  }

  .meta {
        -ms-grid-rows: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        -ms-grid-columns: 1fr;
        grid-template-columns: 1fr;
        grid-template-areas:
      "info"
      "image";
  }
  .info {
    padding-top: 0;
  }
  .meta {
    -ms-grid-row: 1;
    -ms-grid-column: 1;
    -ms-grid-column-span: 1;
  }

  .image {
    -ms-grid-row: 2;
    -ms-grid-column: 1;
  }

  .info {
    -ms-grid-row: 1;
    -ms-grid-column: 1;
  }
  .article {
    -ms-grid-row: 2;
    -ms-grid-column: 1;
  }
  .footer {
    -ms-grid-row: 3;
    -ms-grid-column: 1;
  }
}
`;

export default GlobalStyle;
