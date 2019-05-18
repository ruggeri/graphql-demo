import * as winston from "winston";
import { createCat, fetchCat } from "./requests";

winston.configure({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.prettyPrint(),
  ),
  transports: [new winston.transports.Console()],
});

async function main(): Promise<void> {
  const newCat = await createCat("Senacy", "Tamboer", -1);
  winston.info("newCat", { newCat });

  const fetchedCats = [
    await fetchCat(1),
    await fetchCat(2),
    await fetchCat(3),
    await fetchCat(4),
  ];

  winston.info("fetchedCats", { fetchedCats });
}

main().catch(
  (err: Error): void => {
    winston.error(err);
  },
);
