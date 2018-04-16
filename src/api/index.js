/**
 * The method calls return:
 * - verifyUsername
 *    @return {object} - {response: {exists: Boolean, setup: Boolean}, success: Boolean }
 * - login
 *    @return {object} - {response: Boolean, success: Boolean }
 * - requestToken
 *    @return {object} - {response: Boolean, success: Boolean }
 * - verifyToken
 *    @return {object} - {response: {exists: Boolean, valid: Boolean}, success: Boolean }
 * - updatePassword
 *    @return {object} - {response: {updated: Boolean, token_valid: Boolean}, success: Boolean }
 */

import axios from "axios";
import Api from "./calls";

const url = "";

export default new Api(axios, url);
