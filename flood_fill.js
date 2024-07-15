/**
https://leetcode.com/problems/flood-fill/submissions/1321309834/
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const ROW = image.length;
  const COL = image[0].length;

  const ORIG_PIXEL = image[sr][sc];

  const traverse = (sr, sc) => {
    if (sr < 0 || sr === ROW) return;
    if (sc < 0 || sc === COL) return;
    if (image[sr][sc] !== ORIG_PIXEL) return;
    if (image[sr][sc] === color) return;

    image[sr][sc] = color;
    traverse(sr, sc + 1);
    traverse(sr, sc - 1);
    traverse(sr + 1, sc);
    traverse(sr - 1, sc);
    return;
  };

  traverse(sr, sc);
  return image;
};
