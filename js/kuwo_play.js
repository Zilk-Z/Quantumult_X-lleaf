// Kuwo Play Unlock Script
let body = $response.body;

try {
  let obj = JSON.parse(body);

  if (obj.data) {
    // 解除试听限制
    if (obj.data.limit !== undefined) {
      obj.data.limit = false;
    }

    // 可播放标志
    if (obj.data.playable !== undefined) {
      obj.data.playable = true;
    }

    // 去 VIP 标记
    if (obj.data.needVip !== undefined) {
      obj.data.needVip = false;
    }
  }

  body = JSON.stringify(obj);
} catch (e) {}

$done({ body });