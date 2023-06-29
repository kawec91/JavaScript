import { createDl } from "../function/createDl.js";
import { createTable } from "../function/createTable.js";
const myDl = {
  dlTitel: ["Titel1", "Titel2", "Titel3"],
  dlDescription: [
    { titel: "Titel1", description: "Lorem ipsum..." },
    { titel: "Titel2", description: ";lkjhgtfsd" },
    { titel: "Titel3", description: "afg jhgj jfghds." },
    { titel: "Titel2", description: "kkkgkhhgjgrefdfds" },
    { titel: "Titel1", description: "kdfgsijogfkpoasd;kvcxkopdrsa" },
    { titel: "Titel3", description: "fbmnodfdfgiobnuddfgubd" },
    {
      titel: "Titel2",
      description: "fdghfghfgjxdndxgfhbfdsgdsfdsfsdfsdfsdfhgjughjyhfh",
    },
    { titel: "Titel1", description: "Lorem ipsum..." },
    {
      titel: "Titel1",
      description:
        "fdghfghfgjxdndxgfhbfdskdfgsijogfkpoasd;kvcxkopdrsagdsfdsfsdfsdfsdfhgjughjyhfh",
    },
    { titel: "Titel2", description: "Lofdsfdggthtgkhjgfjhgfgdfhfdgfd" },
    {
      titel: "Titel3",
      description:
        "fdghfghfgjxdndxgfhafg jhgj jfghds.bfdskdfgsijogfkpoasd;kvcxkopdrsagdsfdsfsdfsdfsdfhgjughjyhfh",
    },
  ],
  tableHeader: ["TableHeader1", "TableHeader2", "TableHeader3"],
  tableContent: [
    { produkt: "name1", menge: 2, preis: 19.99 },
    { produkt: "name2", menge: 5, preis: 9.99 },
    { produkt: "name3", menge: 22, preis: 119.99 },
    { produkt: "name4", menge: 210, preis: 1.99 },
  ],
};

export function createMain() {
  return `
  <main>
    ${createDl(myDl)}
    ${createTable(myDl.tableHeader, myDl.tableContent)}
  </main>`;
}
