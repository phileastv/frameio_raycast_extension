/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Browse Default Folder ID - Browse opens directly at this location. Copy a Folder / Project / Workspace ID from the Browse command (⌘K → Copy ID) and paste it here. */
  "defaultFolderId"?: string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `browse` command */
  export type Browse = ExtensionPreferences & {}
  /** Preferences accessible in the `search` command */
  export type Search = ExtensionPreferences & {}
  /** Preferences accessible in the `open-last-folder` command */
  export type OpenLastFolder = ExtensionPreferences & {}
  /** Preferences accessible in the `recent-uploads` command */
  export type RecentUploads = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `browse` command */
  export type Browse = {}
  /** Arguments passed to the `search` command */
  export type Search = {}
  /** Arguments passed to the `open-last-folder` command */
  export type OpenLastFolder = {}
  /** Arguments passed to the `recent-uploads` command */
  export type RecentUploads = {}
}

