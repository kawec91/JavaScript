import { createDiv } from "../function/createDiv.js";
import { createH3 } from "../function/createH3.js";
import { createImage } from "../function/createImage.js";
import { createP } from "../function/createP.js";
export function createFooter() {
  return `
  <footer>
    ${createDiv(createH3("Titel"), createP("lorem lorem loeaerafcgfhfgfg"))}
    ${createDiv(
      createImage(
        "https://i.natgeofe.com/k/6a90cf0a-6d14-443c-8786-c76bf1803b87/belgium-ghent-channel_16x9.jpg?w=1200"
      ),
      createP(
        "gababdhuadjnmfskgdfgklmhmgfgjklhhjkmgflkhm  hgklfhfgklhm lhklgfhmgfkl hgf khlgf h gfh dgfmlhgflorem lorem loeaerafcgfhfgfg"
      )
    )}
  </footer>
  `;
}
