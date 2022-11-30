import * as Migration from "../migrations/migration.js";

(async () => {
  console.log("Migrations...");
  await Migration.up();
})();

export default