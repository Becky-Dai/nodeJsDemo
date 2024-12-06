import crypto from 'crypto';

// // 创建哈希对象
// const hash = crypto.createHash('sha256'); // 选择哈希算法，如 'sha256'
// // 更新哈希内容
// hash.update('password123');
// // 生成哈希摘要并输出
// console.log(hash.digest('hex'));

// crypto.randomBytes(16,(err,buf) => {
//     if (err) throw err;
//     console.log(buf.toString('hex'));
// })

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm,key,iv);
let encrypted = cipher.update('hello guys','utf8','hex');
encrypted += cipher.final('hex');
console.log(encrypted);

const decipher = crypto.createDecipheriv(algorithm,key,iv);
let decrypted = decipher.update(encrypted,'hex','utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);