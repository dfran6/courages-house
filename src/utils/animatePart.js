import { lerp } from "./math";


export function animatePart(node, original, progress, offset) {
    node.position.x =
        original.position.x +
        lerp(offset, 0, progress);
}