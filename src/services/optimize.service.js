const AWS = require('aws-sdk');
const { basename, extname } = require('path');
const S3 = new AWS.S3()
const sharp = require('sharp');

const LoggerService = require('./logger.service')

module.exports = class OpmizeImage {
    constructor(records) {
        this.records = records
    }
    async optimizer() {
        return Promise.all(this.records.map(async record => {
            const key = decodeURIComponent(record.s3.object.key.replace(/\+/g, ' '))
            LoggerService.info(key)
            const image = await S3.getObject({
                Bucket: process.env.bucket,
                Key: key
            }).promise()

            const opmizedImage = await sharp(image.Body)
                .resize(1280, 720, { fit: 'inside', withoutEnlargement: true })
                .toFormat('jpeg', { progressive: true, quality: 50 })
                .toBuffer()

            const result = await S3.putObject({
                Body: opmizedImage,
                Bucket: process.env.bucket,
                ContentType: 'image/jpeg',
                Key: `compressed/${basename(key, extname(key))}.jpg`
            }).promise()

            LoggerService.info(result)

            await S3.deleteObject({
                Bucket: process.env.bucket,
                Key: key
            }).promise()

        }))
    }
}