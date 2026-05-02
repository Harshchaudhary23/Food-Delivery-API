const express = require("express");
const router = express.Router();
const Food = require("../models/Food");


router.post("/foods", async (req, res) => {
  try {
    const food = new Food(req.body);
    const savedFood = await food.save();
    res.status(201).json(savedFood);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.get("/foods", async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get("/foods/:id", async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) return res.status(404).json({ message: "Food not found" });
    res.json(food);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.put("/foods/:id", async (req, res) => {
  try {
    const food = await Food.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!food) return res.status(404).json({ message: "Food not found" });

    res.json(food);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.delete("/foods/:id", async (req, res) => {
  try {
    const food = await Food.findByIdAndDelete(req.params.id);

    if (!food) return res.status(404).json({ message: "Food not found" });

    res.json({ message: "Food deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get("/foods/available", async (req, res) => {
  try {
    const foods = await Food.find({ isAvailable: true });
    res.json(foods);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;