exports.options = {
  routePrefix: "/documentation",
  exposeRoute: true,
  swagger: {
    info: {
      title: "Dosth API",
      description:
        "Building a blazing fast REST API with Node.js, MongoDB, Fastify and Swagger",
      version: "0.0.1"
    },
    externalDocs: {
      url: "https://swagger.io",
      description: "Find more info here"
    },
    host: "localhost",
    schemes: ["https"],
    consumes: ["application/json"],
    produces: ["application/json"]
  }
};
