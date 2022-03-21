import deleteDailyBlocks from "./modules/deleteDaily";
deleteDailyBlocks();
// interface DailySelector {
//   entirety: string,
//   user: string,
//   server: string,
//   url: string,
// }

// const removedPlayerList = ["Komegu Kobayashi", "Yoran Oran"]
// const generateDailySelector = (index: number): DailySelector => {
//   const selector = `#community > div.ldst__bg > div.ldst__contents.clearfix > div > div.entry__block__wrapper > div:nth-child(${index}) > div`
//   return {
//     entirety: selector,
//     user: selector + " > div.entry__blog_block__search > div > a",
//     server: selector + " > div.entry__blog_block__search > div > p",
//     url: selector + " > div.entry__blog_block__search > div > div.entry__blog_block__box.clearfix > a",
//   }

// }

// // urlの取得のためのコード
// console.log(document.querySelector("#community > div.ldst__bg > div.ldst__contents.clearfix > div > div.entry__block__wrapper > div:nth-child(14) > div > div.entry__blog_block__box.clearfix > a")?.outerHTML.split("\"")[1]);
// // console.log('Must reload extension for modifications to take effect.');
// console.log(document.querySelector("#community > div.ldst__bg > div.ldst__contents.clearfix > div > div.entry__block__wrapper > div:nth-child(19) > div > div.entry__blog_block__search > div > a")?.textContent);
// console.log(document.querySelector("#community > div.ldst__bg > div.ldst__contents.clearfix > div > div.entry__block__wrapper > div:nth-child(13) > div > div.entry__blog_block__search > div > p")?.textContent);

// const deleteDailyBlocks = () => {
//   [...Array(50)].forEach((_: undefined, idx: number): void => {
//     const selector = generateDailySelector(idx + 1);
//     console.log("slector", document.querySelector(selector.user)?.textContent);
//     const shouldRemove = removedPlayerList?.some((name: string) => name === document.querySelector(selector.user)?.textContent);
//     shouldRemove && document.querySelector(selector.entirety)?.remove();
//   })

// }

// deleteDailyBlocks();

// // document.querySelector("#community > div.ldst__bg > div.ldst__contents.clearfix > div > div.entry__block__wrapper > div:nth-child(1) > div")
// // document.querySelector("#community > div.ldst__bg > div.ldst__contents.clearfix > div > div.entry__block__wrapper > div:nth-child(4) > div")
// // document.querySelector("#community > div.ldst__bg > div.ldst__contents.clearfix > div > div.entry__block__wrapper > div:nth-child(48)")
// // document.querySelector("#community > div.ldst__bg > div.ldst__contents.clearfix > div > div.entry__block__wrapper > div:nth-child(46) > div")
// // document.querySelector("#community > div.ldst__bg > div.ldst__contents.clearfix > div > div.entry__block__wrapper > div:nth-child(9) > div > div.entry__blog_block__search > div")
// // document.querySelector("#community > div.ldst__bg > div.ldst__contents.clearfix > div > div.entry__block__wrapper > div:nth-child(12) > div > div.entry__blog_block__search > div > a")
// printLine("Using the 'printLine' function from the Print Module");
