// deno-fmt-ignore-file

/**
 * The name of the userstyle(s).
 */
export type Name = [string, string, ...string[]] | string;
/**
 * The category that fits the port the most.
 */
export type Category =
  | "browser"
  | "browser_extension"
  | "cli"
  | "code_editor"
  | "development"
  | "game"
  | "leisure"
  | "library"
  | "messaging"
  | "note_taking"
  | "productivity"
  | "search_engine"
  | "social"
  | "system"
  | "terminal";
/**
 * The fill color for the icon on the Catppuccin website.
 */
export type Color =
  | "rosewater"
  | "flamingo"
  | "pink"
  | "mauve"
  | "red"
  | "maroon"
  | "peach"
  | "yellow"
  | "green"
  | "teal"
  | "sky"
  | "sapphire"
  | "blue"
  | "lavender"
  | "text";
/**
 * The icon to use on the website. This should be the same name as the SVG file on https://simpleicons.org/. If a `.svg` suffix is present, it's taken from the local website repository resources.
 */
export type Icon = string;
/**
 * The hyperlink of the app that is being themed.
 */
export type ApplicationLink = [string, string, ...string[]] | string;
/**
 * The Usage section of the userstyle README.
 */
export type Usage = string;
/**
 * The FAQ section of the userstyle README.
 *
 * @minItems 1
 */
export type FAQ = [
  {
    question: Question;
    answer: Answer;
    [k: string]: unknown;
  },
  ...{
    question: Question;
    answer: Answer;
    [k: string]: unknown;
  }[]
];
/**
 * A question that a user may have about the userstyle.
 */
export type Question = string;
/**
 * An answer to the question about the userstyle.
 */
export type Answer = string;
/**
 * The display name of the collaborator to show in the userstyle README.
 */
export type DisplayName = string;
/**
 * The GitHub profile link of the collaborator to show in the userstyle README.
 */
export type GitHubProfile = string;
/**
 * List of all active maintainers for this userstyle.
 */
export type CurrentMaintainers = {
  name?: DisplayName;
  url: GitHubProfile;
  [k: string]: unknown;
}[];
/**
 * List of all maintainers that have maintained on this userstyle in the past.
 *
 * @minItems 1
 */
export type PastMaintainers = [
  {
    name?: DisplayName;
    url: GitHubProfile;
    [k: string]: unknown;
  },
  ...{
    name?: DisplayName;
    url: GitHubProfile;
    [k: string]: unknown;
  }[]
];
/**
 * Represents all maintainers and contributors to all userstyles.
 *
 * @minItems 1
 */
export type AllCollaborators = [
  {
    name?: DisplayName;
    url: GitHubProfile;
    [k: string]: unknown;
  },
  ...{
    name?: DisplayName;
    url: GitHubProfile;
    [k: string]: unknown;
  }[]
];

export interface UserstylesSchema {
  userstyles?: Userstyles;
  collaborators?: AllCollaborators;
}
/**
 * All userstyles in the Catppuccin org.
 */
export interface Userstyles {
  [k: string]: Userstyle;
}
/**
 * The directory of the userstyle.
 *
 * This interface was referenced by `Userstyles`'s JSON-Schema definition
 * via the `patternProperty` "[A-Za-z0-9_\-]".
 */
export interface Userstyle {
  name: Name;
  category: Category;
  color?: Color;
  icon?: Icon;
  readme: README;
}
/**
 * Options to help in the auto-generation of the userstyle README.
 */
export interface README {
  "app-link": ApplicationLink;
  usage?: Usage;
  faq?: FAQ;
  "current-maintainers": CurrentMaintainers;
  "past-maintainers"?: PastMaintainers;
  [k: string]: unknown;
}
