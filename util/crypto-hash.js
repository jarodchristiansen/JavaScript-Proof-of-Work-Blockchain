const crypto = require("crypto");

const cryptoHash = (...inputs) => {
  const hash = crypto.createHash("sha256");

  hash.update(
    inputs
      .map((input) => JSON.stringify(input))
      .sort((a, b) =>
        a.localeCompare(b, "en", { sensitivity: "variant", numeric: true })
      )
      .join(" ")
  );
  return hash.digest("hex");
};

module.exports = cryptoHash;
