/**
 * OpenID Connect UserInfo Response
 *
 * Represents the claims returned from the UserInfo Endpoint about the authenticated end-user.
 * Based on the OpenID Connect Core 1.0 specification (Section 5.3).
 * https://openid.net/specs/openid-connect-core-1_0.html#UserInfoResponse
 */

interface OIDCUserInfoResponse {
  /**
   * Subject - Identifier for the end-user at the issuer.
   * This is the only required claim and corresponds to the user's unique identifier.
   * @required
   */
  sub: string;

  /**
   * End-user's full name in displayable form including all name parts.
   * May be localized using the locale parameter.
   */
  name?: string;

  /**
   * Given name(s) or first name(s) of the end-user.
   * May be localized using the locale parameter.
   */
  given_name?: string;

  /**
   * Surname(s) or last name(s) of the end-user.
   * May be localized using the locale parameter.
   */
  family_name?: string;

  /**
   * Middle name(s) of the end-user.
   * May be localized using the locale parameter.
   */
  middle_name?: string;

  /**
   * Casual name of the end-user that may or may not be the same as the given_name.
   * For instance, a nickname value of "Mike" might be returned alongside a given_name value of "Michael".
   */
  nickname?: string;

  /**
   * Shorthand name by which the end-user wishes to be referred to.
   * For example, a preferred_username value of "j.doe" might be returned alongside a sub value of "24400320".
   */
  preferred_username?: string;

  /**
   * URL of the end-user's profile page.
   * The URL should point to a page that will provide profile information about the end-user.
   */
  profile?: string;

  /**
   * URL of the end-user's profile picture.
   * Should be a URL that can be used to retrieve an image file representing the end-user's profile picture.
   */
  picture?: string;

  /**
   * URL of the end-user's web page or blog.
   * This URL is a personal web page, blog, or similar page belonging to the end-user.
   */
  website?: string;

  /**
   * End-user's preferred e-mail address.
   * Its value MUST conform to the RFC 5322 addr-spec syntax.
   * The RP MUST NOT rely upon this value being unique.
   */
  email?: string;

  /**
   * True if the end-user's e-mail address has been verified; otherwise false.
   * When this Claim Value is true, this means that the OP took affirmative steps to ensure that this e-mail
   * address was controlled by the end-user at the time the verification was performed.
   */
  email_verified?: boolean;

  /**
   * End-user's gender. Values defined by the specification are "female" and "male",
   * though other values MAY be used when neither of those is applicable.
   */
  gender?: string;

  /**
   * End-user's birthday, represented as an ISO 8601:2004 YYYY-MM-DD format.
   * The year MAY be 0000, indicating that it is omitted. To represent only the year, YYYY format is allowed.
   * @example "1970-01-01"
   */
  birthdate?: string;

  /**
   * String from zoneinfo time zone database representing the end-user's time zone.
   * For example, Europe/Paris or America/Los_Angeles.
   * @example "Europe/London"
   */
  zoneinfo?: string;

  /**
   * End-user's locale, represented as a BCP47 language tag.
   * This is typically an ISO 639-1 Alpha-2 language code in lowercase and an ISO 3166-1 Alpha-2 country code in uppercase,
   * separated by a dash. For example, en-US or fr-CA.
   * @example "en-US"
   */
  locale?: string;

  /**
   * End-user's preferred telephone number.
   * E.164 format is RECOMMENDED, for example, +1 (425) 555-1212 or +56 (2) 687 2400.
   * @example "+1 (425) 555-1212"
   */
  phone_number?: string;

  /**
   * True if the end-user's phone number has been verified; otherwise false.
   * When this Claim Value is true, this means that the OP took affirmative steps to ensure that this phone number
   * was controlled by the end-user at the time the verification was performed.
   */
  phone_number_verified?: boolean;

  /**
   * End-user's preferred postal address.
   * The value of the address member is a JSON structure containing some or all of these members.
   */
  address?: {
    /**
     * Full mailing address, formatted for display or use on a mailing label.
     * This field MAY contain multiple lines, separated by newlines.
     */
    formatted?: string;

    /**
     * Full street address component, which MAY include house number, street name, etc.
     * This field MAY contain multiple lines, separated by newlines.
     */
    street_address?: string;

    /**
     * City or locality component.
     */
    locality?: string;

    /**
     * State, province, prefecture, or region component.
     */
    region?: string;

    /**
     * Zip code or postal code component.
     */
    postal_code?: string;

    /**
     * Country name component. Format should be the full name of the country.
     */
    country?: string;
  };

  /**
   * Time the end-user's information was last updated.
   * This is a JSON number representing the number of seconds from 1970-01-01T00:00:00Z
   * as measured in UTC until the date/time.
   */
  updated_at?: number;

  /**
   * Allows for custom or implementation-specific claims.
   * Identity providers may include additional user information beyond the standard claims.
   */
  [key: string]: any;
}

export type { OIDCUserInfoResponse };
