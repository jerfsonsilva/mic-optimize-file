'use strict';
const LoggerService = require('../../services/logger.service');
const OpmizeImage = require('../../services/optimize.service');

module.exports.handler = async(event) => {
    try {
        LoggerService.info('Received event:', JSON.stringify(event, null, 2))
        const opmizedImage = new OpmizeImage(event.Records)
        await opmizedImage.optimizer()
        return {
            statusCode: 301
        }
    } catch (error) {
        LoggerService.error('Error optimizeS3Event', error)
        return {
            statusCode: 400,
            error
        }
    }
};