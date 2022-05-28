'use strict';
const LoggerService = require('../../services/logger.service');
const OpmizeImage = require('../../services/optimize.service');

module.exports.handler = async(event) => {
    const log = new LoggerService('Function.opmize')
    try {
        log.info({ msg: 'Received event:', event })
        const opmizedImage = new OpmizeImage(event.Records)
        await opmizedImage.optimizer()
        return {
            statusCode: 301
        }
    } catch (error) {
        log.info({ msg: 'RError optimizeS3Event:', error })
        return {
            statusCode: 400,
            error
        }
    }
};