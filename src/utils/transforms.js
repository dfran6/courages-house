export function captureTransform(node) {
  return {
    position: node.position.clone(),
    rotation: node.rotation.clone(),
    scale: node.scale.clone(),
  };
}