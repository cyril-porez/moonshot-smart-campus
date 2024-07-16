'use strict';

/**
 * student-evaluation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::student-evaluation.student-evaluation');
