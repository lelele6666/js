let a = 'VIP'

// 场景 1
if (a === 'VIP') {
  return 1
} else if (a === 'SVIP') {
  return 2
}

// 场景 2
switch(a) { // 感谢 红山老六 的评论指出这部分代码的 bug。现已改正
  case 'VIP':
    return 1
  case 'SVIP':
    return 2
}

// 场景 3
let obj = {
  VIP: 1,
  SVIP: 2
}[a]

console.log(obj)

