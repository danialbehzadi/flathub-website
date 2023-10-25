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
import { GuidelineCategory } from "./guideline-category"
// May contain unused imports in some cases
// @ts-ignore
import { QualityModerationType } from "./quality-moderation-type"

/**
 *
 * @export
 * @interface QualityModerationResponse
 */
export interface QualityModerationResponse {
  /**
   *
   * @type {Array<GuidelineCategory>}
   * @memberof QualityModerationResponse
   */
  categories: Array<GuidelineCategory>
  /**
   *
   * @type {{ [key: string]: QualityModerationType; }}
   * @memberof QualityModerationResponse
   */
  marks: { [key: string]: QualityModerationType }
}
