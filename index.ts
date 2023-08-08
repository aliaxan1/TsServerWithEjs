import express from "express";
const port = 3000;
const app = express();

let products:string[] = [];
app.set("view engine", "ejs");
app.use(express.json());

app.get("/", (req, res) => {
  res.render("addNewProduct");
});

app.post("/add-product", async (req, res) => {
  const { product } = req.body;
  products.push(product as string);
  console.log("product:", product);
  console.log("Products array", products);
  res.redirect("/product");
});

app.get("/product", (req, res) => {
  res.render("product", { products });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
