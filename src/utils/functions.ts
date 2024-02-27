export function isIdExist(id: unknown): asserts id {
  if (id) return;
  throw new Error("error");
}