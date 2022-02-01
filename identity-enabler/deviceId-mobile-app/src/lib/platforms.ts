/* eslint-disable @typescript-eslint/naming-convention */
import { Capacitor } from "@capacitor/core";

/** Platform (web, ios, android). */
export const platform = Capacitor.getPlatform();

/** Determines if current platform is web. */
export const __WEB__ = platform === "web";

/** Determines if current platform is ios. */
export const __IOS__ = platform === "ios";

/** Determines if current platform is android. */
export const __ANDROID__ = platform === "android";
