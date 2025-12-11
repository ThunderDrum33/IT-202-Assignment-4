import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let selectedProduct = null;

const products = [
  {
    id: 1,
    name: "Chicken",
    price: 17.59,
    description: "Yum.",
    image: "c:\Users\jthar\OneDrive\Pictures\Chicken.png"
  },
  {
    id: 2,
    name: "Taco",
    price: 19.99,
    description: "I got hungry making this damn project.",
    image: "c:\Users\jthar\OneDrive\Pictures\Taco.png"
  },
  {
    id: 3,
    name: "Mug",
    price: 59.99,
    description: "I despise angular.",
    image: "c:\Users\jthar\OneDrive\Pictures\Soup.png"
  },
  {
    id: 4,
    name: "Rat",
    price: 79.99,
    description: "Mouse, if you're techy.",
    image: "c:\Users\jthar\OneDrive\Pictures\Mouse.png"
  }
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.post("/api/select-product", (req, res) => {
  selectedProduct = req.body;
  res.json({ message: "Product selected successfully" });
});

app.get("/api/selected-product", (req, res) => {
  res.json(selectedProduct || {});
});

app.post("/api/submit-order", (req, res) => {  
  res.json({ message: "Your item will be delivered soon." });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));