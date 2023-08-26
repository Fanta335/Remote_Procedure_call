import net from "net";
import readline from "readline";

// ソケットの作成
const client = net.createConnection("./socket_file");
client.on("connect", () => {
  console.log("Successfully connected to server.");
});

// 標準入力を受け取るためのインスタンスを作成
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

client.on("data", (data) => {
  if (data) {
    console.log(`Server response: ${data.toString()}`);

    rl.question("Please input command.\n", (ans) => {
      const input = ans.split(" ");
      while (input[input.length - 1] === "") {
        input.pop();
      }
      const req = {
        method: input[0],
        params: input.slice(1, input.length),
      };
      client.write(JSON.stringify(req));
      // rl.close();
    });
  }
});
