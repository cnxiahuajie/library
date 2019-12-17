// 前后端数据AES加解密
import CryptoJS from 'crypto-js/crypto-js'

/**
 * AES加密 ：字符串 key iv  返回base64
 * @param {*} word
 */

export function Encrypt(word, aesKey, aesIV) {
    if (!word) {
        return word;
    }
    let key = CryptoJS.enc.Utf8.parse(aesKey)
    let srcs = CryptoJS.enc.Utf8.parse(word)
    let encrypted = CryptoJS.AES.encrypt(srcs, key, {
        iv: CryptoJS.enc.Utf8.parse(aesIV),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    })
    return CryptoJS.enc.Base64.stringify(encrypted.ciphertext)
}

/**
 * AES 解密 ：字符串 key iv  返回base64
 * @param {*} word
 */
export function Decrypt(word, aesKey, aesIV) {
    if (!word) {
        return word;
    }
    let key = CryptoJS.enc.Utf8.parse(aesKey)
    let base64 = CryptoJS.enc.Base64.parse(word)
    let src = CryptoJS.enc.Base64.stringify(base64)
    try {
        let decrypt = CryptoJS.AES.decrypt(src, key, {
            iv: CryptoJS.enc.Utf8.parse(aesIV),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        })
        let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
        return decryptedStr.toString()
    } catch(err){
        return word;
    }
}