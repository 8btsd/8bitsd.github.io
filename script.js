JavaScript （英语）

包装

复制
// 开发者入口密码验证
function checkDevPassword() {
    const password = document.getElementById('devPassword').value;
    const devPanel = document.getElementById('devPanel');
    const errorMsg = document.getElementById('errorMsg');

    if (password === 'Shen2025!') {
        devPanel.style.display = 'block';
        errorMsg.textContent = '';
        loadPrices();
    } else {
        errorMsg.textContent = '密码错误，请重试';
        devPanel.style.display = 'none';
    }
}

// 加载当前价格（从 localStorage 或默认值）
function loadPrices() {
    let basicPrice = localStorage.getItem('basicPrice') || 20;
    let premiumPrice = localStorage.getItem('premiumPrice') || 128;

    document.getElementById('basicPrice').textContent = basicPrice;
    document.getElementById('premiumPrice').textContent = premiumPrice;
    document.getElementById('basicPriceDisplay').textContent = basicPrice;
    document.getElementById('premiumPriceDisplay').textContent = premiumPrice;
}

// 更新价格并保存到 localStorage
function updatePrice(type, newPrice) {
    if (newPrice && !isNaN(newPrice) && newPrice > 0) {
        if (type === 'basic') {
            localStorage.setItem('basicPrice', newPrice);
            document.getElementById('basicPrice').textContent = newPrice;
            document.getElementById('basicPriceDisplay').textContent = newPrice;
        } else if (type === 'premium') {
            localStorage.setItem('premiumPrice', newPrice);
            document.getElementById('premiumPrice').textContent = newPrice;
            document.getElementById('premiumPriceDisplay').textContent = newPrice;
        }
        alert('价格已更新，请手动更新网站代码以同步显示。');
    } else {
        alert('请输入有效的价格（大于 0 的数字）');
    }
}

// 更新下载密码并保存到 localStorage
function updateDownloadPassword(newPassword) {
    if (newPassword && newPassword.length > 0) {
        localStorage.setItem('downloadPassword', newPassword);
        document.getElementById('downloadPasswordDisplay').textContent = newPassword;
        alert('下载密码已更新，请通知用户使用新密码。');
    } else {
        alert('请输入有效的密码');
    }
}

// 下载页面密码验证
function checkDownloadPassword() {
    const password = document.getElementById('downloadPassword').value;
    const storedPassword = localStorage.getItem('downloadPassword') || 'ShenPay2025!';
    const downloadLink = document.getElementById('downloadLink');
    const downloadError = document.getElementById('downloadError');

    if (password === storedPassword) {
        downloadLink.style.display = 'block';
        downloadError.textContent = '';
    } else {
        downloadError.textContent = '密码错误，请重试';
        downloadLink.style.display = 'none';
    }
}

// 页面加载时加载价格和密码
window.onload = function() {
    loadPrices();
    const storedDownloadPassword = localStorage.getItem('downloadPassword') || 'ShenPay2025!';
    document.getElementById('downloadPasswordDisplay').textContent = storedDownloadPassword;
};