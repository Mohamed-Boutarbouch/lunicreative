const BASE_PATH = "/lunicreative";

export function assetPath(path: string) {
  return process.env.NODE_ENV === "production" ? `${BASE_PATH}${path}` : path;
}
