
const allTwirls = `|\\-/|\n`;
let start = 0;

for (const char of allTwirls) {
  setTimeout(() => {
    process.stdout.write('\r' + char);
  }, start += 200);
}
//Need to know how to keep cursor in same position