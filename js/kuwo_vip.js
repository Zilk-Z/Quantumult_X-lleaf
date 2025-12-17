// Kuwo VIP Fake Script
let body = $response.body;

try {
  let obj = JSON.parse(body);

  if (obj.data) {
    obj.data.isVip = 1;
    obj.data.vip = 1;
    obj.data.vipLevel = 8;
    obj.data.expire = "2099-12-31";
    obj.data.vipType = "svip";
  }

  body = JSON.stringify(obj);
} catch (e) {}

$done({ body });
