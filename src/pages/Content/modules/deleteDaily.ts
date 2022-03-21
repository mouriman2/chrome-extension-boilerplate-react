import generateDailySelector from "./generateDailySelector";

const LOADSTONE_DAILY_COUNT_IN_PAGE = 50;
const removedPlayerList = ["Komegu Kobayashi", "Yoran Oran"]
// https://jp.finalfantasyxiv.com/lodestone/character/21044371/blog/4873452/
const removedLink = ["/lodestone/character/21044371/blog/4873452/"]

const deleteDailyBlocks = () => {
  [...Array(LOADSTONE_DAILY_COUNT_IN_PAGE)].forEach((_: undefined, idx: number): void => {
    const selector = generateDailySelector(idx + 1);
    const shouldRemove = removedPlayerList?.some((name: string) => name === document.querySelector(selector.user)?.textContent);
    shouldRemove && document.querySelector(selector.entirety)?.remove();
    const shouldRemoveforLink = removedLink?.some((url: string) => url === document.querySelector(selector.url)?.outerHTML.split("\"")[1]);
    console.log("slector", document.querySelector(selector.url)?.outerHTML, shouldRemove, shouldRemoveforLink);
    shouldRemoveforLink && document.querySelector(selector.entirety)?.remove();
  })

}

export default deleteDailyBlocks;