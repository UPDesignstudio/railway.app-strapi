'use strict';

/**
 * filter-a service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::filter-a.filter-a');
