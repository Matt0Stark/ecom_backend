const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// REMEMBER TO CHANGE THE X TO MODEL NAME

router.get('/', async (req, res) => {
  try {
    const tagsData = await X.findAll();
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err)
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await X.findByPk(req.params.id, {
      // include: [{ model: Location, through: Trip, as: 'planned_trips' }]
    });

    if  (!tagData) {
      res.status(404).json({ message: "no tag found matching that ID"});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  try {
    const tagdata =await X.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }

  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const tagData = await X.destroy({
      where: {id: req.params.id}
    });
    if (!tagData) {
      res.status(404).json({ message: 'No tag with this id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  // delete on tag by its `id` value
});

module.exports = router;
