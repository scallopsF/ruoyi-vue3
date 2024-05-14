// 引入crypto-js库
import CryptoJS from 'crypto-js';

const secretKey = '5deae3cbc88fef5d0486edc23a6c84ef50a5c839ec0edbefe1db2e10d63713a3'

// 加密函数
function encryptData(data, key) {
    return CryptoJS.AES.encrypt(data, key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7}).toString();
  }

  // 解密函数
  function decryptData(ciphertext, key) {
    const bytes  = CryptoJS.AES.decrypt(ciphertext, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  }


// 加密
export function encrypt(originalData) {
    var key = CryptoJS.enc.Hex.parse(secretKey)
    return encryptData(originalData,key)
}

// 解密
export function decrypt(encryptedData) {
    return decryptData(encryptedData, secretKey);
}

