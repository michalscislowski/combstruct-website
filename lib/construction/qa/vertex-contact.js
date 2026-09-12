import {Vector3} from 'three';

// A vertex-to-surface query independently verifies thin tip contacts which
// the geometry-to-geometry BVH threshold can prune at angled bounding boxes.
// Geometries and bounding boxes here are already in world coordinates.
export function vertexContact(a, b, tolerance) {
  for (const [source, target] of [[a, b], [b, a]]) {
    const bounds=target.box.clone().expandByScalar(tolerance),point=new Vector3();
    const positions=source.geometry.attributes.position;
    for(let i=0;i<positions.count;i++){
      point.fromBufferAttribute(positions,i);
      if(!bounds.containsPoint(point))continue;
      const hit=target.geometry.boundsTree.closestPointToPoint(point,{},tolerance/2,tolerance);
      if(hit&&hit.distance<tolerance)return true;
    }
  }
  return false;
}
