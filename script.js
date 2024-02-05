document.getElementById('drawButton').addEventListener('click', function() {
  const input = document.getElementById('entry').value;
  const quantity = parseInt(document.getElementById('quantity').value, 10) || 1;
  if (input) {
    const items = input.split(',').map(item => item.trim()).filter(item => item !== "");
    if (quantity >= 1 && quantity <= items.length) {
      let results = [];
      for (let i = 0; i < quantity; i++) {
        const index = Math.floor(Math.random() * items.length);
        results.push(items.splice(index, 1)[0]); // 移除已選項目，避免重複
      }
      document.getElementById('result').innerText = `恭喜，您抽中了：${results.join(', ')}！`;
    } else {
      document.getElementById('result').innerText = '抽取數量無效或超過項目總數。';
    }
  } else {
    document.getElementById('result').innerText = '請輸入抽獎項目。';
  }
});
