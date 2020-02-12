 const mov: ReadonlyArray<string> = [

    'B', 'L', 'A'
  ];
  const newA= mov.slice().sort()
  //console.log({mov});
  //console.log(newA);

  const s= [1, 'z', 6, 2, 11, 5, 'a']
  s.sort((a:any, b:any) => a - b);
  //console.log("s", s)

  const data = [
    {
      name: 'AAA',
      year: 2008
    },
    {
      name: 'ffff',
      year: 34
    },
    {
      name: 'CCCC',
      year: 45
    }
  ];

  var t = data.sort((a, b) => a.year - b.year); //O(n logn)
  console.log("Data sort ", t);