var log = console.log.bind(console);

var a  = new Set();

a.add(22)
a.add(12)

log(a.has(22))
log('entries----', a.entries() )

var ent = a.entries();
log( 'next().value----',ent.next().value)
log( 'values--',a.values())
log( 'keys---',a.keys())

log('set--',a)

a.forEach( (key, v) => {
log(key, v)
})