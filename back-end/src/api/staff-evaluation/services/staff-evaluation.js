'use strict';

/**
 * staff-evaluation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::staff-evaluation.staff-evaluation');
