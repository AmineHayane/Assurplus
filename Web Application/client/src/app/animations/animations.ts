import { enterLeaveLeft, enterLeaveRight} from './enterleave.animation';
import { scale } from './scale.animation';
import {flyInOrOutLeft, flyInOrOutRight} from './flyInOrOut';
import { carousel } from './carousel.animation';
import { fadeInOut } from './fadeInOut';

export class Animations {
  public static enterLeaveLeft = enterLeaveLeft;
  public static enterLeaveRight = enterLeaveRight;
  public static scale = scale;
  public static flyInOrOutLeft = flyInOrOutLeft;
  public static flyInOrOutRight = flyInOrOutRight;
  public static carousel = carousel;
  public static fadeInOut = fadeInOut;
}

