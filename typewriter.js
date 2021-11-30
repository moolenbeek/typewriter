const sentence = "hello there from lighthouse labs";
const typewriter = (data) => {
for (let i = 0; i < data.length; i++) {
setTimeout(() =>{
  process.stdout.write(data[i]);
 }, 50 * i);
}
};

typewriter(sentence);