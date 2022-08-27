import express from "express"
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body;
    if (!username || !avatar) {
        return res.status(400).send({ erro: "Envie todos os campos!" })
    }
    users.push({
        username,
        avatar
    })
    res.send("Ok")
})

app.post("/tweets", (req, res) => {
    const { username, tweet } = req.body;
    if (!username || !tweet) {
        return res.status(400).send({ erro: "Envie todos os campos!" })
    }
    tweets.push({
        username,
        tweet
    });
    res.send("Ok")
})


app.get("/tweets", (req, res) => {
    const lastTweets = [];
    if (tweets.length > 0) {
        for (let i = tweets.length - 1; i >= (tweets.length - 10) && i > 0; i--) {
            const avatar = users.find(
                (e) => e.username === tweets[i].username
            ).avatar

            lastTweets.push({
                avatar,
                ...tweets[i]
            });
        }
    }
    res.send(lastTweets)
})

app.listen(5000, () => console.log("Escutando na porta 5000"))