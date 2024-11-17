const sentence = "hello there from Lighthouse Labs";

sentence.split('').forEach((char, index) => {
    setTimeout(() => {
        process.stdout.write(char);
    }, index * 50)
})

setTimeout(() => {
    process.stdout.write("\n")
}, sentence.length * 50)