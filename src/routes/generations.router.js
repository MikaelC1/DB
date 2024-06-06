const express = require("express");
const generationUseCase = require("../usecases/generations.usecase");

const route = express.Router();

route.get("/", async (request, response) => {
  try {
    const generation = await generationUseCase.getAll();
    response.json({
      succes: true,
      message: "All generation",
      data: { generation },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      error: error.message,
    });
  }
});

route.post("/", async (request, response) => {
  try {
    const generations = await generationUseCase.create(request.body);

    response.json({
      succes: true,
      data: { generation: generations },
    });
  } catch (error) {
    response.status(error.status || 500);

    response.json({
      succes: false,
      error: error.message,
    });
  }
});

route.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const generation = await generationUseCase.getById(id);

    response.json({
      succes: true,
      data: { generation },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      succes: false,
      error: error.message,
    });
  }
});

route.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const generationDeleted = await generationUseCase.deleteById(id);

    response.json({
      succes: true,
      data: { generation: generationDeleted },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      succes: false,
      error: error.message,
    });
  }
});

route.patch("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const generationUpdate = await generationUseCase.updateById(id);

    response.json({
      succes: true,
      data: { generation: generationUpdate },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      succes: false,
      error: error.message,
    });
  }
});

module.exports = route;