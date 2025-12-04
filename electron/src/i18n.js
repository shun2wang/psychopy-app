import { I18n } from 'i18n';
import path from 'path';

/**
 * require I18n with capital I as constructor
 */
// const { I18n } = require("i18n")

/**
 * create a new instance
 */
const i18n = new I18n()

/**
 * later in code configure
 */
i18n.configure({
  locales: ['en', 'de'],
  directory: path.join("src", '/locales')
})
