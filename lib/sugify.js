const isStartWithString = (stirng) => isNaN(Number(stirng.charAt(0)));

const sugify = (text, leadingString = "") => {
  if (!text) throw Error("text string is missing!");

  if (leadingString && !isStartWithString(leadingString))
    throw Error("leadingString can not start with Numeric character!");

  let slugPrefix = "";

  if (!isStartWithString(text)) {
    if (leadingString) {
      slugPrefix = leadingString;
    } else {
      slugPrefix = "_sugify_";
    }
  }

  return (
    slugPrefix +
    text
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[\u0980-\u09FF]/g, (char) => {
        return char;
      })
      .replace(/[^a-z0-9\u0980-\u09FF\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/^-+|-+$/g, "")
      .replace(/--+/g, "-")
  );
};

export default sugify