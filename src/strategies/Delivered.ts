import type { ColorTypeInterface } from "../contracts/ColorTypeInterace";

export class Delivered implements ColorTypeInterface {
  setColor(): string {
    return "var(--default-green)";
  }
}
