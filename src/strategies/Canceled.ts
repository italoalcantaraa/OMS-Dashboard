import type { ColorTypeInterface } from "../contracts/ColorTypeInterace";

export class Canceled implements ColorTypeInterface {
  setColor(): string {
    return "var(--default-red)";
  }
}
