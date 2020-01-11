declare module os {
  export function getenv(this: void, path: string): string
}

declare module hs {
  export const alert: Alert
  export const drawing: {
    color: Color
  }
  export const http: HTTP
  export const json: Json
  export const task: Task
  export const screen: SpoonScreen
  export const timer: Timer
}

// --- hs.alert ---
// https://www.hammerspoon.org/docs/hs.alert.html

declare type UUID = string

declare type DefaultStyle = {
  /**  a number specifying the font size to be used for the alert text, defaults to 27. */
  textSize?: number
  fillColor?: RGBColorRepresentation | HSBColorRepresentation
}

/** @noSelf */
declare class Alert {
  defaultStyle: DefaultStyle
  closeAll(seconds?: number): never
  closeSpecific(uuid: UUID, seconds?: number)
  show(str: string, style?: DefaultStyle): UUID
}

// --- hs.drawing.color ---
// https://www.hammerspoon.org/docs/hs.drawing.color.html

declare type RGBColor = {
  /** the red component of the color specified as a number from 0.0 to 1.0. */
  red: number,
  /** the green component of the color specified as a number from 0.0 to 1.0. */
  green: number,
  /** the blue component of the color specified as a number from 0.0 to 1.0 */
  blue: number,
  /** the color transparency from 0.0 (completely transparent) to 1.0 (completely opaque) */
  alpha: number,
}

declare type RGBColorRepresentation = RGBColor

declare type HSBColor = {
  /** the hue component of the color specified as a number from 0.0 to 1.0. */
  hue: number,
  /** the saturation component of the color specified as a number from 0.0 to 1.0. */
  saturation: number,
  /** the brightness component of the color specified as a number from 0.0 to 1.0. */
  brightness: number,
  /** the color transparency from 0.0 (completely transparent) to 1.0 (completely opaque) */
  alpha: number,
}

declare type HSBColorRepresentation = HSBColor

/** @noSelf */
declare class Color {
  ansiTerminalColors: any
  /** This table contains a collection of various useful pre-defined colors */
  hammerspoon: {
    /** The same red used for OS X window close buttons */
    osx_red: any,
    /** The same green used for OS X window zoom buttons */
    osx_green: any,
    /** The same yellow used for OS X window minimize buttons */
    osx_yello: any,
  }
  /** A collection of colors representing the X11 color names as defined at https://en.wikipedia.org/wiki/Web_colors#X11_color_names (names in lowercase) */
  x11: any
  /** Returns a table containing the HSB representation of the specified color. */
  asRGB(color: RGBColor): RGBColorRepresentation
  asHSB(color: HSBColor): HSBColorRepresentation
  colorsFor(list: string[]): any | null
  lists(): any
}

// --- hs.http ---
// https://www.hammerspoon.org/docs/hs.http.html

/** @noSelf */
declare class HTTP {
  asyncGet(
    url: string,
    headers: { [key: string]: string } | null,
    callback: (
      this: void,
      httpStatus: number,
      body: string,
      headers: { [key: string]: string }
    ) => void
  )
  urlParts(url: string): {
    baseURL: string,
    absoluteString: string,
    absoluteURL: string,
    fileSystemRepresentation: string,
    fragment: string,
    host: string,
    isFileURL: boolean,
    lastPathComponent: string,
    parameterString: string,
    password: string,
    path: string,
    pathComponents: string,
    pathExtension: string,
    port: string,
    query: string,
    queryItems: { [key: string]: any },
    relativePath: string,
    relativeString: string,
    resourceSpecifier: string,
    scheme: string,
    standardizedURL: string,
    user: string,
  }
}

// --- hs.json ---
// https://www.hammerspoon.org/docs/hs.json.html

/** @noSelf */
declare class Json {
  /** Decodes JSON into a table */
  decode<T = {}>(jsonString: string): T
  /**Encodes a table as JSON */
  encode<T = {}>(table: T, prettyPrint?: boolean): string
  /** Decodes JSON file into a table. */
  read<T = {}>(path: string): T | null
  /** Encodes a table as JSON to a file */
  write<T = {}>(data: T, path: string, prettyPrint?: boolean, replace?: boolean): boolean
}

// --- hs.task ---
// https://www.hammerspoon.org/docs/hs.task.html

declare class Task {
  new(
    this: void,
    launchPath: string,
    callbackFn: (this: void, exitCode: number, stdOut: string, stdErr: string) => void,
    streamCallbackFn?: (this: void, task: Task | null, stdOut: string, stdErr: string) => void,
    arguments?: string[]
  ): Task
  new(
    this: void,
    launchPath: string,
    callbackFn: (this: void, exitCode: number, stdOut: string, stdErr: string) => void,
    arguments?: string[]
  ): Task

  terminate(): Task
  start(): Task | false
}


// --hs.screen ---
// https://www.hammerspoon.org/docs/hs.screen.html

declare class SpoonScreen {
  mainScreen(this: void): SpoonScreen
  desktopImageURL(imageURL?: string): Screen | string
}

// --- hs.timer ---
// https://www.hammerspoon.org/docs/hs.timer.html

declare class Timer {

  doEvery(this: void, interval: number, fn: (this: void) => void): Timer

  setNextTrigger(seconds: number): Timer

  start(): Timer
  stop(): Timer
}