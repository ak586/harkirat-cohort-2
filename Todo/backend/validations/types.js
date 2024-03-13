const zod = require("zod");
const todoType = zod.object({
  title: zod.string(),
  description: zod.string(),
});

module.exports = { todoType };
