import { createCat, fetchCat } from "./requests";

async function main() {
  const newCat = await createCat("Senacy", "Tamboer", -1);
  console.log(newCat);

  const fetchedCats = [
    await fetchCat(1),
    await fetchCat(2),
    await fetchCat(3),
    await fetchCat(4),
  ];

  console.log(fetchedCats);
}

main().catch((err) => {
  console.log(err);
});
