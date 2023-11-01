import express from "express";
import cors from "cors";
const PORT = 5002;

const app = express();

app.use(
  cors({
    origin: "http://localhost:3001",
    methods: "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 기본 페이지
app.get("/", (req, res, next) => {
  try {
    res.send("여기는 띵거의 블로그입니다.");
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(PORT, () => {
  console.log(`정상적으로 서버를 시작하였습니다.  http://localhost:${PORT}`);
});

export { app };
