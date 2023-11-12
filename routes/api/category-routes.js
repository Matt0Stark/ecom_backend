const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// REMEMBER TO COME BACK AND CHANGE X TO MODEL

router.get('/', async (req, res) => {
  try {
    const allCategories = await X.findAll();
    // include: []
    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err);
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // try {
  //   const travellerData = await Traveller.findByPk(req.params.id, {
     
  //     include: [{ model: Location, through: Trip, as: 'planned_trips' }]
  //   });

  //   if (!travellerData) {
  //     res.status(404).json({ message: 'No traveller found with this id!' });
  //     return;
  //   }

  //   res.status(200).json(travellerData);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try {
    const categoryData = await X.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await X.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: "no matching category found"});
      return;
    }
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err)
  }
  // delete a category by its `id` value
});

module.exports = router;
