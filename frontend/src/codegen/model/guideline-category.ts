/* tslint:disable */
/* eslint-disable */
/**
 * Flathub API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { Guideline } from "./guideline"

/**
 *
 * @export
 * @interface GuidelineCategory
 */
export interface GuidelineCategory {
  /**
   *
   * @type {string}
   * @memberof GuidelineCategory
   */
  id: string
  /**
   *
   * @type {Array<Guideline>}
   * @memberof GuidelineCategory
   */
  guidelines: Array<Guideline>
}
