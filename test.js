/** @jsx element */
import transform, {match, element} from './';

const upper = match('upper', ({node}) => <div>{node.text().toUpperCase()}</div>);

console.log(transform('<upper>rsnt</upper>', {upper}));
