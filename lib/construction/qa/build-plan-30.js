import {buildStructure} from '../30/structure.js';
import {planToSVG} from '../30/plan.js';
import fs from 'node:fs';
import assert from 'node:assert/strict';
const model=buildStructure();
const svg=planToSVG(model,{areaNote:true});
assert(!/NaN|Infinity|undefined/.test(svg));
fs.writeFileSync('site/assets/krokusy-2-plan.svg',svg);
