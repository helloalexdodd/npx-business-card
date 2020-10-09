const portrait = [
  `                  /                    `,
  `                 /                     `,
  `         ,,###_ /                      `,
  `       ,########,                      `,
  `      ,##      ##,        _.-._        `,
  `      ##  ~  ~  ##       | | | |_      `,
  `      {# (.)(.) #}       | | | | |     `,
  `       #   _)   #      _ |  '-._ |     `,
  `       #,######,#      \`\`-.'-._;     `,
  `       ##, -- ,##       \\    '   |    `,
  `       '########'        \\  .\`  /    `,
  `         '####'           |    |       `,
  `                                       `,
  `                                       `,
  `                                       `,
];

let i = 0;

const print = () => {
  const timeout = 150;
  return new Promise((res) => {
    setTimeout(() => {
      console.log(portrait[i]);
      i += 1;
      if (i < portrait.length) print();
    }, timeout);
    setTimeout(() => {
      res();
    }, timeout * (portrait.length + 1));
  });
};

module.exports = print;
