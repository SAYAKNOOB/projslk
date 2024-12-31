import { fixture } from "../hooks/pageFixture";
import { Page } from "playwright";

export default class HomePage {
  goto(arg0: string) {
    throw new Error("Method not implemented.");
  }
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openHomePage() {
    await this.page.goto("https://www.google.com");
  }

  async searchFor(searchTerm: string) {
    await this.page.fill('input[name="q"]', searchTerm);
    await this.page.press('input[name="q"]', "Enter");
  }
}