import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --primaryColor: #673ab7;
    --dPrimaryColor: #512da8;
    --lPrimryColor: #d1c4e9;

    --textIcons: #fff;
    --accentColor: #8bc34a;
    --primaryText: #212121;
    --secundaryText: #757575;
    --dividerColor: #bdbdbd;

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Questrial", sans-serif;
}

`;
