import express from "express"

const app = express();
app.use(express.json());


const users = [];

/* = {
    username: 'bobesponja',
    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
    {
  "username": "bobesponja",
  "tweet": "eu amo o hub"
}
} */

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


app.listen(5000, () => console.log("Escutando na porta 5000"))