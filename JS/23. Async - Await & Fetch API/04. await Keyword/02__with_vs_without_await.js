// ================================================================ WITH vs WITHOUT AWAIT =================================================================

async function main() {
  let data1 = getData();
  console.log(data1);               // Promise {<pending>} ❌

  let data2 = await getData();
  console.log(data2);               // 455 ✅ (after 3 seconds)
}

main();