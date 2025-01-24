import {Color} from "./Color";

export enum ForwardDirection {
  UP = 1,
  DOWN = -1,
}

export const colorDirectionMap: Record<Color, ForwardDirection> = {
  WHITE: ForwardDirection.UP,
  BLACK: ForwardDirection.DOWN,
};
