import { DailySelector } from "../interface";
console.log("data", document.querySelector("#community > div.ldst__bg > div.ldst__contents.clearfix > div > div.entry__block__wrapper > div:nth-child(49) > div > div.entry__blog_block__box.clearfix.add_image > a")?.outerHTML)

document.querySelector("#community > div.ldst__bg > div.ldst__contents.clearfix > div > div.entry__block__wrapper > div:nth-child(49) > div > div.entry__blog_block__box.clearfix.add_image > a")

const generateDailySelector = (index: number): DailySelector => {
  const selector = `#community > div.ldst__bg > div.ldst__contents.clearfix > div > div.entry__block__wrapper > div:nth-child(${index}) > div`
  return {
    entirety: selector,
    user: selector + " > div.entry__blog_block__search > div > a",
    server: selector + " > div.entry__blog_block__search > div > p",
    url: selector + " > div.entry__blog_block__box.clearfix.add_image > a",
  }

}
export default generateDailySelector;