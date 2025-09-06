export const folders = [
  "src/styles/abstracts",
  "src/styles/base",
  "src/styles/layout",
  "src/styles/pages",
  "src/styles/sections",
];

export const partials: Record<string, string> = {
  "src/styles/abstracts/_mixins.scss": `
@use "./variables" as vars;
// MEDIA QUERY BREAKPOINTS
/*
  0 - 393px -> extraSmallMobile
  393px - 430px -> smallMobile
  430px - 600px -> mobile
  600px - 960px -> tablet-portrait
  960px - 1200px -> tablet-landscape
  1200px - 1800px -> desktop
  1800px + -> desktop-large
  $breakpoint = {
    iphone15: 0,
    iphone15ProMax: 393,
    mobile: 430,
    tabletPortrait: 600,
    tabletLandscape: 960,
    desktop: 1200,
    desktopLarge: 1800
  }
*/
@mixin responsive($breakpoint) {
  @if $breakpoint == "extraSmallMobile" {
    @media only screen and (max-width: 24.5625em) {
      @content;
    }
  } @else if $breakpoint == "smallMobile" {
    @media only screen and (max-width: 26.875em) {
      @content;
    }
  } @else if $breakpoint == "mobile" {
    @media only screen and (max-width: 37.5em) {
      @content;
    }
  } @else if $breakpoint == "tabletPortrait" {
    @media only screen and (max-width: 60em) {
      @content;
    }
  } @else if $breakpoint == "tabletLandscape" {
    @media only screen and (max-width: 75em) {
      @content;
    }
  } @else if $breakpoint == "desktopLarge" {
    @media only screen and (min-width: 112.5em) {
      @content;
    }
  }
}
`,
  "src/styles/abstracts/_variables.scss": `
$primary-background: #000000;
$secondary-background: #ffffff;
$primary-text: #ffffff;
`,
  "src/styles/abstracts/_index.scss": `
@forward "../abstracts/variables";
@forward "../abstracts/mixins";
`,
  "src/styles/base/_animations.scss": `
@use "@/styles/abstracts" as *;
`,
  "src/styles/base/_index.scss": `
@forward "../base/animations";
@forward "../base/reset";
@forward "../base/typography";
@forward "../base/utilities";
`,
  "src/styles/base/_reset.scss": `
@use "../abstracts/mixins";
@use "@/styles/abstracts" as *;
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  font-size: 62.5%; // 1 rem = 10px = 10px/16px = 62.5%
  scroll-behavior: smooth;
  @include mixins.responsive(tabletLandscape) {
    font-size: 56.25%; // 1 rem = 9px = 9px/16px = 56.25%
  }
  @include mixins.responsive(tabletPortrait) {
    font-size: 50%; // 1 rem = 8px = 8px/16px = 50%
  }
  @include mixins.responsive(desktopLarge) {
    font-size: 68.75%; // 1 rem = 11px = 11px/16px = 68.75%
  }
}
body {
  box-sizing: border-box;
  background-color: $primary-background;
  overflow-x: hidden;
}
a {
  color: inherit;
  text-decoration: none;
  background-color: transparent;
  &:hover,
  &:focus {
    color: inherit;
    text-decoration: none;
  }
}
`,
  "src/styles/layout/_grid.scss": `
@use "@/styles/abstracts" as *;
.container {
  margin: 0 auto;
  padding: 0 2rem;
}
.grid {
  display: grid;
  row-gap: 5rem;
  column-gap: 10rem;
  @include responsive(tabletPortrait) {
    row-gap: 5rem;
    column-gap: 5rem;
  }
  &:not(:last-child) {
    margin-bottom: 15rem;
  }
  &--2-cols {
    grid-template-columns: repeat(2, 1fr);
    @include responsive(mobile) {
      grid-template-columns: 1fr;
    }
  }
  &--3-cols {
    grid-template-columns: repeat(3, 1fr);
    @include responsive(tabletPortrait) {
      grid-template-columns: repeat(2, 1fr);
    }
    @include responsive(mobile) {
      grid-template-columns: 1fr;
    }
  }
  &--4-cols {
    grid-template-columns: repeat(4, 1fr);
    @include responsive(tabletPortrait) {
      grid-template-columns: repeat(1, 1fr);
    }
    @include responsive(mobile) {
      grid-template-columns: 1fr;
    }
  }
  &--5-cols {
    grid-template-columns: repeat(5, 1fr);
    column-gap: 8rem;
    @include responsive(tabletPortrait) {
      grid-template-columns: repeat(4, 1fr);
      row-gap: 6rem;
    }
    @include responsive(mobile) {
      grid-template-columns: repeat(6, 1fr);
      row-gap: 4rem;
      column-gap: 6rem;
    }
  }
  &--20-cols {
    grid-template-columns: repeat(20, 1fr);
    column-gap: 2rem;
  }
}
`,
  "src/styles/layout/_index.scss": `
@forward "../layout/grid";
`,
  "src/styles/main.scss": `
@use "abstracts";
@use "base";
@use "layout";
// @use "pages";
// @use "sections";
`,
};
