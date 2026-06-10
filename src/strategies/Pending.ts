import type { ColorTypeInterface } from "../contracts/ColorTypeInterace";

export class Pending implements ColorTypeInterface {
  setColor(): string {
    return "var(--default-yellow)";
  }
}
