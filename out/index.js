var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
const port = 3000;
const app = express();
let products = [];
app.set("view engine", "ejs");
app.use(express.json());
app.get("/", (req, res) => {
    res.render("addNewProduct");
});
app.post("/add-product", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { product } = req.body;
    products.push(product);
    console.log("product:", product);
    console.log("Products array", products);
    res.redirect("/product");
}));
app.get("/product", (req, res) => {
    res.render("product", { products });
});
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
