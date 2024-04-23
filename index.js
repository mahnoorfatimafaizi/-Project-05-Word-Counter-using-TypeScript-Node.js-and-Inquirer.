import inquirer from "inquirer";
async function countWords() {
    const answers = await inquirer.prompt([
        {
            name: "sentence",
            type: "input",
            message: "Enter your paragraph: ",
        },
    ]);
    const words = answers.sentence.trim().split(/\s+/);
    console.log("Your paragraph words are:", words);
    console.log(`Your paragraph word count is ${words.length}`);
}
countWords();
